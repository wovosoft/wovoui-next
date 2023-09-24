<script lang="ts" setup>
import useModals, {ModalProps} from "@/composables/useModals";
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

const props = withDefaults(defineProps<ModalProps>(), {
	tag: 'div'
});

const emit = defineEmits<{
	close: [value: boolean];
	ok: [value: boolean];
	show: [value: boolean];
	hide: [value: boolean];
	shown: [value: boolean];
	hidden: [value: boolean];
}>();

const rootEl = ref<HTMLElement>(null);
const {show, hide, close, isShown, isTransitioning} = useModals(emit, rootEl);

const attrs = computed(() => ({
	ariaModal: isShown.value ? true : null,
	ariaHidden: !isShown.value ? true : null,
	role: 'dialog',
	tabIndex: -1,
	class: {
		'modal': true,
		'fade': !props.noFade,
		// show: isShown.value
	},
	// style: {
	// 	display: isShown.value ? 'block' : 'none'
	// }
}));

defineExpose({
	show,
	hide,
	close
});
</script>

<template>
	<teleport to="body">
		<component :is="tag" v-bind="attrs" ref="rootEl">
			<ModalDialog>
				<ModalContent>
					<ModalHeader>
						<slot name="header">
							<ModalTitle>
								{{ header?.text }}
							</ModalTitle>
						</slot>
						<ButtonClose/>
					</ModalHeader>
					<ModalBody>
						<slot></slot>
					</ModalBody>
					<ModalFooter>
						<slot name="footer">
							<Button @click="close">Close</Button>
							<Button @click="hide">
								Ok
							</Button>
						</slot>
					</ModalFooter>
				</ModalContent>
			</ModalDialog>
		</component>
		<ModalBackdrop v-if="isShown"/>
	</teleport>
</template>