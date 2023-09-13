import {ColorVariants, TextVariants} from "@/composables/useColorSchemes";
import {ColOrders, ColSizes, ResponsiveNumbers} from "@/composables/useResponsive";

export interface HasTag {
    tag?: keyof HTMLElementTagNameMap;
}

export interface HasTextVariant {
    textVariant?: TextVariants;
}

export interface HasVariant {
    variant?: ColorVariants;
}

export interface HasBorderVariant {
    borderVariant?: ColorVariants;
}

export interface HasBgVariant {
    bgVariant?: ColorVariants;
}

export interface HasTextBgVariant {
    textBgVariant?: ColorVariants;
}

export interface HasLayoutCols {
    cols?: ColSizes;
    sm?: ColSizes;
    md?: ColSizes;
    lg?: ColSizes;
    xl?: ColSizes;
}

export interface HasLayoutGutters {
    g?: ColSizes;
    gx?: 0 | ResponsiveNumbers;
    gy?: 0 | ResponsiveNumbers;
    gSm?: ColSizes;
    gMd?: ColSizes;
    gLg?: ColSizes;
    gXl?: ColSizes;
}

export interface HasLayoutOrders {
    order?: ColOrders;
    offsetSm?: 0 | ResponsiveNumbers;
    offsetMd?: 0 | ResponsiveNumbers;
    offsetLg?: 0 | ResponsiveNumbers;
    offsetXl?: 0 | ResponsiveNumbers;
}