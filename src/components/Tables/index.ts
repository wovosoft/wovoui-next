import {HasBorderVariant, HasVariant} from "@/composables/useCommonProps";
import {ScreenSize, VerticalAlign} from "@/composables/useResponsive";
import {computed, StyleValue} from "vue";
import {ColorVariant} from "@/composables/useColorSchemes";


export {default as Table} from "./Table.vue";
export {default as Tbody} from "./Tbody.vue";
export {default as Td} from "./Td.vue";
export {default as Tfoot} from "./Tfoot.vue";
export {default as Th} from "./Th.vue";
export {default as Thead} from "./Thead.vue";
export {default as Tr} from "./Tr.vue";
export {default as Datatable} from "./Datatable.vue";

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

export const getTableCommonClasses = (props: { [key: string]: boolean | string }) =>
    computed(() => ({
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

export interface DatatableItemType<T = any> extends Record<string, T> {

}

export interface DatatableProps extends TableProps {
    fields: DatatableFieldType[] | string[];
    items: DatatableItemType<any>[],
    headVariant?: ColorVariant;
    bodyVariant?: ColorVariant;
    footVariant?: ColorVariant;
    headClass?: StyleValue;
    bodyClass?: StyleValue;
    footClass?: StyleValue;
}