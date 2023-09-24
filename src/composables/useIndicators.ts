import {HasTag, HasVariant} from "@/composables/useCommonProps";
import {BasicSize} from "@/composables/useButtons";

export interface ProgressBarProps extends HasTag, HasVariant {
    value?: number;
    min?: number;
    max?: number;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
}

export interface ProgressProps extends HasTag, HasVariant {
    barTag?: keyof HTMLElementTagNameMap;
    value?: number;
    min?: number;
    max?: number;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
    height?: string;
}

export interface SpinnerProps extends HasTag, HasVariant {
    grow?: boolean;
    size?: BasicSize;
}