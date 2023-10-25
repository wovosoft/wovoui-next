import {HasTag} from "@/composables/useCommonProps";
import {RouteRecordRaw} from "vue-router";


export interface BreadcrumbProps extends HasTag {
    items?: BreadcrumbItemProps[];
    divider?: string;
}

export interface BreadcrumbItemProps extends HasTag {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    ariaCurrent?: string;
    disabled?: boolean;
    exact?: boolean;
    rel?: string;
    replace?: boolean;
    target?: '_blank' | '_self' | '_parent' | '_top' | string;
    to?: RouteRecordRaw;
    href?: string;
    text?: string;
}