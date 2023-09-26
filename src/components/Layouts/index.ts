export {default as Container} from "./Container.vue";
export {default as Row} from "./Row.vue";
export {default as Col} from "./Col.vue";
export {default as Grid} from "./Grid.vue";
export {default as GridCol} from "./GridCol.vue";

import {HasLayoutCols, HasLayoutGutters, HasLayoutOrders, HasTag} from "@/composables/useCommonProps";
import {
    ColAlignment,
    JustifyContentAlignments,
    ScreenSize
} from "@/composables/useResponsive";

export interface ContainerProps extends HasTag {
    fluid?: boolean;
    size?: ScreenSize;
}

export interface RowProps extends HasTag, HasLayoutCols, HasLayoutGutters {
    alignItems?: ColAlignment;
    justifyContent?: JustifyContentAlignments;

}

export interface ColProps extends HasTag, HasLayoutCols, HasLayoutOrders {
    alignSelf?: ColAlignment;
    justifyContent?: JustifyContentAlignments;
}