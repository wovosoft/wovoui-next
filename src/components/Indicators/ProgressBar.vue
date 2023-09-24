<script setup lang="ts">
import {computed} from "vue";
import {ProgressBarProps} from "@/composables/useIndicators";

const props = withDefaults(defineProps<ProgressBarProps>(), {
	tag: 'div',
	min: 0,
	max: 100,
	value: 0,
	showValue: true
});

const attrs = computed(() => ({
	role: "progressbar",
	style: {width: props.value + '%'},
	ariaValuenow: props.value,
	ariaValuemax: props.max,
	ariaValuemin: props.min,
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
		<slot>
			{{ value }}%
		</slot>
	</component>
</template>
