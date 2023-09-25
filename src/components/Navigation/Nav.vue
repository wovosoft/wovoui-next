<script setup lang="ts">
import {computed} from "vue";
import {NavProps} from "@/components/Navigation/useNavigation";

const props = withDefaults(defineProps<NavProps>(), {
    tag: 'ul'
})

const classes = computed(() => ({
    "nav": !props.navs,
    "navbar-nav": props.navs,
    "small": props.small,
    "nav-tabs": props.tabs,
    "nav-pills": props.pills,
    "nav-fill": props.fill,
    "nav-justified": props.justified,
    "flex-column": props.vertical,
    "justify-content-center": props.align === "center",
    "justify-content-end": props.align === "end",
    "justify-content-start": props.align === "start"
}));
</script>

<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>
