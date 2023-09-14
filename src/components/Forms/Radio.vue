<template>
    <div class="form-check" :class="{'form-check-inline':inline}" v-bind="wrapperAttrs">
        <input
            v-bind="$attrs"
            class="form-check-input"
            type="radio"
            :name="name"
            :id="identifier"
            :value="value"
            v-model="model"
        />
        <label v-bind="labelAttrs" class="form-check-label" :for="identifier">
            <slot></slot>
        </label>
    </div>
</template>

<script lang="ts" setup>
//https://gist.github.com/Jonarod/8553d88b1b0d1e1898ff1b5c951b00cc
import {computed, useModel} from "vue";
import {uid} from "@/composables/useHelpers";
import {RadioProps} from "@/composables/useForms";

defineOptions({
    inheritAttrs: false
});

const props = withDefaults(defineProps<RadioProps>(), {});

const model = useModel(props, 'modelValue');
const identifier = computed(() => props.id ?? "wbv-radio-" + uid());
</script>
