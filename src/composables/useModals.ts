import {HasSize, HasTag, HasVariant} from "@/composables/useCommonProps";
import {ModalFullScreen, ModalSizes} from "@/components/Modals";
import {ColorVariant} from "@/composables/useColorSchemes";
import {reactive, Ref, ref} from "vue";
import {BasicSize} from "@/composables/useButtons";
import {
    eventBinder,
    getTransitionDurationFromElement,
    PADDING_DURATION,
    reflow,
    useTimeout
} from "@/composables/useHelpers";
import {join} from "lodash";

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
    fullscreen?: ModalFullScreen;
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


export default function (
    emit: (
        event: 'show' | 'hide' | 'shown' | 'hidden' | 'esc' | 'close' | 'ok' | 'clickOutside',
        value: boolean
    ) => void,
    rootEl: Ref<HTMLElement | null>,
    props: ModalProps
) {
    const states = reactive({
        styleBlock: false,
        shown: false,
        backdrop: false,
        show: false,
        transitioning: false,
        paddingRight: null,
        static: false
    });

    function onClose(e: Event) {
        emit('close', true);
        if (!e.defaultPrevented) {
            hide();
        }
    }

    function onOk(e: Event) {
        emit('ok', true);
        if (!e.defaultPrevented) {
            hide();
        }
    }

    function onEsc(e: Event) {
        if (!props.noCloseOnEsc && !e.defaultPrevented) {
            hide();
        }
    }

    const Timers = useTimeout();
    const Events = eventBinder();

    const getDuration = () => getTransitionDurationFromElement(rootEl.value.querySelector('.modal-dialog')) + PADDING_DURATION;

    const outsideClickHandler = (e: MouseEvent & { target: Element }) => {
        //outside click handler
        const modalContent = rootEl.value.querySelector('.modal-content');

        if (
            !modalContent.isSameNode(e.target)
            && !modalContent.contains(e.target)
        ) {
            if (props.static || props.noCloseOnBackdrop) {
                if (props.static) {
                    states.static = true;
                    Timers.run(() => {
                        states.static = false;
                    }, getDuration());
                }
            } else {
                hide();
            }
        }
    };

    const show = () => {
        if (states.shown || states.transitioning) {
            return;
        }

        setBodyAttributes();

        states.styleBlock = true;
        states.transitioning = true;
        states.backdrop = true;

        Timers.run(() => {
            emit('show', true);
            states.show = true;
        }, 0);

        Timers.run(() => {
            states.transitioning = false;
            states.shown = true;
            emit('shown', true);

            Events.bind(document, 'click', outsideClickHandler);
            rootEl.value.focus();
        }, getDuration());
    };


    const hide = () => {
        if (!states.shown || states.transitioning) {
            return;
        }

        emit('hide', true);
        reflow(rootEl.value);
        states.transitioning = true;
        states.show = false;

        Timers.run(() => {
            states.transitioning = false;
            states.shown = false;
            states.backdrop = false;
            states.styleBlock = false;
            emit('hidden', true);
            resetBodyAttributes();

            Timers.clear();
            Events.clear();
        }, getDuration());
    };

    const toggle = () => {
        states.static ? hide() : show();
    };

    const setBodyAttributes = () => {
        document.body.classList.add('modal-open');
        if (document.body.style.paddingRight) {
            states.paddingRight = getScrollbarWidth();
        }

        document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        document.body.style.overflow = 'hidden';
    };

    const resetBodyAttributes = () => {
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        if (states.paddingRight) {
            document.body.style.paddingRight = `${states.paddingRight}px`;
        } else {
            document.body.style.paddingRight = '';
        }
    };


    return {
        states,
        show,
        hide,
        onOk,
        onClose,
        onEsc,
        toggle,
        setBodyAttributes,
        resetBodyAttributes,
    }
}