import {ColorVariants, TextVariants} from "@/composables/useColorSchemes";
import {PlaceholderSizes, ResponsiveNumbers} from "@/composables/useResponsive";

export const MAX_UID = 1_000_000
export const MILLISECONDS_MULTIPLIER = 1000
export const TRANSITION_END = 'transitionend'

/**
 * @link https://github.com/twbs/bootstrap/blob/bb10c996d42610489534ccf532428419d447d3da/js/src/util/index.js#L47
 * @param element
 */
export const getTransitionDurationFromElement = (element: Element): number => {
    if (!element) {
        return 0
    }

    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element)

    const floatTransitionDuration = Number.parseFloat(transitionDuration)
    const floatTransitionDelay = Number.parseFloat(transitionDelay)

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0]
    transitionDelay = transitionDelay.split(',')[0]

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
}

export const triggerTransitionEnd = (element: Element) => {
    element.dispatchEvent(new Event(TRANSITION_END))
}

export const executeAfterTransition = (callback: () => any, transitionElement: Element, waitForTransition: boolean = true) => {
    if (!waitForTransition) {
        callback();
        return
    }

    const durationPadding = 5
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

    let called = false

    //@ts-ignore
    const handler = ({target}) => {
        if (target !== transitionElement) {
            return
        }

        called = true
        transitionElement.removeEventListener(TRANSITION_END, handler)
        callback();
    }

    transitionElement.addEventListener(TRANSITION_END, handler)
    setTimeout(() => {
        if (!called) {
            triggerTransitionEnd(transitionElement)
        }
    }, emulatedDuration);
};


type VariantProp = {
    bg?: ColorVariants;
    border?: ColorVariants;
    //both plain text variants and color variants are included
    //@link https://getbootstrap.com/docs/5.2/utilities/colors/#colors
    text?: TextVariants | ColorVariants;
    textBg?: ColorVariants;
    placeholderGlow?: boolean;
    placeholderWave?: boolean;
    placeholderAnimation?: 'glow' | 'wave';
    placeholderSize?: PlaceholderSizes;
    col?: ResponsiveNumbers;
    accordionFlush?: boolean;
}

export const generateClasses = (types: VariantProp = {}) => ({
    ["bg-" + types.bg]: !!types.bg,
    ["border-" + types.border]: !!types.border,
    ["text-" + types.text]: !!types.text,
    ["text-bg-" + types.textBg]: !!types.textBg,
    "placeholder-glow": !!types.placeholderGlow,
    "placeholder-wave": !!types.placeholderWave,
    ["placeholder-" + types.placeholderAnimation]: !!types.placeholderAnimation,
    ["placeholder-" + types.placeholderSize]: !!types.placeholderSize,
    ["col-" + types.col]: !!types.col,
    'accordion-flush': !!types.accordionFlush
});

export const isTrue = (value: any): boolean => value === true;
export const isFalse = (value: any): boolean => value === false;
export const isBoolean = (value: any): boolean => typeof value === 'boolean';

//@todo: need some more detailed implementation
export const isTruthy = (value: any) => !!value;
export const isFalsy = (value: any) => !isTrue(value);

export const isNumber = (value: any): boolean => typeof value === 'number';