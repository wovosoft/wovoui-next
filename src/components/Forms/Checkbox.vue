<template>
    <div class="form-check" :class="wrapperClasses">
        <input class="form-check-input"
               type="checkbox"
               :false-value="uncheckedValue"
               :true-value="value"
               :value="value"
               :role="$props.switch?'switch':null"
               v-model="model"
               :id="theId">
        <label class="form-check-label" :for="theId" v-if="$slots.default">
            <slot/>
        </label>
    </div>
</template>

<script lang="ts" setup>
import {computed, useModel} from "vue";
import {uid} from "@/composables/useHelpers";
import {CheckboxProps} from "@/components/Forms/index";

const props = withDefaults(defineProps<CheckboxProps>(), {});

const theId = computed(() => props.id || "wbv-" + uid());
const model = useModel(props, 'modelValue');

const wrapperClasses = computed(() => [{
    'form-switch': props.switch,
    'form-check-inline': props.inline,
    'form-check-reverse': props.reverse,
}]);
</script>