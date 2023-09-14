<script setup lang="ts">
import {InputGroupTextProps} from "@/composables/useForms";

withDefaults(defineProps<InputGroupTextProps>(), {
    tag: 'span'
});
</script>

<template>
    <component :is="tag" class="input-group-text">
        <slot></slot>
    </component>
</template>