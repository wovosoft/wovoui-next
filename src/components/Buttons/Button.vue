<script setup lang="ts">
import {ButtonProps} from "@/composables/useButtons";
import {computed, inject} from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: 'button',
    variant: 'secondary',
    type: 'button',
    activeClass: 'active',
});

//data comes from ButtonGroup
const isGroupOutlined = inject<boolean>('outline', false);

const classes = computed(() => [
    "btn",
    {
        /**
         * disabled links needs disabled class to work properly
         * @link https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state
         */
        disabled: props.disabled && props.tag === "a",
        ["btn-" + ((props.outline || isGroupOutlined) ? "outline-" : "") + props.variant]: !!props.variant,
        ["btn-" + props.size]: !!props.size,
        "w-100": props.block,
        "rounded-pill": props.pill,
        "rounded-0": props.squared,
        [props.activeClass]: props.pressed,
        "text-nowrap": props.noWrap,
    },
]);

const attrs = computed(() => ({
    type: props.tag === 'button' ? 'button' : null,
    href: props.tag === 'a' ? (props.href || '#') : null,
    role: props.tag === 'a' ? 'button' : null,
}));
</script>

<template>
    <component :is="tag" :class="classes" v-bind="attrs">
        <slot></slot>
    </component>
</template>
