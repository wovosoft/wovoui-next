<script setup lang="ts">
import {TextareaProps} from "@/composables/useForms";
import {useModel} from "vue";

const props = withDefaults(defineProps<TextareaProps>(), {});

const model = useModel(props, 'modelValue');
</script>

<template>
    <textarea
        v-model="model"
        :class="['form-control',{['form-control-'+size]:!!size}]"
    />
</template>
