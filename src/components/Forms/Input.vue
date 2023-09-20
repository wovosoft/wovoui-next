<script setup lang="ts">
import {InputProps} from "@/composables/useForms";
import {computed, inject, useModel} from "vue";
import {isFalse} from "@/composables/useHelpers";

const props = withDefaults(defineProps<InputProps>(), {
	type: 'text',
	state: null
});

const hasFloatingLabel = inject('hasFloatingLabel') as boolean;
const attrs = computed(() => ({
	placeholder: (props.placeholder || hasFloatingLabel) ? (props.placeholder || '') : null,
	ariaInvalid: isFalse(props.state) ? true : null,
	type: props.type,
	class: {
		["form-control" + (props.plain ? "-plaintext" : "")]: props.type !== "range",
		"form-range": props.type === "range",
		"is-valid": props.state === true,
		"is-invalid": props.state === false,
		["form-control-" + props.size]: !!props.size,
		"form-control-color": props.type === "color"
	}
}));

const model = useModel(props, 'modelValue');
</script>

<template>
	<input v-model="model" v-bind="attrs"/>
</template>