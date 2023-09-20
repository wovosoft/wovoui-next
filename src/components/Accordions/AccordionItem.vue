<script setup lang="ts">
import {AccordionItemProps} from "@/composables/useAccordions";

const props = withDefaults(defineProps<AccordionItemProps>(), {
	tag: 'div'
})
</script>

<template>
	<component :is="tag" class="accordion-item">
	
	</component>
</template>
