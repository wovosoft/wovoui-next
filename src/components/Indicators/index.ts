export {default as Progress} from "./Progress.vue";
export {default as ProgressBar} from "./ProgressBar.vue";
export {default as Spinner} from "./Spinner.vue";

import {HasTag, HasVariant} from "@/composables/useCommonProps";
import {BasicSize} from "@/components/Buttons";

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