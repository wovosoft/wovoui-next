import {ColorVariants} from "@/composables/useColorSchemes";

export type ButtonSizes = 'sm' | 'lg';
export type ButtonTypes = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    tag?: keyof HTMLElementTagNameMap,
    href?: string,
    variant?: ColorVariants;
    size?: ButtonSizes;
    type?: ButtonTypes;
    outline?: boolean;
    block?: boolean;
    pill?: boolean;
    squared?: boolean;
    disabled?: boolean;
    pressed?: boolean;
    noWrap?: boolean;
    active?: boolean;
    activeClass?: string;
    small?: boolean;
    large?: boolean;
}

export interface ButtonGroupProps {
    tag?: keyof HTMLElementTagNameMap;
    ariaLabel?: string;
    size?: ButtonSizes;
    vertical?: boolean;
    justified?: boolean;
    outline?: boolean;
    role?: string;
}

export interface ButtonToolbarProps {
    tag?: keyof HTMLElementTagNameMap;
    role?: string;
    justified?: boolean;
}

export interface ButtonCloseProps {
    size?: ButtonSizes;
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
}