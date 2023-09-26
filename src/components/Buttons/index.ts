import {ButtonHTMLAttributes, InjectionKey} from "vue";

export {default as Button} from "./Button.vue";
export {default as ButtonGroup} from "./ButtonGroup.vue";
export {default as ButtonToolbar} from "./ButtonToolbar.vue";
export {default as ButtonClose} from "./ButtonClose.vue";

import {ColorVariant} from "@/composables/useColorSchemes";

export type BasicSize = 'sm' | 'lg';

export interface ButtonProps {
    tag?: keyof HTMLElementTagNameMap,
    href?: string,
    variant?: ColorVariant;
    size?: BasicSize;
    type?: ButtonHTMLAttributes['type'];
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

//Injection Keys
export const ButtonGroupHasOutlineInjection: InjectionKey<boolean> = Symbol("Button Group Has Outline");