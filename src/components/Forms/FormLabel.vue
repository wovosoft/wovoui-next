<script setup lang="ts">
import {computed} from "vue";
import {FormLabelProps} from "@/components/Forms/index";

const props = withDefaults(defineProps<FormLabelProps>(), {});
const classes = computed(() => ({
    "form-label": !props.horizontal,
    "col-form-label": props.horizontal,
    ["col-sm-" + props.sm]: props.horizontal && props.sm,
    ["col-md-" + props.md]: props.horizontal && props.md,
    ["col-lg-" + props.lg]: props.horizontal && props.lg,
    ["col-xl-" + props.xl]: props.horizontal && props.xl,
}));
</script>

<template>
    <label :class="classes">
        <slot></slot>
    </label>
</template>