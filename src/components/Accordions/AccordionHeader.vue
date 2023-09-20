<script setup lang="ts">
import {AccordionHeaderProps} from "@/composables/useAccordions";

withDefaults(defineProps<AccordionHeaderProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="accordion-header">
		<slot></slot>
	</component>
</template>
