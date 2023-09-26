<script setup lang="ts">
import {useModel} from "vue";
import {inject} from "vue";
import {TextareaProps} from "@/components/Forms/index";

const props = withDefaults(defineProps<TextareaProps>(), {});
const hasFloatingLabel = inject('hasFloatingLabel') as boolean;
const model = useModel(props, 'modelValue');
</script>

<template>
    <textarea
	    v-model="model"
	    :placeholder="(placeholder || hasFloatingLabel) ? (placeholder || '') : null"
	    :class="['form-control',{['form-control-'+size]:!!size}]"
    />
</template>
