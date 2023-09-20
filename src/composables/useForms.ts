import {BasicSize} from "@/composables/useButtons";
import {HasScreenSizeProps, HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";

export type HTMLInputTypes = "button" | "checkbox" | "color" | "date"
    | "datetime-local" | "email" | "file" | "hidden" | "image" | "month"
    | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit"
    | "tel" | "text" | "time" | "url" | "week";

export interface InputProps {
    type?: HTMLInputTypes,
    size?: BasicSize;
    plain?: boolean;
    state?: boolean;
    modelValue?: number | string | null;
    //required for FormGroup's floating label, so handling it specially
    //https://getbootstrap.com/docs/5.3/forms/floating-labels/#example
    placeholder?: string;
}

export interface InputGroupProps extends HasTag, HasSize {
    prepend?: string;
    append?: string;
    noWrap?: boolean;
}

export interface InputGroupTextProps extends HasTag {

}

export interface FormLabelProps extends Omit<HasScreenSizeProps, 'xxl'> {
    horizontal?: boolean;
}

export interface FormGroupProps extends HasTag {
    floating?: boolean,
    label?: string,
    labelFor?: string,
    horizontal?: boolean,
    labelProps?: FormLabelProps;

    contentProps?: Omit<HasScreenSizeProps, 'xxl'>

    noMarginBottom?: boolean,

    //form control feedback messages
    validFeedback?: string,
    invalidFeedback?: string,
}

export interface FeedbackProps extends HasTag {
    type?: FeedbackType;
    message?: string;
}

export const getFeedbackTypes = ['valid', 'invalid'] as const;
export type FeedbackType = typeof getFeedbackTypes[number];


export interface FeedbackMessagesProps extends /* @vue-ignore */ Partial<Record<FeedbackType, string>> {

}

export interface SelectProps extends HasSize {
    multiple?: boolean;
    options?: any[];
    valueField?: ((str: any) => any) | string;
    textField?: ((str: any) => any) | string;
    disabledField?: string;
    labelField?: string;
    modelValue?: any;
}

export interface CheckboxProps {
    switch?: boolean;
    // button: makeBoolean(false),//implement later
    inline?: boolean;
    reverse?: boolean;
    disabled?: boolean;
    modelValue?: any;
    value?: any;
    uncheckedValue?: any;
    id?: string;
    //sometimes checking might be done by object keys. in that case this function can be used
    checkBy?: (value: any, model: any) => boolean
}


export interface CheckboxGroupProps {
    modelValue?: any;
    options?: any[];
    textField?: string;
    valueField?: string;
    inline?: boolean;
    switch?: boolean;
    reverse?: boolean;
}

export interface RadioProps {
    name?: string;
    id?: string;
    modelValue?: any;
    value?: any;
    wrapperAttrs?: { [key: string]: any };
    labelAttrs?: { [key: string]: any };
    inline?: boolean;
}

export interface RadioGroupProps {
    modelValue?: any;
    options?: any[];
    textField?: string;
    valueField?: string;
    inline?: boolean;
    name?: string;
    required?: boolean;
}

export interface RatingProps extends HasVariant {
    min?: number;
    max?: number;
    modelValue?: number;
}

export interface SpinButtonProps extends HasSize {
    modelValue?: number;
    step?: number;
    min?: number;
    max?: number;
    buttonVariant?: ColorVariant;
    formatter?: (value: any) => any;
    inline?: boolean;
    vertical?: boolean;
}

export interface TagsProps extends HasTag {
    role?: string;
    tabindex?: number;
    placeholder?: string;
    modelValue?: string[] | number[];
    removeOnDelete?: boolean;
    separator?: any[];
    tagPills?: boolean;
    tagVariant?: ColorVariant;
    badgeVariant?: ColorVariant;
    addButtonSize?: BasicSize;
    addButtonText?: string;
    noAddOnEnter?: boolean;
}

export interface TextareaProps extends HasSize {
    modelValue?: string;
    //required for FormGroup's floating label, so handling it specially
    //https://getbootstrap.com/docs/5.3/forms/floating-labels/#example
    placeholder?: string;
}
