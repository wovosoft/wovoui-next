<template>
    <InputGroup
        tabindex="-1"
        :class="classes"
        @keyup.self.up="updateValue('increment');"
        @keyup.self.down="updateValue('decrement');">
        <template #prepend>
            <Button @click="updateValue('decrement')"
                    :variant="buttonVariant"
                    :size="size"
                    aria-label="Decrement">
                <Dash/>
            </Button>
        </template>
        <output
            role="spinbutton"
            :aria-valuemin="min"
            :aria-valuemax="max"
            :aria-valuenow="model"
            :aria-valuetext="model.toString()"
            :class="{['form-control-'+size]:size}"
            class="form-control text-center">
            {{ formatter(model) }}
        </output>
        <template #append>
            <Button @click="updateValue('increment')"
                    :variant="buttonVariant"
                    :size="size"
                    aria-label="Increment">
                <Plus/>
            </Button>
        </template>
    </InputGroup>
</template>

<script lang="ts" setup>
import {computed, useModel} from "vue";
import {Dash, Plus} from "@wovosoft/wovoui-icons";
import {SpinButtonProps} from "@/composables/useForms";
import InputGroup from "@/components/Forms/InputGroup.vue";


const props = withDefaults(defineProps<SpinButtonProps>(), {
    modelValue: 0,
    step: 1,
    min: 0,
    max: 100,
    buttonVariant: 'secondary',
    formatter: (value: any): any => value,
    inline: false,
    vertical: false
});

const model = useModel(props, 'modelValue');

const updateValue = (type: 'increment' | 'decrement') => {
    if (type === "increment" && (model.value + props.step) <= props.max) {
        model.value += props.step;
    } else if (type === "decrement" && (model.value - props.step) >= props.min) {
        model.value -= props.step;
    }
};

const classes = computed(() => [
    "spin-button", {
        "inline": props.inline
    }
]);
</script>
