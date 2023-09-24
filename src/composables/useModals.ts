import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ModalFullScreen, ModalSizes} from "@/components/Modals";
import {ColorVariant} from "@/composables/useColorSchemes";
import {Ref, ref} from "vue";
import {BasicSize} from "@/composables/useButtons";
import {getTransitionDurationFromElement, useTimeout} from "@/composables/useHelpers";

export interface ModalTitleProps extends HasTag {

}

export interface ModalHeaderProps extends HasTag, HasVariant {
    shrink?: boolean;
}

export interface ModalFooterProps extends HasTag, HasVariant {
    shrink?: boolean;
}

export interface ModalDialogProps extends HasTag {
    scrollable?: boolean;
    centered?: boolean;
    size?: ModalSizes;
    fullscreen?: ModalFullScreen;
}

export interface ModalBodyProps extends HasTag, HasVariant {

}

type ModalPropBooleans =
    'static'
    | 'scrollable'
    | 'centered'
    | 'busy'
    | 'cancelDisabled'
    | 'okOnly'
    | 'okDisabled'
    | 'noCloseOnEsc'
    | 'noCloseOnBackdrop'
    | 'noFade';

type ModalPropStrings =
    'ariaLabel'
    | 'okTitle'
    | 'cancelTitle';

export interface ModalProps extends HasTag, HasSize {
    header?: ModalHeaderProps & { text: string }
    body?: ModalBodyProps;
    footer?: ModalFooterProps & { text: string };
    dialog?: ModalDialogProps;
    content?: ModalContentProps;
    title?: ModalTitleProps & { text: string };
    okVariant?: ColorVariant;
    buttonSize?: BasicSize;
    cancelVariant?: ColorVariant;

    //boolean props
    static?: boolean;
    scrollable?: boolean;
    centered?: boolean;
    busy?: boolean;
    cancelDisabled?: boolean;
    okOnly?: boolean;
    okDisabled?: boolean;
    noCloseOnEsc?: boolean;
    noCloseOnBackdrop?: boolean;
    noFade?: boolean;

    //string props
    ariaLabel?: string;
    okTitle?: string;
    cancelTitle?: string;
}

export interface ModalContentProps extends HasTag {

}

const getScrollbarWidth = () => Math.abs(window.innerWidth - document.documentElement.clientWidth);

export default function (emit: (event: 'show' | 'hide' | 'shown' | 'hidden' | 'ok' | 'close', value: boolean) => void, rootEl: Ref<HTMLElement>) {
    const initialState = {
        scrollWidth: 0,
        paddingRight: null,
        overflow: ''
    };

    const isShown = ref<boolean>(false);
    const isTransitioning = ref<boolean>(false);

    const timers = useTimeout();
    let timer = null;
    const show = () => {
        if (isShown.value || isTransitioning.value) {
            return;
        }

        isShown.value = true;
        isTransitioning.value = true;


        //emit show event
        emit('show', true);

        //hide scrollbar
        hideScrollbar();

        rootEl.value.style.display = 'block';

        //add modal-open class to body
        document.body.classList.add('modal-open');

        if (timer) {
            timers.clear(timer);
        }

        timer = timers.run(() => {
            rootEl.value.classList.add('show');
        }, 0);

        timers.run(() => {
            isTransitioning.value = false;
        }, getTransitionDurationFromElement(rootEl.value.querySelector('.modal-dialog')));
    };


    const reset = () => {
        //reset modal
        rootEl.value.style.display = 'none';
        document.body.classList.remove('modal-open');

        //reset scrollbar
        const element = document.body;
        element.style.overflow = initialState.overflow;
        if (initialState.paddingRight) {
            element.style.paddingRight = initialState.paddingRight + 'px';
        } else {
            element.style.paddingRight = '';
        }
        isTransitioning.value = false;
    };

    const hide = () => {
        if (!isShown.value || isTransitioning.value) {
            return;
        }

        isShown.value = false;
        isTransitioning.value = true;

        rootEl.value.classList.remove('show');

        timers.run(() => reset(), getTransitionDurationFromElement(rootEl.value.querySelector('.modal-dialog')));
    };
    const close = () => {

    };

    const toggle = () => {

    };

    const hideScrollbar = () => {
        const element = document.body;

        //save the state first
        initialState.overflow = element.style.getPropertyValue('overflow');
        initialState.scrollWidth = getScrollbarWidth();

        if (element.style.paddingRight) {
            initialState.paddingRight = parseInt(element.style.paddingRight);
        }

        //hide the scrollbar
        element.style.overflow = 'hidden';

        //set padding right , Number transform NaN to 0
        element.style.paddingRight = (initialState.scrollWidth + Number(initialState.paddingRight)) + 'px';
    };


    return {
        show,
        hide,
        close,
        toggle,
        hideScrollbar,
        isShown,
        isTransitioning
    };
};












