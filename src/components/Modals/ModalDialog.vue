<script lang="ts" setup>
import {computed} from "vue";
import {ModalDialogProps} from "@/composables/useModals";

const props = withDefaults(defineProps<ModalDialogProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: ["modal-dialog", {
		["modal-" + props.size]: props.size,
		["modal-fullscreen" + (typeof props.fullscreen === 'string' ? ("-" + props.fullscreen) : "")]: !!props.fullscreen,
		"modal-dialog-scrollable": props.scrollable,
		"modal-dialog-centered": props.centered
	}],
}));
</script>
<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>