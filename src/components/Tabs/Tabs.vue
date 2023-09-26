<template>
	<div :class="classes">
		<TabContent v-if="end" :class="contentClass">
			<slot/>
		</TabContent>
		<div :class="[{'card-header':card}, headerClass]">
			<Nav :tabs="true"
			     :pills="pills"
			     :fill="fill"
			     :justified="justified"
			     :align="align"
			     :vertical="vertical"
			     tag="div"
			     :class="{'card-header-pills':pills,'card-header-tabs':card}">
				<NavLink
					role="tab"
					v-for="(tab,tab_index) in tabsMap"
					:key="tab_index"
					:active="tab.visible"
					:aria-selected="tab.states.ariaSelected"
					:tabindex="tab.states.tabindex"
					@click="active=tab_index"
					tag="button">
					{{ tab.title }}
				</NavLink>
			</Nav>
		</div>
		
		<TabContent v-if="!end" :class="contentClass">
			<slot/>
		</TabContent>
	</div>
</template>

<script lang="ts" setup>
import {computed, onMounted, provide, ref, watch} from "vue";
import {IsCardTabsInjection, RegisterTabInjection, TabsProps, UnregisterTabInjection} from "@/components/Tabs/index";
import TabContent from "@/components/Tabs/TabContent.vue";
import NavLink from "@/components/Navigation/NavLink.vue";

const props = withDefaults(defineProps<TabsProps>(), {});

const emit = defineEmits<{
	(e: 'update:modelValue', value: number | null | undefined): void
}>();


const active = ref<number | null>();
onMounted(() => {
	if (props.modelValue !== null) {
		active.value = props.modelValue;
	} else if (tabsMap.value.length > 0) {
		active.value = tabsMap.value.findIndex(i => i.visible);
	}
});

/**
 * Watchers
 */

watch(() => props.modelValue, value => {
	if (value !== active.value) {
		active.value = value;
	}
});

watch(active, (index: number | null | undefined) => {
	emit('update:modelValue', index);
	
	//find visible tabs and then hide. Theoretically, there should have only one visible tab in a
	//certain tabs. But if there are multiple, we do the following actions to perform everything properly
	//without any risk
	tabsMap.value
		.filter(tab => tab.visible)
		.forEach(tab => {
			tab.updateVisibility(false);
		});
	//show target tab
	tabsMap.value[index].updateVisibility(true);
});

const classes = computed(() => ({
	card: props.card,
	'd-flex': props.vertical,
	'align-items-start': props.vertical
}));


/**
 * Records of subscribed child tabs
 */
const tabsMap = ref<TabMapItem[]>([]);

/**
 * Provide Method to Child method to be subscribed as tab
 */
provide(RegisterTabInjection, (tab: TabMapItem) => tabsMap.value.push(tab));

/**
 * Provide Method to Child method to be unsubscribed as tab
 */
provide(UnregisterTabInjection, (uid: number) => {
	let index = tabsMap.value.findIndex(t => t.uid === uid);
	if (index > -1) {
		tabsMap.value.splice(index, 1);
	}
});

/**
 * Usually the card prop should be constant in most scenario,
 * but sometimes, it might be different, so computed value is
 * a better approach.
 */
provide(IsCardTabsInjection, computed<boolean>(() => !!props.card))
</script>