<script setup lang="ts">
import {AccordionButtonProps} from "@/components/Accordions/index";

withDefaults(defineProps<AccordionButtonProps>(), {
	type: 'button',
	collapsed: true,
});
</script>

<template>
	<button :type="type" class="accordion-button" :class="{'collapsed':collapsed}">
		<slot></slot>
	</button>
</template>
