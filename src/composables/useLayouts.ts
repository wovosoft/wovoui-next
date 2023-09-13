import {HasLayoutCols, HasLayoutGutters, HasLayoutOrders, HasTag} from "@/composables/useCommonProps";
import {
    ColAlignments,
    JustifyContentAlignments,
    ScreenSizes
} from "@/composables/useResponsive";

export interface ContainerProps extends HasTag {
    fluid?: boolean;
    size?: ScreenSizes;
}

export interface RowProps extends HasTag, HasLayoutCols, HasLayoutGutters {
    alignItems?: ColAlignments;
    justifyContent?: JustifyContentAlignments;

}

export interface ColProps extends HasTag, HasLayoutCols, HasLayoutOrders {
    alignSelf?: ColAlignments;
    justifyContent?: JustifyContentAlignments;
}