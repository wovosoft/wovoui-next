<template>
    <input v-model="model" class="form-range" type="range"/>
</template>
<script lang="ts" setup>
import {PropType, useModel} from "vue";

const props = defineProps({
    modelValue: Number as PropType<number>
});

const model = useModel(props, 'modelValue');
</script>