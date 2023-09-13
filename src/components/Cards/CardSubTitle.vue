<script setup lang="ts">
import {CardSubTitleProps} from "@/composables/useCards";
import {computed} from "vue";

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