<script setup lang="ts">
import {FeedbackProps} from "@/components/Forms/index";

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
