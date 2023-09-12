<script setup lang="ts">
import {AlertHeadingProps} from "@/composables/useAlerts";

withDefaults(defineProps<AlertHeadingProps>(), {
    tag: 'h4'
});
</script>

<template>
    <component :is="tag" class="alert-heading">
        <slot></slot>
    </component>
</template>