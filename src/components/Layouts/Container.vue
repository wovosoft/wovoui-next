<script setup lang="ts">
import {computed} from "vue";
import {ContainerProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<ContainerProps>(), {
    tag: 'div',
    fluid: false
});

const attrs = computed(() => ({
    class: [
        {
            "container": !(props.fluid || props.size),
            "container-fluid": props.fluid && !props.size,
            ["container-" + props.size]: props.size && !props.fluid && !Array.isArray(props.size)
        },
        Array.isArray(props.size) ? props.size.map((size) => "container-" + size) : [],
    ]
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>