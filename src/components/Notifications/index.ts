import {BasePlacement} from "@popperjs/core/lib/enums";
import {HasTag, HasVariant} from "@/composables/useCommonProps";
import {RendererElement} from "@vue/runtime-core";
import {ClassType} from "@/index";

export type ToastPlacement = `${'top' | 'middle' | 'bottom'}-${'start' | 'center' | 'end'}`;

export interface PopoverProps {
    //specific id
    target?: string | Element;
    header?: string;
    modelValue?: boolean;
    //https://popper.js.org/docs/v2/constructors/#options
    //todo: need to migrate https://floating-ui.com/
    placement?: BasePlacement;
    triggers?: keyof HTMLElementEventMap
}

export interface ToastContainerProps extends HasTag {
    placement?: ToastPlacement;
    container?: string | keyof HTMLElementTagNameMap;
}

export interface ToastProps extends HasVariant {
    /**
     * Note: Currently when lazy is set to true,
     * as soon as visible state is set to false,
     * the element unmounts immediately.
     *
     * TODO: needs further investigation if this approach is okay or not.
     */
    lazy?: boolean;

    /**
     * Visibility State
     */
    show?: boolean;

    /**
     * Fade Class
     */
    fade?: boolean;

    /**
     * Visibility State
     */
    modelValue?: boolean;

    /**
     * Toast Header
     */
    header?: string;

    /**
     * Toggling body
     */
    noBody?: boolean;

    /**
     * Toggling close button
     */
    noCloseButton?: boolean;

    /**
     * Toast Body Classes
     */
    bodyClass?: ClassType;


    /**
     * teleporting to a different location
     *
     */
    to?: string | RendererElement;

    /**
     * Auto Hide timeout value in seconds.
     * When time value is set to 0|null|undefined,
     * then toast remains active forever.
     *
     * @default 3
     */
    timeout?: number;
}


export interface TooltipProps {
    target: string;
    content?: string;
    placement?: BasePlacement;
    opensOn?: keyof HTMLElementEventMap,
    closesOn?: keyof HTMLElementEventMap
}


