<script setup lang="ts">
import {computed} from "vue";
import {SpinnerProps} from "@/components/Indicators/index";

const props = withDefaults(defineProps<SpinnerProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	role: "status",
	class: [
		"spinner-" + (props.grow ? 'grow' : 'border'),
		{
			["spinner-" + (props.grow ? 'grow' : 'border') + "-" + props.size]: props.size,
			["text-" + props.variant]: props.variant
		}
	]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<span class="visually-hidden">Loading...</span>
	</component>
</template>