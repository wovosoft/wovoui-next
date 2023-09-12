import {ColorVariants} from "@/composables/useColorSchemes";

export interface AlertHeadingProps {
    tag?: keyof HTMLElementTagNameMap;
}

export interface AlertLinkProps {
    href?: string;
}

export interface AlertProps {
    tag?: keyof HTMLElementTagNameMap;
    variant?: ColorVariants;
    dismissible?: boolean;
    timeout?: number;
    timeoutStep?: number;
    modelValue?: boolean;
    show?: boolean;
    closeBtnWhite?: boolean;
    heading?: string;
}