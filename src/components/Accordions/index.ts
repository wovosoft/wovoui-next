import {HasTag} from "@/composables/useCommonProps";

export interface AccordionButtonProps {
    type?: 'submit' | 'reset' | 'button';
    collapsed?: boolean;
}

export interface AccordionHeaderProps extends HasTag {

}

export interface AccordionBodyProps extends HasTag {

}

export interface AccordionItemProps extends HasTag {
    modelValue?: boolean;
    header?: string;
}

export interface AccordionProps extends HasTag {
    modelValue?: number;    //active tab index
    flush?: boolean;
    alwaysOpen?: boolean;
}

export interface CollapseProps extends HasTag {
    horizontal?: boolean;
    show?: boolean;
    modelValue?: boolean;
    width?: string;
    accordion?: boolean;
}
