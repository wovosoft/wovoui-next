<script lang="ts" setup>
import {computed} from "vue";
import {VrProps} from "@/components/Ui/index";

const props = withDefaults(defineProps<VrProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: 'vr',
	'--bs-border-width': props.width || undefined
}))
</script>

<template>
	<component :is="tag" v-bind="attrs"/>
</template>