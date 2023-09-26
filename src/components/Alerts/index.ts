import {ColorVariant} from "@/composables/useColorSchemes";

export {default as Alert} from "./Alert.vue";
export {default as AlertHeading} from "./AlertHeading.vue";
export {default as AlertLink} from "./AlertLink.vue";

export interface AlertHeadingProps {
    tag?: keyof HTMLElementTagNameMap;
}

export interface AlertLinkProps {
    href?: string;
}

export interface AlertProps {
    tag?: keyof HTMLElementTagNameMap;
    variant?: ColorVariant;
    dismissible?: boolean;
    /**
     * in seconds
     */
    timeout?: number;
    timeoutStep?: number;
    modelValue?: boolean;
    /**
     * Not reactive, only for the first time
     */
    show?: boolean;
    closeBtnWhite?: boolean;
    heading?: string;
}