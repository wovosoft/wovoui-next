<template>
    <select :class="classes" v-model="model" :multiple="multiple">
        <slot name="first"></slot>
        <slot></slot>
        <template v-for="(o) in options">
            <optgroup :label="o[labelField]" v-if="o.hasOwnProperty('options')">
                <option v-for="(gi,gi_key) in o.options"
                        :key="gi_key"
                        :value="getEntity(gi,'valueField')"
                        :disabled="isDisabledOption(gi)">
                    <slot name="text">
                        {{ getEntity(gi, 'textField') }}
                    </slot>
                </option>
            </optgroup>
            <option v-else :value="getEntity(o,'valueField')" :disabled="isDisabledOption(o)">
                <slot name="text">
                    {{ getEntity(o, 'textField') }}
                </slot>
            </option>
        </template>
        <slot name="last"></slot>
    </select>
</template>

<script lang="ts" setup>
import {computed, useModel} from "vue";
import {SelectProps} from "@/components/Forms/index";

const props = withDefaults(defineProps<SelectProps>(), {
    valueField: 'value',
    textField: 'text',
    disabledField: 'disabled',
    labelField: 'label'
});

const model = useModel(props, 'modelValue');

const getEntity = (o: any, k: string) => {
    if (typeof props[k] === "string" || props[k] === null) {
        if (!(typeof o === "object" && !Array.isArray(o))) {
            return o;
        }
        return o[props[k] === null ? 'text' : props[k]];
    } else if (typeof props[k] === "function") {
        return props[k](o);
    }
    return o;
};

const isDisabledOption = (o: object) => o.hasOwnProperty(props.disabledField) ? o[props.disabledField] : false

const classes = computed(() => [
    "form-select",
    {
        ["form-select-" + props.size]: !!props.size
    }
]);
</script>