import {HasBorderVariant, HasVariant} from "@/composables/useCommonProps";
import {ScreenSize, VerticalAlign} from "@/composables/useResponsive";
import {computed, StyleValue} from "vue";
import {ColorVariant} from "@/composables/useColorSchemes";

export interface CommonTableProps extends HasVariant, HasBorderVariant {
    active?: boolean;
    align?: VerticalAlign;
}

export interface TableProps extends CommonTableProps {
    /**
     * When set to true, the table becomes responsive. Wraps in .table-responsive
     */
    responsive?: ScreenSize | boolean;

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

export interface DatatableFieldType {
    key: string;
    label?: string;
    formatter?: (value: DatatableItemType, key?: string) => any;
    visible?: boolean;
    sortable?: boolean;
    thClass?: StyleValue;
    tdClass?: StyleValue;
}

export interface DatatableItemType extends Record<string, any> {

}

export interface DatatableProps extends TableProps {
    fields: DatatableFieldType[] | string[];
    items: DatatableItemType[],
    headVariant?: ColorVariant;
    bodyVariant?: ColorVariant;
    footVariant?: ColorVariant;
    headClass?: StyleValue;
    bodyClass?: StyleValue;
    footClass?: StyleValue;
}