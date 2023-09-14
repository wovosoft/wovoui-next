import type {ScreenSize} from "@/composables/useResponsive";
import {ColorVariant} from "@/composables/useColorSchemes";

export interface ListGroupProps {
    tag?: keyof HTMLElementTagNameMap;
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | ScreenSize | ScreenSize[];
}

export interface ListGroupItemProps {
    tag?: keyof HTMLElementTagNameMap;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    asButton?: boolean;
    variant?: ColorVariant;
}