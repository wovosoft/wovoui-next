import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";
import {BasicSize} from "@/components/Buttons";

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


export interface ModalTitleProps extends HasTag {

}

export interface ModalHeaderProps extends HasTag, HasVariant {
    shrink?: boolean;
}

export interface ModalFooterProps extends HasTag, HasVariant {
    shrink?: boolean;
}

export interface ModalDialogProps extends HasTag {
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalBodyProps extends HasTag, HasVariant {

}

type ModalPropBooleans =
    'static'
    | 'scrollable'
    | 'centered'
    | 'busy'
    | 'cancelDisabled'
    | 'okOnly'
    | 'okDisabled'
    | 'noCloseOnEsc'
    | 'noCloseOnBackdrop'
    | 'noFade';

type ModalPropStrings =
    'ariaLabel'
    | 'okTitle'
    | 'cancelTitle';

export interface ModalProps extends HasTag, HasSize {
    header?: ModalHeaderProps & { text: string }
    body?: ModalBodyProps;
    footer?: ModalFooterProps & { text: string };
    dialog?: ModalDialogProps;
    content?: ModalContentProps;
    title?: ModalTitleProps & { text: string };
    okVariant?: ColorVariant;
    buttonSize?: BasicSize;
    cancelVariant?: ColorVariant;

    //boolean props
    static?: boolean;
    fullscreen?: ModalFullScreen;
    scrollable?: boolean;
    centered?: boolean;
    busy?: boolean;
    cancelDisabled?: boolean;
    okOnly?: boolean;
    okDisabled?: boolean;
    noCloseOnEsc?: boolean;
    noCloseOnBackdrop?: boolean;
    noFade?: boolean;

    //string props
    ariaLabel?: string;
    okTitle?: string;
    cancelTitle?: string;
}

export interface ModalContentProps extends HasTag {

}