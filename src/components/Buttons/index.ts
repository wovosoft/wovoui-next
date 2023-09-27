import {ButtonHTMLAttributes, InjectionKey} from "vue";


//Components
export {default as Button} from "./Button.vue";
export {default as ButtonGroup} from "./ButtonGroup.vue";
export {default as ButtonToolbar} from "./ButtonToolbar.vue";
export {default as ButtonClose} from "./ButtonClose.vue";


// Types
import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";

export type BasicSize = 'sm' | 'lg';

export interface ButtonProps extends HasTag, HasVariant, HasSize {
    href?: string,
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

export interface ButtonGroupProps extends HasTag, HasSize {
    ariaLabel?: string;
    vertical?: boolean;
    justified?: boolean;
    outline?: boolean;
    role?: string;
}

export interface ButtonToolbarProps extends HasTag {
    role?: string;
    justified?: boolean;
}

export interface ButtonCloseProps extends HasSize {
    white?: boolean;
    ariaLabel?: string;
    disabled?: boolean;
}

//Injection Keys
export const ButtonGroupHasOutlineInjection: InjectionKey<boolean> = Symbol("Button Group Has Outline");