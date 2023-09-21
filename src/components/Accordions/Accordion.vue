<script setup lang="ts">
import {AccordionProps} from "@/composables/useAccordions";
import {onMounted, provide, Ref, ref, useModel, watch} from "vue";

const props = withDefaults(defineProps<AccordionProps>(), {
	tag: 'div',
	alwaysOpen: false,
});

const model = useModel(props, 'modelValue');

onMounted(() => {
	if (typeof props.modelValue === 'number') {
		toggleItem(props.modelValue);
	}
});

watch(model, (value, oldValue) => {
	if (value === oldValue) {
		toggleItem(value)
	}
});

const items = ref<Ref<boolean>[]>([]);

//let the Accordion know if it should always be open
provide('alwaysOpen', props.alwaysOpen);
provide('activeItemIndex', model.value);

/**
 * Register an item with the accordion.
 *
 * @param item
 */
provide('registerItem', (item: Ref<boolean>) => {
	items.value.push(item);
});

const toggleItem = (item: Ref<boolean> | number) => {
	let index: number;
	if (typeof item === 'number') {
		if (item < 0 || item > items.value.length - 1) {
			throw new Error('Invalid index');
		}
		
		index = item;
		item = items.value[item];
	} else {
		index = items.value.indexOf(item);
	}
	
	//if not always open hide not active but other items
	if (!props.alwaysOpen) {
		items.value.forEach((i) => {
			if (i !== item) {
				i.value = false;
			}
		});
	}
	
	item.value = !item.value;
	model.value = index;
};
//trigger active item and hide others
provide('toggleItem', toggleItem);

//returns index of AccordionItem with respect to its parent Accordion
provide('myIndexInAccordion', (item: Ref<boolean>): number => items.value.indexOf(item));
</script>

<template>
	<component :is="tag" class="accordion" :class="{'accordion-flush':flush}">
		<slot></slot>
	</component>
</template>
