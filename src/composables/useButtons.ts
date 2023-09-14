import {ColorVariant} from "@/composables/useColorSchemes";

export type BasicSize = 'sm' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    tag?: keyof HTMLElementTagNameMap,
    href?: string,
    variant?: ColorVariant;
    size?: BasicSize;
    type?: ButtonType;
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
    size?: BasicSize;
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
    size?: BasicSize;
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
}