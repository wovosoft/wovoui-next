import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";
import {Placement} from "@popperjs/core";
import usePopper, {PopperOptions} from "@/composables/usePopper";
import {onBeforeUnmount, StyleValue} from "vue";
import {isEmpty} from "lodash";

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

    align?: DropdownAlignments;
    menuDark?: boolean;
    menuClass?: StyleValue;

    split?: boolean;
    isNav?: boolean;

    asGroup?: boolean;
    centered?: boolean;

    dropupCentered?: boolean;
    dropdownCentered?: boolean;
    dropup?: boolean;
    dropend?: boolean;
    dropstart?: boolean;
}

export type DropdownDirections = "dropup" | "dropstart" | "dropend" | "dropup-center" | null;

export type DropdownAlignments =
    "start"
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

export function createDropdown(
    el: HTMLElement,
    dropdownToggle: HTMLElement,//reference
    dropdownMenu: HTMLElement,//popper
    options?: PopperOptions
) {
    let popper = null;

    const isClickedOutside = (e: MouseEvent): boolean => (!el.contains(e.target as HTMLElement) && !el.isSameNode(e.target as HTMLElement));

    const outsideClickHandler = (e: MouseEvent) => {
        if (isClickedOutside(e)) {
            hide();
        }
    };

    const show = () => {
        popper = registerPopper();
        dropdownMenu.classList.add('show');
        document.addEventListener('click', outsideClickHandler);
    };

    const hide = () => {
        dropdownMenu.classList.remove('show');
        document.removeEventListener('click', outsideClickHandler);
        destroy();
        dropdownToggle.focus();
    };

    onBeforeUnmount(() => document.removeEventListener('click', outsideClickHandler));

    const toggle = () => {
        if (dropdownMenu.classList.contains('show')) {
            hide();
        } else {
            show();
        }
    };

    const destroy = () => popper?.destroy();

    const registerPopper = () => usePopper(dropdownToggle, dropdownMenu, options);

    const scrollIntoView = () => {
        dropdownMenu.scrollIntoView({
            behavior: 'auto',
            block: 'center'
        });
    };

    const onKeydownDown = (e: KeyboardEvent) => {
        const list = [...dropdownMenu.querySelectorAll('.dropdown-item')] as HTMLElement[];
        if (isEmpty(list)) {
            return;
        }

        const activeEl = list.find(i => i.isSameNode(document.activeElement));

        if (!activeEl) {
            list[0]?.focus();
        } else if (list.length > 1) {
            const index = list.indexOf(activeEl);
            if (index < list.length - 1) {
                list[index + 1].focus();
            }
        }
        scrollIntoView();
    };

    const onKeydownUp = (e) => {
        const list = [...dropdownMenu.querySelectorAll('.dropdown-item')] as HTMLElement[];
        if (isEmpty(list)) {
            return;
        }

        const activeEl = list.find(i => i.isSameNode(document.activeElement));

        if (!activeEl) {
            list[list.length - 1].focus();
        } else if (list.length > 1) {
            const index = list.indexOf(activeEl);
            if (index > 0) {
                list[index - 1].focus();
            }
        }
        scrollIntoView();
    };

    return {
        show,
        hide,
        toggle,
        destroy,
        onKeydownDown,
        onKeydownUp
    }
}