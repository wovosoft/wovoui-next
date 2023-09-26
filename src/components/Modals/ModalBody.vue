<script lang="ts" setup>
import {computed} from "vue";
import {ModalBodyProps} from "@/components/Modals/index";

const props = withDefaults(defineProps<ModalBodyProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: ["modal-body", {
		["text-bg-" + props.variant]: props.variant
	}]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>