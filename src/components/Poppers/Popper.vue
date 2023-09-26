<script setup lang="ts">
import {getCurrentInstance, onMounted, VNode, VNodeArrayChildren} from "vue";
import usePopper from "@/composables/usePopper";

withDefaults(defineProps<{
	tag?: keyof HTMLElementTagNameMap;
}>(), {});


onMounted(() => {
	const children = getCurrentInstance().subTree.children as VNodeArrayChildren;
	const referenceChildren = children.find((child: VNode) => child['key'] === '_reference')?.['children'];
	if (referenceChildren.length !== 1) {
		throw new Error("Reference Slot should have only one element");
	}
	
	const referenceElement = referenceChildren?.[0]?.el;
	
	const defaultChildren = children.find((child: VNode) => child['key'] === '_default')?.['children'];
	if (defaultChildren.length !== 1) {
		throw new Error("Default Slot should have only one element");
	}
	
	const popperElement = defaultChildren?.[0]?.el;
	
	const popper = usePopper(referenceElement, popperElement);
});
</script>

<template>
	<component :is="tag">
		<slot name="reference"></slot>
		<slot></slot>
	</component>
</template>
