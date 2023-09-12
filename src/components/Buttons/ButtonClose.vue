<script setup lang="ts">
import {ButtonCloseProps} from "@/composables/useButtons";
import {computed} from "vue";

const props = withDefaults(defineProps<ButtonCloseProps>(), {
    ariaLabel: 'Close'
});

const attrs = computed(() => ({
    type: "button",
    disabled: props.disabled,
    ariaLabel: props.ariaLabel,
    class: [
        "btn-close",
        {
            'btn-close-white': props.white,
            ["btn-" + props.size]: props.size
        }
    ]
}));
</script>

<template>
    <button v-bind="attrs"></button>
</template>