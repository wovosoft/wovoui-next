<script setup lang="ts">
import {computed} from "vue";
import {CardSubTitleProps} from "./index";

const props = withDefaults(defineProps<CardSubTitleProps>(), {
	tag: 'h6'
});

const attrs = computed(() => ({
	class: [
		'card-subtitle',
		{
			["text-" + props.textVariant]: !!props.textVariant
		},
	]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>