import {createPopper, VirtualElement, State} from '@popperjs/core';
import {Modifier, OptionsGeneric} from "@popperjs/core/lib/types";

export type PopperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;

export default function (
    triggerElement: Element | VirtualElement,//reference
    popperElement: HTMLElement,//popper
    options?: PopperOptions
) {
    const popper = createPopper(triggerElement, popperElement, Object.assign({
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'preventOverflow',
                options: {
                    boundariesElement: 'viewport',
                },
            },
            {
                name: 'offset',
                options: {
                    offset: [0, 2],
                },
            },
        ],
    }, options));

    document.addEventListener('scroll', () => popper.update());
    window.addEventListener("resize", () => popper.update());

    return popper;
}