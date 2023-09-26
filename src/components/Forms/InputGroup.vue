<template>
    <component :is="tag" :class="classes" role="group">
        <slot name="prepend" v-if="$slots.prepend || prepend">
            <InputGroupText v-if="prepend">
                {{ prepend }}
            </InputGroupText>
        </slot>
        <slot></slot>
        <slot name="append" v-if="$slots.append || append">
            <InputGroupText v-if="append">
                {{ append }}
            </InputGroupText>
        </slot>
    </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {InputGroupProps, InputGroupText} from "./index";

const props = withDefaults(defineProps<InputGroupProps>(), {
    tag: 'div'
});

const classes = computed(() => [
    "input-group",
    {
        ["input-group-" + props.size]: !!props.size,
        "flex-nowrap": props.noWrap
    }
]);
</script>