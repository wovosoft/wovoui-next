import {HasTag} from "@/composables/useCommonProps";

export {default as ListGroup} from "./ListGroup.vue";
export {default as ListGroupItem} from "./ListGroupItem.vue";

import type {ScreenSize} from "@/composables/useResponsive";
import {ColorVariant} from "@/composables/useColorSchemes";

export interface ListGroupProps extends HasTag {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | ScreenSize | ScreenSize[];
}

export interface ListGroupItemProps extends HasTag {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    asButton?: boolean;
    variant?: ColorVariant;
}