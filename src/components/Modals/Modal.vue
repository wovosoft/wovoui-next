<script lang="ts" setup>
import useModals from "@/composables/useModals";
import ModalDialog from "@/components/Modals/ModalDialog.vue";
import ModalContent from "@/components/Modals/ModalContent.vue";
import ModalHeader from "@/components/Modals/ModalHeader.vue";
import ModalBody from "@/components/Modals/ModalBody.vue";
import ModalFooter from "@/components/Modals/ModalFooter.vue";
import Button from "@/components/Buttons/Button.vue";
import ModalTitle from "@/components/Modals/ModalTitle.vue";
import ButtonClose from "@/components/Buttons/ButtonClose.vue";
import {computed, ref} from "vue";
import ModalBackdrop from "@/components/Modals/ModalBackdrop.vue";
import {ModalProps} from "@/components/Modals/index";

const props = withDefaults(defineProps<ModalProps>(), {
	tag: 'div',
	okTitle: 'Ok',
	closeTitle: 'Close'
});

const emit = defineEmits<{
	close: [value: boolean];
	ok: [value: boolean];
	show: [value: boolean];
	hide: [value: boolean];
	shown: [value: boolean];
	hidden: [value: boolean];
	clickOutside: [value: boolean];
}>();

const rootEl = ref<HTMLElement>(null);
const {states, show, hide, onEsc, onOk, onClose} = useModals(emit, rootEl, props);

const attrs = computed(() => ({
	//camelCase attributes names are not working properly, when its is null with camelCase attribute doesn't get removed
	'aria-modal': states.shown ? true : null,
	'aria-hidden': !states.shown ? true : null,
	role: states.shown ? 'dialog' : null,
	tabindex: -1,
	class: {
		'modal': true,
		'fade': !props.noFade,
		show: states.show,
		'modal-static': states.static
	},
	style: {
		display: states.styleBlock ? 'block' : 'none',
		overflowY: states.static ? 'hidden' : null
	}
}));

defineExpose({
	show,
	hide
});
</script>

<template>
	<teleport to="body">
		<component :is="tag" v-bind="attrs" ref="rootEl" @keydown.esc="onEsc">
			<ModalDialog
				:fullscreen="fullscreen"
				:size="size"
				:centered="centered"
				:scrollable="scrollable">
				<ModalContent>
					<ModalHeader>
						<slot name="header">
							<ModalTitle>
								{{ header?.text }}
							</ModalTitle>
						</slot>
						<ButtonClose @click="onClose"/>
					</ModalHeader>
					<ModalBody>
						<slot></slot>
					</ModalBody>
					<ModalFooter>
						<slot name="footer">
							<Button @click="onClose">Close</Button>
							<Button @click="onOk">
								{{ okTitle }}
							</Button>
						</slot>
					</ModalFooter>
				</ModalContent>
			</ModalDialog>
		</component>
		<ModalBackdrop
			v-if="states.backdrop"
			:show="states.show"
		/>
	</teleport>
</template>