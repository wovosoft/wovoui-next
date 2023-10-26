<script setup lang="ts">
import {computed} from "vue";
import {ProgressBarProps} from "@/components/Indicators/index";

const props = withDefaults(defineProps<ProgressBarProps>(), {
	tag: 'div',
	min: 0,
	max: 100,
	value: 0,
	showValue: true
});

const attrs = computed(() => ({
	style: {width: props.value + '%'},
	'aria-valuenow': props.value,
	'aria-valuemax': props.max,
	'aria-valuemin': props.min,
	class: [
		"progress-bar", {
			["bg-" + props.variant]: props.variant,
			"progress-bar-striped": props.striped,
			"progress-bar-animated": props.animated,
		}
	]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot :value="value">
			{{ value }}%
		</slot>
	</component>
</template>
