import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ColorVariant} from "@/composables/useColorSchemes";
import {Placement} from "@popperjs/core";
import usePopper, {PopperOptions} from "@/composables/usePopper";
import {onBeforeUnmount, StyleValue} from "vue";
import {isEmpty} from "lodash";
import {ComputedPlacement} from "@popperjs/core/lib/enums";

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

export type DropdownDirection = "start" | "end" | "top" | "bottom";

export type DropdownAlignment = "start" | "end" | "center";
export type DropdownDropDir = "dropdown" | "dropup" | "dropstart" | "dropend";
export type DropdownMenuAlignment = "start"
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

export const popperPlacementMap: Record<DropdownAlignment, Record<DropdownDirection, ComputedPlacement>> = {
    start: {
        top: "top-start",
        bottom: "bottom-start",
        start: "left-start",
        end: "right-start",
    },
    end: {
        top: "top-end",
        bottom: "bottom-end",
        start: "left-end",
        end: "right-end",
    },
    center: {
        top: "top",
        bottom: "bottom",
        start: "left",
        end: "right",
    },
};

export const directionMap: Record<DropdownDirection, DropdownDropDir> = {
    start: "dropstart",
    end: "dropend",
    top: "dropup",
    bottom: "dropdown"
};

export function createDropdown(
    el: HTMLElement,
    dropdownToggle?: HTMLElement | null,//reference
    dropdownMenu?: HTMLElement | null,//popper
    options?: PopperOptions,
    emit?: (event: 'show' | 'shown' | 'hide' | 'hidden' | 'update:modelValue', value: boolean) => void
) {
    if (!dropdownToggle) {
        dropdownToggle = el.querySelector('.dropdown-toggle');
    }
    if (!dropdownMenu) {
        dropdownMenu = el.querySelector('.dropdown-menu');
    }

    let popper = null;

    const isClickedOutside = (e: MouseEvent): boolean => (!el.contains(e.target as HTMLElement) && !el.isSameNode(e.target as HTMLElement));

    const outsideClickHandler = (e: MouseEvent) => {
        if (isClickedOutside(e)) {
            hide();
        }
    };

    const show = () => {
        emit('show', true);

        popper = registerPopper();

        dropdownToggle.setAttribute('aria-expanded', 'true');

        dropdownMenu.classList.add('show');
        dropdownToggle.classList.add('show');

        emit('shown', true);
        emit('update:modelValue', true);
        document.addEventListener('click', outsideClickHandler);
    };

    const hide = () => {
        emit('hide', true);
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.remove('show');
        emit('hidden', true);
        emit('update:modelValue', false);

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

    const onKeydownUp = (e: KeyboardEvent) => {
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