import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";
import {StyleValue} from "vue";
import {Placement} from "@popperjs/core";
import {getBasePlacements, ScreenSize} from "@/composables/useResponsive";

export {default as Dropdown} from "./Dropdown.vue";
export {default as DropdownButton} from "./DropdownButton.vue";
export {default as DropdownDivider} from "./DropdownDivider.vue";
export {default as DropdownHeader} from "./DropdownHeader.vue";
export {default as DropdownItem} from "./DropdownItem.vue";
export {default as DropdownMenu} from "./DropdownMenu.vue";


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
    menuTag?: keyof HTMLElementTagNameMap;
    toggleTag?: keyof HTMLElementTagNameMap;

    text?: string | null;
    splitVariant?: ColorVariant;
    block?: boolean;
    disabled?: boolean;

    menuDark?: boolean;
    menuClass?: StyleValue;

    split?: boolean;
    isNav?: boolean;

    asGroup?: boolean;

    rtl?: boolean;
    dir?: DropdownDirection;
    align?: DropdownAlignment;

    modelValue?: boolean;
}

export type DropdownDirection = typeof getBasePlacements[number];

export const dropdownAlignments = ["start", "end", "center"] as const;
export type DropdownAlignment = typeof dropdownAlignments[number];

export const dropdownDropDirections = ["dropdown", "dropup", "dropstart", "dropend"] as const;
export type DropdownDropDir = typeof dropdownDropDirections[number];

export type DropdownMenuAlignment = "start" | "end" | `${ScreenSize}-${'start' | 'end'}` | Placement;


export interface DropdownInterface {
    show: () => void,
    hide: () => void,
    toggle: () => void,
    destroy: () => void,
    onKeydownDown: (e: KeyboardEvent) => void,
    onKeydownUp: (e: KeyboardEvent) => void
}

export interface DropdownOptionsInterface {
    focusToggleOnHide: boolean;
}