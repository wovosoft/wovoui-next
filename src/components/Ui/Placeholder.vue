<script setup lang="ts">
import {computed} from "vue";
import {generateClasses} from "@/composables/useHelpers";
import {PlaceholderProps} from "@/components/Ui";

const props = withDefaults(defineProps<PlaceholderProps>(), {
	tag: "div",
});

const classes = computed(() => [
	{
		placeholder: !props.glow
	},
	generateClasses({
		placeholderGlow: props.glow,
		placeholderWave: props.wave,
		placeholderAnimation: props.animation,
		placeholderSize: props.size,
		bg: props.variant,
		col: props.col,
	})
]);
</script>

<template>
	<component :is="tag" :class="classes">
		<slot></slot>
	</component>
</template>