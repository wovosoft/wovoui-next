import {createPopper, VirtualElement} from '@popperjs/core';
import {Instance as PopperInstance, Modifier, OptionsGeneric} from "@popperjs/core/lib/types";

export type PopperOptions = Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;

export default function (
    triggerElement: Element | VirtualElement,//reference
    popperElement: HTMLElement,//popper
    options?: PopperOptions
): PopperInstance {
    const popper: PopperInstance = createPopper(triggerElement, popperElement, Object.assign({
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

    // onBeforeUnmount(() => {
    //     popper.destroy();
    // });

    return popper;
}