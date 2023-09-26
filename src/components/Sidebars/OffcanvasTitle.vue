<script setup lang="ts">
import {PropType} from "vue";

defineProps({
	tag: {
		type: String as PropType<keyof HTMLElementTagNameMap>,
		default: 'h5'
	}
});
</script>

<template>
	<component :is="tag" class="offcanvas-title">
		<slot></slot>
	</component>
</template>