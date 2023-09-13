import {ButtonSizes} from "@/composables/useButtons";

export type ResponsiveNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ScreenSizes = "sm" | "md" | "lg" | "xl" | "xxl";
export const getScreenSizes: ScreenSizes[] = ["sm", "md", "lg", "xl", "xxl"];
export type PlaceholderSizes = ButtonSizes | 'xs';
export type ColSizes = ResponsiveNumbers | 'auto' | boolean;
export type ColAlignments = 'start' | 'center' | 'end';
export type JustifyContentAlignments = ColAlignments | 'around' | 'between' | 'evenly';
export type ColOrders = ResponsiveNumbers | 'first' | 'last';
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';