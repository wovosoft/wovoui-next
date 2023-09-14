<script setup lang="ts">
import Feedback from "@/components/Forms/Feedback.vue";
import {FeedbackMessagesProps} from "@/composables/useForms";

defineOptions({
    inheritAttrs: false
});

withDefaults(defineProps<FeedbackMessagesProps>(), {})
</script>

<template>
    <Feedback v-if="invalid" type="invalid" :message="invalid"/>
    <Feedback v-if="valid" type="valid" :message="valid"/>
</template>
