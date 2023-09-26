<script setup lang="ts">
import {ButtonHTMLAttributes, computed} from "vue";
import {ButtonCloseProps} from "@/components/Buttons";

const props = withDefaults(defineProps<ButtonCloseProps>(), {
	ariaLabel: 'Close'
});

const attrs = computed(() => ({
	type: "button" as ButtonHTMLAttributes['type'],
	disabled: props.disabled,
	ariaLabel: props.ariaLabel,
	class: [
		"btn-close",
		{
			'btn-close-white': props.white,
			["btn-" + props.size]: props.size
		}
	]
}));
</script>

<template>
	<button v-bind="attrs"></button>
</template>