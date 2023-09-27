<script setup lang="ts">
import {computed} from "vue";
import {ButtonGroupProps} from "@/components/Buttons";

const props = withDefaults(defineProps<ButtonGroupProps>(), {
	tag: "div",
	role: "toolbar"
});

const attrs = computed(() => ({
	role: props.role || 'toolbar',
	class: [
		"btn-toolbar",
		{
			"justify-content-between": props.justified
		}
	]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>
