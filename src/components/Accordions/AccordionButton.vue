<script setup lang="ts">
import {AccordionButtonProps} from "@/composables/useAccordions";

withDefaults(defineProps<AccordionButtonProps>(), {
	type: 'button'
});
</script>

<template>
	<button :type="type" class="accordion-button" :class="{'collapsed':collapsed}">
		<slot></slot>
	</button>
</template>
