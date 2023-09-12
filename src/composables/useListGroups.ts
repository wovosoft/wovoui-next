import type {ScreenSizes} from "@/composables/useResponsive";
import {ColorVariants} from "@/composables/useColorSchemes";

export interface ListGroupProps {
    tag?: keyof HTMLElementTagNameMap;
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | ScreenSizes | ScreenSizes[];
}

export interface ListGroupItemProps {
    tag?: keyof HTMLElementTagNameMap;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    asButton?: boolean;
    variant?: ColorVariants;
}