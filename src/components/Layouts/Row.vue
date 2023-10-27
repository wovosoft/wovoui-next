<script setup lang="ts">
import {computed} from "vue";
import {RowProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<RowProps>(), {
    tag: 'div'
});

const attrs = computed(() => ({
    class: [
        "row",
        {
            ["row-cols-" + props.cols]: props.cols,
            ["row-cols-sm-" + props.sm]: props.sm,
            ["row-cols-md-" + props.md]: props.md,
            ["row-cols-lg-" + props.lg]: props.lg,
            ["row-cols-xl-" + props.xl]: props.xl,
            ["row-cols-xxl-" + props.xxl]: props.xxl,

            ["align-items-" + props.align]: props.align,
            ["justify-content-" + props.alignContent]: props.alignContent,

            ["g-" + props.g]: props.g,
            ["g-sm-" + props.gSm]: props.gSm,
            ["g-md-" + props.gMd]: props.gMd,
            ["g-lg-" + props.gLg]: props.gLg,
            ["g-xl-" + props.gXl]: props.gXl,
            ["g-xxl-" + props.gXxl]: props.gXxl,

            ["gx-" + props.gx]: props.gx,
            ["gy-" + props.gy]: props.gy,
        }
    ]
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>