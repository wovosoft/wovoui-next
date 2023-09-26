<script setup lang="ts">
import AccordionHeader from "@/components/Accordions/AccordionHeader.vue";
import AccordionBody from "@/components/Accordions/AccordionBody.vue";
import Collapse from "@/components/Accordions/Collapse.vue";
import AccordionButton from "@/components/Accordions/AccordionButton.vue";
import {inject, onMounted, Ref, ref} from "vue";
import {AccordionItemProps} from "@/components/Accordions/index";

withDefaults(defineProps<AccordionItemProps>(), {
	tag: 'div',
	modelValue: false,
});

const isShown = ref<boolean>(false);

//inject  registerItem from Accordion
const registerItem = inject<(item: Ref<boolean>) => void>('registerItem');

//register item
onMounted(() => registerItem(isShown));

const toggleItem = inject<(item: Ref<boolean>) => void>('toggleItem');

const showItem = () => toggleItem(isShown);
</script>

<template>
	<component :is="tag" class="accordion-item">
		<AccordionHeader>
			<AccordionButton @click="showItem" :collapsed="!isShown" :aria-expanded="isShown">
				<slot name="header">
					{{ header }}
				</slot>
			</AccordionButton>
		</AccordionHeader>
		<Collapse v-model="isShown" accordion>
			<AccordionBody>
				<slot></slot>
			</AccordionBody>
		</Collapse>
	</component>
</template>
