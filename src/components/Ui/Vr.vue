<script lang="ts" setup>
import {VrProps} from "@/composables/useUi";
import {computed} from "vue";

const props = withDefaults(defineProps<VrProps>(), {
    tag: 'div'
});

const attrs = computed(() => ({
    class: 'vr',
    '--bs-border-width': props.width || undefined
}))
</script>

<template>
    <component :is="tag" v-bind="attrs"/>
</template>