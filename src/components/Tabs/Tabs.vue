<template>
	<component :is="tag" v-bind="attrs">
		<component :is="headerTag"  :class="[{'card-header':card}, headerClass]">
			<Nav :tabs="true"
			     :pills="pills"
			     :fill="fill"
			     :justified="justified"
			     :align="align"
			     :vertical="vertical"
			     tag="div"
			     role="tablist"
			     :class="{'card-header-pills':pills,'card-header-tabs':card}">
				<NavLink
					role="tab"
					v-for="(tab,tab_index) in tabsMap"
					:key="tab_index"
					:active="tab.visible"
					:aria-selected="tab.states.ariaSelected"
					@click="showTab(tab)"
					tag="button">
					{{ tab.title }}
				</NavLink>
			</Nav>
		</component>
		<TabContent :tag="contentTag" v-if="!end" :class="contentClass">
			<slot/>
		</TabContent>
	</component>
</template>
<script lang="ts" setup>
import {computed, onMounted, provide, ref, useModel} from "vue";
import {
	IsCardTabsInjection,
	RegisterTabInjection,
	TabMapItem,
	TabsProps,
	UnregisterTabInjection
} from "@/components/Tabs/index";
import NavLink from "@/components/Navigation/NavLink.vue";
import Nav from "@/components/Navigation/Nav.vue";
import TabContent from "@/components/Tabs/TabContent.vue";

const props = withDefaults(defineProps<TabsProps>(), {
	tag: 'div',
	headerTag: 'div',
	contentTag: 'div',
	modelValue: 0
});


const attrs = computed(() => ({
	class: {
		card: props.card,
		'd-flex': props.vertical,
		'align-items-start': props.vertical
	}
}));


const active = useModel(props, 'modelValue', {local: true})

onMounted(() => {
	if (tabsMap.value.length > 0) {
		showTab(tabsMap.value[props.modelValue]);
	}
});

const showTab = (tab: TabMapItem) => {
	const index = tabsMap.value.findIndex(t => t.uid === tab.uid);
	if (index > -1) {
		tabsMap.value.forEach((item: TabMapItem, idx: number) => {
			if (idx === index) {
				tabsMap.value[index].visible = true;
				tabsMap.value[index].updateVisibility(true);
			} else if (tabsMap.value[idx].visible) {
				item.visible = false;
				item.updateVisibility(false);
			}
		});
		active.value = index;
	}
}

/**
 * Records of subscribed child tabs
 */
const tabsMap = ref<TabMapItem[]>([]);

/**
 * Provide Method to Child method to be subscribed as tab
 */
provide(RegisterTabInjection, tab => tabsMap.value.push(tab));

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
 * Usually, the card prop should be constant in most scenario,
 * but sometimes, it might be different, so computed value is
 * a better approach.
 */
provide(IsCardTabsInjection, computed(() => !!props.card))
</script>