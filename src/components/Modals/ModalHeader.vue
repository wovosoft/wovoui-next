<script lang="ts" setup>
import {computed} from "vue";
import {ModalHeaderProps} from "@/components/Modals/index";

const props = withDefaults(defineProps<ModalHeaderProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: ["modal-header", {
		["text-bg-" + props.variant]: props.variant,
		"py-2": props.shrink
	}]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>