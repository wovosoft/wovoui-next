import {BasicSize} from "@/composables/useButtons";

export type ResponsiveNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ScreenSize = "sm" | "md" | "lg" | "xl" | "xxl";

export type PlaceholderSize = BasicSize | 'xs';
export type ColSize = ResponsiveNumber | 'auto' | boolean;
export type ColAlignment = 'start' | 'center' | 'end';
export type JustifyContentAlignments = ColAlignment | 'around' | 'between' | 'evenly';
export type ColOrders = ResponsiveNumber | 'first' | 'last';
export type VerticalAlign = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top';
export type AspectRatio = '1x1' | '4x3' | '16x9' | '21x9' | number | string;
export type RectangularPosition = typeof getRectangularPositions[number];

//getters
export const getScreenSizes: ScreenSize[] = ["sm", "md", "lg", "xl", "xxl"];
export const getAspectRatios: AspectRatio[] = ['1x1', '4x3', '16x9', '21x9'];
export const getRectangularPositions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;