<template>
    <div role="group">
        <Checkbox
            v-for="(option,option_key) in options"
            :key="option_key"
            :inline="inline"
            :switch="$props.switch"
            :reverse="reverse"
            :disabled="option.disabled===true"
            v-model="model"
            :value="valueField?option[valueField]:option">
            {{ textField ? option[textField] : option }}
        </Checkbox>
    </div>
</template>

<script lang="ts" setup>
import Checkbox from "@/components/Forms/Checkbox.vue";
import {useModel} from "vue";
import {CheckboxGroupProps} from "@/components/Forms/index";

const props = withDefaults(defineProps<CheckboxGroupProps>(), {});

const model = useModel(props, 'modelValue')
</script>