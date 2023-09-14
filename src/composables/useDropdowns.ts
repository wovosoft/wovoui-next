import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";
import {Placement} from "@popperjs/core";

export interface DropdownItemProps extends HasTag {
    href?: string;
    noItemTag?: boolean;
    active?: boolean;
    disabled?: boolean;
    isText?: boolean;
    itemTag?: keyof HTMLElementTagNameMap;
}

export interface DropdownHeaderProps extends HasTag {
    wrapper?: keyof HTMLElementTagNameMap;
}

export interface DropdownButtonProps {
    active?: boolean,
    disabled?: boolean,
}

export interface DropdownMenuProps extends HasTag {
    dark?: boolean;
    show?: boolean;
    block?: boolean;
}

export interface DropdownProps extends HasTag, HasSize, HasVariant {
    menuTag?: keyof HTMLElementTagNameMap,
    toggleTag?: keyof HTMLElementTagNameMap,

    text?: string | null,
    splitVariant?: ColorVariant,
    block?: boolean,
    disabled?: boolean,
    /**
     * left,right,up, down=null (default)
     */
    dir?: DropdownDirections | null,
    align?: DropdownAlignments,
    menuDark?: boolean,
    menuClass?: string | object | any[] | null,

    split?: boolean,
    isNav?: boolean,
}

export type DropdownDirections = "right" | "left" | "top" | "bottom" | null;
export type DropdownAlignments =
    | "start"
    | "end"
    | "sm-start"
    | "sm-end"
    | "md-start"
    | "md-end"
    | "lg-start"
    | "lg-end"
    | "xl-start"
    | "xl-end"
    | "xxl-start"
    | "xxl-end"
    | Placement;