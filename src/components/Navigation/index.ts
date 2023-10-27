import {HasBgVariant, HasTag} from "@/composables/useCommonProps";
import {RouteRecordRaw} from "vue-router";
import {ScreenSize} from "@/composables/useResponsive";
import {BaseAlignment, BaseVerticalAlignment, ThemeVariant} from "@/index";
import {BasicSize} from "@/components/Buttons";
import {Icons} from "@wovosoft/wovoui-icons/types";
import {ColorVariant} from "@/composables/useColorSchemes";
import {AccordionProps} from "@/components/Accordions";

export interface PageLinkProps extends HasTag {
    href?: string;
    prev?: boolean;
    next?: boolean;
    prevText?: string;
    nextText?: string;
    ariaLabel?: string;
}

export interface PageItemProps extends HasTag {
    linkTag?: keyof HTMLElementTagNameMap;
    href?: string;
    prev?: boolean;
    next?: boolean;
    ariaLabel?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface linkAttributesType {
    href?: string | null,
    ariaCurrent?: string | null,
    target?: string | null
}

export interface NavLinkProps extends HasTag {
    ariaCurrent?: string;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    to?: RouteRecordRaw;
}

export interface NavItemProps extends HasTag {
    linkTag?: keyof HTMLElementTagNameMap;
    ariaCurrent?: string;
    href?: string;
    to?: RouteRecordRaw;
    target?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface NavbarToggleProps {
    modelValue?: boolean;
}

export interface NavProps extends HasTag {
    align?: BaseAlignment;
    vertical?: boolean;
    pills?: boolean;
    fill?: boolean;
    justified?: boolean;
    small?: boolean;
    tabs?: boolean;
    navs?: boolean;
    underline?: boolean;
}

export interface NavbarNavProps extends NavProps {
    scrollHeight?: string | number;
    scrollable?: boolean;
}

export interface NavbarBrandProps extends HasTag {
    href?: string;
}

export interface NavbarProps extends HasBgVariant, HasTag {
    brand?: string;
    brandUrl?: string;
    fluid?: boolean;
    size?: ScreenSize;
    toggleEnabled?: boolean;
    variant?: ThemeVariant;
    fixed?: Exclude<BaseVerticalAlignment, 'center'>;
    sticky?: Exclude<BaseVerticalAlignment, 'center'>;
    expandsOn?: ScreenSize | ScreenSize[]
}

export interface PaginationProps extends HasTag {
    modelValue?: number;

    totalRows?: number;
    perPage?: number;
    currentPage?: number;

    size?: BasicSize;
    align?: 'center' | 'end' | 'start';

    firstColPageCount?: number;
    centerColPageCount?: number;
    lastColPageCount?: number;
}

export interface MenuItem {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[];
    icon?: Icons;
    handler?: (item: MenuItem, index: number) => void;
}

export interface PanelMenuProps {
    modelValue?: number,
    items: MenuItem[],
    triggerVariant?: ColorVariant,
    menuVariant?: ColorVariant,
    itemClickPrevent?: boolean;
}

interface ItemType {
    title?: string,
    text?: string,
    link?: string | object,
    children?: ItemType[]
}

export interface MenuProps extends AccordionProps {
    items?: ItemType[];
    child?: boolean;
    ps?: number;
}