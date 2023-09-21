<script setup lang="ts">
import {CollapseProps, useCollapse} from "@/composables/useAccordions";
import {useModel, watch, computed} from "vue";

const props = withDefaults(defineProps<CollapseProps>(), {
	tag: 'div',
	modelValue: false,
});

const emit = defineEmits<{
	show: [value: any];
	shown: [value: any];
	hide: [value: any];
	hidden: [value: any];
	'update:modelValue': [value: boolean]
}>();

const isShown = useModel(props, 'modelValue');

const {toggle, states} = useCollapse(
	props,
	() => emit('show', true),
	() => {
		emit('shown', true);
		isShown.value = true;
	},
	() => emit('hide', true),
	() => {
		emit('hidden', true);
		isShown.value = false;
	}
);

const classes = computed(() => ({
	'accordion-collapse': props.accordion,
	'collapse': !states.transitioning,
	'collapsing': states.transitioning,
	'collapse-horizontal': props.horizontal,
	'show': states.show,
}));

watch(isShown, value => toggle(value))

defineExpose({
	show: () => toggle(true),
	hide: () => toggle(false),
	toggle: () => toggle(!states.shown)
});
</script>
<template>
	<component :is="tag" :class="classes">
		<div v-if="horizontal" :style="{width:width}">
			<slot></slot>
		</div>
		<slot v-else></slot>
	</component>
</template>
