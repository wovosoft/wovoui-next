<script setup lang="ts">
import {computed, provide} from "vue";
import {ButtonGroupHasOutlineInjection, ButtonGroupProps} from "@/components/Buttons/index";

const props = withDefaults(defineProps<ButtonGroupProps>(), {
    tag: "div",
    role: "group"
});

const attrs = computed(() => ({
    role: props.role || 'group',
    ariaLabel: props.ariaLabel,
    class: {
        "btn-group": !props.vertical,
        "btn-group-vertical": props.vertical,
        ["btn-group-" + props.size]: props.size,
        "btn-group-justified": props.justified
    }
}));

provide(ButtonGroupHasOutlineInjection, props.outline);
</script>

<template>
    <component :is="tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>

<style lang="scss">
//https://stackoverflow.com/questions/34450586/justify-buttons-with-bootstrap-v4/39119031#39119031
.btn-group-justified {
    display: flex;
    width: 100%;

    .btn,
    .btn-group {
        flex: 1;

        .btn {
            width: 100%;
        }

        .dropdown-menu {
            left: auto;
        }
    }
}
</style>