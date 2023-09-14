<template>
    <div role="group">
        <Radio
            :name="theName"
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :disabled="option.disabled===true"
            v-model="model"
            :required="required || option?.required"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Radio>
    </div>
</template>

<script lang="ts" setup>
import {computed, useModel} from "vue";
import {RadioGroupProps} from "@/composables/useForms";
import {uid} from "@/composables/useHelpers";
import Radio from "@/components/Forms/Radio.vue";

const props = withDefaults(defineProps<RadioGroupProps>(), {
    textField: 'text',
    valueField: 'value'
});

const theName = computed(() => props.name || "radio-group-" + uid());
const model = useModel(props, 'modelValue');
</script>