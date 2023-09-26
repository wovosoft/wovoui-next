<script lang="ts" setup>
import {computed} from "vue";
import {ModalDialogProps, ModalFullScreen} from "@/components/Modals/index";

const props = withDefaults(defineProps<ModalDialogProps>(), {
	tag: 'div'
});

const attrs = computed(() => {
	let screens: string[] = [];
	if (props.fullscreen === true) {
		screens = ["modal-fullscreen"];
	} else if (typeof props.fullscreen === 'string') {
		screens = ["modal-fullscreen-" + props.fullscreen];
	} else if (Array.isArray(props.fullscreen) && props.fullscreen.length) {
		screens = props.fullscreen.map((screen: ModalFullScreen) => "modal-fullscreen-" + screen)
	}
	
	return {
		class: [
			"modal-dialog",
			...screens,
			{
				["modal-" + props.size]: props.size,
				"modal-dialog-scrollable": props.scrollable,
				"modal-dialog-centered": props.centered
			}
		],
	};
});
</script>
<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>