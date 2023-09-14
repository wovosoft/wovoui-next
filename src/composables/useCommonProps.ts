import {ColorVariant, TextVariants} from "@/composables/useColorSchemes";
import {ColOrders, ColSize, ResponsiveNumber} from "@/composables/useResponsive";
import {BasicSize} from "@/composables/useButtons";

export interface HasTag {
    tag?: keyof HTMLElementTagNameMap;
}

export interface HasTextVariant {
    textVariant?: TextVariants;
}

export interface HasVariant {
    variant?: ColorVariant;
}

export interface HasBorderVariant {
    borderVariant?: ColorVariant;
}

export interface HasBgVariant {
    bgVariant?: ColorVariant;
}

export interface HasTextBgVariant {
    textBgVariant?: ColorVariant;
}

export interface HasLayoutCols {
    cols?: ColSize;
    sm?: ColSize;
    md?: ColSize;
    lg?: ColSize;
    xl?: ColSize;
}

export interface HasLayoutGutters {
    g?: ColSize;
    gx?: 0 | ResponsiveNumber;
    gy?: 0 | ResponsiveNumber;
    gSm?: ColSize;
    gMd?: ColSize;
    gLg?: ColSize;
    gXl?: ColSize;
}

export interface HasLayoutOrders {
    order?: ColOrders;
    offsetSm?: 0 | ResponsiveNumber;
    offsetMd?: 0 | ResponsiveNumber;
    offsetLg?: 0 | ResponsiveNumber;
    offsetXl?: 0 | ResponsiveNumber;
}

export interface HasSize {
    size?: BasicSize;
}

export interface HasScreenSizeProps{
    sm?: ResponsiveNumber;
    md?: ResponsiveNumber;
    lg?: ResponsiveNumber;
    xl?: ResponsiveNumber;
    xxl?: ResponsiveNumber;
}