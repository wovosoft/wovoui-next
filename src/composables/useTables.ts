import {HasBorderVariant, HasVariant} from "@/composables/useCommonProps";
import {ScreenSizes, VerticalAlign} from "@/composables/useResponsive";
import {computed} from "vue";

export interface CommonTableProps extends HasVariant, HasBorderVariant {
    active?: boolean;
    align?: VerticalAlign;
}

export interface TableProps extends CommonTableProps {
    /**
     * When set to true, the table becomes responsive. Wraps in .table-responsive
     */
    responsive?: ScreenSizes | boolean;

    /**
     * Makes table stripped
     */
    striped?: boolean | 'columns';

    /**
     * Makes table hoverable
     */
    hover?: boolean;

    /**
     * Makes table bordered
     */
    bordered?: boolean;

    /**
     * Removes table borders
     */
    borderless?: boolean;

    /**
     * Makes table shrink, smaller
     */
    small?: boolean;

    /**
     * Sets table caption
     */
    caption?: string;

    /**
     * Places table caption at top
     */
    captionTop?: boolean;
}

export const getTableCommonClasses = (props: { [key: string]: any }) => computed(() => ({
    ["table-" + props.variant]: props.variant,
    "table-active": props.active,
    ["align-" + props.align]: !!props.align
}));