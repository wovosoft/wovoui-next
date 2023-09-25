<script setup lang="ts">
import {useModel} from "vue";
import {NavbarToggleProps} from "@/components/Navigation/useNavigation";

const props = withDefaults(defineProps<NavbarToggleProps>(), {
    modelValue: false
});

const model = useModel(props, 'modelValue', {local: true});
</script>

<template>
    <button
        @click="model = !model"
        class="navbar-toggler"
        type="button"
        :aria-expanded="model">
        <span class="navbar-toggler-icon"></span>
    </button>
</template>