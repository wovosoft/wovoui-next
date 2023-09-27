import {HasTag} from "@/composables/useCommonProps";
import {InjectionKey, Ref} from "vue";

//Exports
export {default as Accordion} from "./Accordion.vue";
export {default as AccordionBody} from "./AccordionBody.vue";
export {default as AccordionButton} from "./AccordionButton.vue";
export {default as AccordionHeader} from "./AccordionHeader.vue";
export {default as AccordionItem} from "./AccordionItem.vue";
export {default as Collapse} from "./Collapse.vue";


//Types
export interface AccordionButtonProps {
    type?: HTMLButtonElement['type'];
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

//Injection keys
export const AccordionToggleItemInjectionKey: InjectionKey<(item: Ref<boolean>) => void | number> = Symbol('Accordion Toggle Item');
export const AccordionItemIndexInjectionKey: InjectionKey<(item: Ref<boolean>) => void | number> = Symbol('Accordion Item Index');
export const AccordionAlwaysOpenInjectionKey: InjectionKey<boolean> = Symbol('Accordion Always Open');
export const AccordionRegisterItemInjectionKey: InjectionKey<(item: Ref<boolean>) => void | number> = Symbol('Accordion Register Item');
export const AccordionActiveIndex: InjectionKey<number> = Symbol('Accordion Active Index');