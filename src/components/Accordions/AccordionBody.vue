<script setup lang="ts">
import {AccordionBodyProps} from "@/components/Accordions/index";

withDefaults(defineProps<AccordionBodyProps>(), {
	tag: 'div',
});
</script>

<template>
	<component :is="tag" class="accordion-body">
		<slot></slot>
	</component>
</template>
