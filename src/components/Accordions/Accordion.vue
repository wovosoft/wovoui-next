<script setup lang="ts">
import {onMounted, provide, Ref, ref, useModel, watch} from "vue";
import {
	AccordionActiveIndex,
	AccordionAlwaysOpenInjectionKey,
	AccordionItemIndexInjectionKey,
	AccordionProps, AccordionRegisterItemInjectionKey,
	AccordionToggleItemInjectionKey
} from "@/components/Accordions";

const props = withDefaults(defineProps<AccordionProps>(), {
	tag: 'div',
	alwaysOpen: false,
});

const model = useModel(props, 'modelValue', {local: true});
const items = ref<Ref<boolean>[]>([]);

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

//let the Accordion know if it should always be open
provide(AccordionAlwaysOpenInjectionKey, props.alwaysOpen);
provide(AccordionActiveIndex, model.value);

/**
 * Register an item with the accordion.
 *
 * @param item
 */
provide(AccordionRegisterItemInjectionKey, item => items.value.push(item));

//trigger active item and hide others
provide(AccordionToggleItemInjectionKey, toggleItem);

//returns index of AccordionItem with respect to its parent Accordion
provide(AccordionItemIndexInjectionKey, item => items.value.indexOf(item));
</script>

<template>
	<component :is="tag" class="accordion" :class="{'accordion-flush':flush}">
		<slot></slot>
	</component>
</template>
