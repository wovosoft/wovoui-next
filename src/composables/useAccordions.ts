import {HasTag} from "@/composables/useCommonProps";
import {computed, getCurrentInstance, nextTick, reactive, VNode} from "vue";
import {getTransitionDurationFromElement, reflow} from "@/composables/useHelpers";
import {upperFirst} from "lodash";

export interface AccordionButtonProps {
    type?: 'submit' | 'reset' | 'button';
    collapsed?: boolean;
}

export interface AccordionHeaderProps extends HasTag {

}

export interface AccordionBodyProps extends HasTag {

}

export interface AccordionItemProps extends HasTag {
    modelValue?: boolean;
    header?: string;
}

export interface AccordionProps extends HasTag {
    modelValue?: number;    //active tab index
    flush?: boolean;
    alwaysOpen?: boolean;
}

export interface CollapseProps extends HasTag {
    horizontal?: boolean;
    show?: boolean;
    modelValue?: boolean;
    width?: string;
    accordion?: boolean;
}

export function useCollapse(
    props: CollapseProps,
    beforeShow ?: () => any,
    afterShown ?: () => any,
    beforeHide ?: () => any,
    afterHidden ?: () => any
) {
    const instanceVNode: VNode = getCurrentInstance().vnode;

    const states: Record<'transitioning' | 'show' | 'shown', boolean> = reactive({
        transitioning: false,
        show: props.show,
        shown: props.show,
    });


    const durationPadding = 5;

    const getDim = () => props.horizontal ? 'width' : 'height';

    const getDimSize = () => instanceVNode.el['scroll' + upperFirst(getDim())] + 'px';

    return {
        instanceVNode,
        states,
        getDim,
        getDimSize,
        toggle: (shouldShow: boolean) => {
            if (states.transitioning || shouldShow ? states.shown : !states.shown) {
                return;
            }

            const beforeOperation = shouldShow ? beforeShow : beforeHide;

            if (beforeOperation) {
                if (typeof beforeOperation !== 'function') {
                    throw new Error(beforeOperation + ' is not a valid callback');
                }
                beforeOperation();
            }


            instanceVNode.el.style[getDim()] = getDimSize();

            states.transitioning = true;

            if (!shouldShow) {
                reflow(instanceVNode.el as HTMLElement);
                states.show = false;
            }

            nextTick(() => {
                instanceVNode.el.style[getDim()] = shouldShow ? getDimSize() : '';

                setTimeout(() => {
                    instanceVNode.el.style[getDim()] = '';

                    states.transitioning = false;
                    states.shown = shouldShow;
                    states.show = shouldShow;

                    const afterOperation = shouldShow ? afterShown : afterHidden;

                    if (afterOperation) {
                        if (typeof afterOperation !== 'function') {
                            throw new Error(afterOperation + ' is not a valid callback');
                        }

                        afterOperation();
                    }
                }, getTransitionDurationFromElement(instanceVNode.el as HTMLElement) + durationPadding);
            });
        }
    }
}