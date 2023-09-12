<script setup lang="ts">
import {AlertProps} from "@/composables/useAlerts";
import {computed} from "vue";

const props = withDefaults(defineProps<AlertProps>(), {
    tag: 'div',
    variant: 'primary',
    timeout: 0,
    timeoutStep: 1,
});

const attrs = computed(() => ({
    role: 'alert',
    class: [
        "alert",
        {
            "d-flex": props.dismissible,
            ["alert-" + props.variant]: props.variant,
            "alert-dismissible": props.dismissible,
            "fade": props.dismissible,
        }
    ]
}));
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>