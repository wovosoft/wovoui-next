<script lang="ts" setup>
import {computed} from "vue";
import {ModalHeaderProps} from "@/composables/useModals";

const props = withDefaults(defineProps<ModalHeaderProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: ["modal-footer", {
		["text-bg-" + props.variant]: props.variant,
		"py-1": props.shrink
	}]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>