<script setup lang="ts">
import {FeedbackProps} from "@/composables/useForms";

withDefaults(defineProps<FeedbackProps>(), {
    tag: 'div',
    type: 'valid'
});
</script>

<template>
    <component :is="tag" :class="{[type + '-feedback']: type}">
        <slot>{{ message}}</slot>
    </component>
</template>
