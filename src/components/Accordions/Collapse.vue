<script setup lang="ts">
import {CollapseProps} from "@/composables/useAccordions";
import {computed, getCurrentInstance, nextTick, reactive, useModel, watch} from "vue";
import {getTransitionDurationFromElement, reflow} from "@/composables/useHelpers";

const props = withDefaults(defineProps<CollapseProps>(), {
    tag: 'div',
    modelValue: false,
});

const instanceVNode = getCurrentInstance().vnode;

const emit = defineEmits<{
    show: [value: any];
    shown: [value: any];
    hide: [value: any];
    hidden: [value: any];
    'update:modelValue': [value: boolean]
}>();

const isShown = useModel(props, 'modelValue');

const states = reactive({
    transitioning: false,
    show: props.show,
    shown: props.show,
});

const classes = computed(() => [
    {
        'collapse': !states.transitioning,
        'collapsing': states.transitioning,
        'collapse-horizontal': props.horizontal,
        'show': states.show,
    }
]);

const durationPadding = 5;

//apply after effects, it's after effects because the value is already changed
/**
 * when direct show,hide,toggle methods are used by refs from outside,
 * first the animation is happened, and then the value is changed.
 * But if v-model is used, first the value is changed and then the animation is happened.
 */
watch(isShown, value => animate(value));

const animate = (shouldShow: boolean) => {
    if (states.transitioning || shouldShow ? states.shown : !states.shown) {
        return;
    }

    //@ts-ignore
    emit(shouldShow ? 'show' : 'hide', true);
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
            isShown.value = shouldShow;
            //@ts-ignore
            emit(shouldShow ? 'shown' : 'hidden', true);
        }, getTransitionDurationFromElement(instanceVNode.el as HTMLElement) + durationPadding);
    });
};

defineExpose({
    show: () => animate(true),
    hide: () => animate(false),
    toggle: () => animate(!states.shown)
});

const ucFirst = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const getDim = () => props.horizontal ? 'width' : 'height';

const getDimSize = () => instanceVNode.el['scroll' + ucFirst(getDim())] + 'px';
// const getDimSize = () => instanceVNode.el.getBoundingClientRect()['scroll' + ucFirst(getDim())] + 'px';
</script>
<template>
    <component :is="tag" :class="classes">
        <div v-if="horizontal" :style="{width:width}">
            <slot></slot>
        </div>
        <slot v-else></slot>
    </component>
</template>
