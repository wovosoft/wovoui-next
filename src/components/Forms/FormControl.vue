<script setup lang="ts">
import {FormGroup, Input} from "@/components/Forms";
import {computed, useModel} from "vue";
import {FormGroupProps, InputProps} from "@/composables/useForms";


const props = withDefaults(defineProps<InputProps & FormGroupProps & {
    modelValue: string | number
}>(), {
    type: 'text',
    plain: false,
    tag: "div",
    floating: false,
    horizontal: false,
    noMarginBottom: false,
})


const model = useModel(props, 'modelValue');


const FormGroupBindings = computed(() => ({
    tag: props.tag,
    floating: props.floating,
    label: props.label,
    labelFor: props.labelFor,
    horizontal: props.horizontal,
    labelProps: props.labelProps,
    contentProps: props.contentProps,
    noMarginBottom: props.noMarginBottom,
    //form control feedback messages
    validFeedback: props.validFeedback,
    invalidFeedback: props.invalidFeedback,
}));
</script>

<template>
    <FormGroup v-bind="FormGroupBindings">
        <Input v-bind="{type,size,plain,state,...$attrs}" v-model="model"/>
    </FormGroup>
</template>
