<script setup lang="ts">
withDefaults(defineProps<{
    tag?: keyof HTMLElementTagNameMap;
}>(), {});

</script>

<template>
    <component v-if="tag" :is="tag">
        <slot></slot>
    </component>
    <slot v-else></slot>
</template>