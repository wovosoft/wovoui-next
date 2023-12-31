<script setup lang="ts">
import {computed, inject} from "vue";
import {ButtonGroupHasOutlineInjection, ButtonProps} from "@/components/Buttons";

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    variant: 'secondary',
    type: 'button',
    activeClass: 'active',
});

//data comes from ButtonGroup
const isGroupOutlined = inject(ButtonGroupHasOutlineInjection, false);

const attrs = computed(() => ({
    type: props.tag === 'button' ? 'button' : null,
    href: props.tag === 'a' ? (props.href || '#') : null,
    role: props.tag === 'a' ? 'button' : null,
    class: [
        "btn",
        {
            /**
             * disabled links needs disabled class to work properly
             * @link https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state
             */
            disabled: props.disabled && props.tag === "a",
            ["btn-" + ((props.outline || isGroupOutlined) ? "outline-" : "") + props.variant]: !!props.variant,

            //both size=lg|sm or large|small=true are supported
            ["btn-" + props.size]: !!props.size,
            "btn-lg": props.large,
            "btn-sm": props.small,

            "w-100": props.block,
            "rounded-pill": props.pill,
            "rounded-0": props.squared,
            [props.activeClass]: props.pressed || props.active,
            "text-nowrap": props.noWrap,
        },
    ]
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>
