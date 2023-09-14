import type {ColorVariant} from "@/composables/useColorSchemes";

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

/**
 * Alert component doesn't require complex dom integration,
 * so it is better to have own plugin rather than using bootstrap's Alert plugin
 */











