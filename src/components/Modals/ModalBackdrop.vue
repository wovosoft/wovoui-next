<script setup lang="ts">
import {PropType} from "vue";

defineProps({
	fade: {
		type: Boolean as PropType<boolean>,
		default: true
	},
	show: {
		type: Boolean as PropType<boolean>,
		default: true
	},
});
</script>

<template>
	<div class="modal-backdrop" :class="{fade:fade,show:show}"></div>
</template>
