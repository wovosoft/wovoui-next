export {default as Modal} from "./Modal.vue";
export {default as ModalBody} from "./ModalBody.vue";
export {default as ModalFooter} from "./ModalFooter.vue";
export {default as ModalHeader} from "./ModalHeader.vue";
export {default as ModalTitle} from "./ModalTitle.vue";
export {default as ModalDialog} from "./ModalDialog.vue";

export const getModalFullScreens = [true, false, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'] as const;
export const getModalSizes = ['sm', 'lg', 'xl', null] as const;

export type ModalSizes = typeof getModalSizes[number];
export type ModalFullScreen = typeof getModalFullScreens[number];
