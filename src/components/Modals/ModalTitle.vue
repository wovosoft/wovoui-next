<script lang="ts" setup>
import {ModalTitleProps} from "@/composables/useModals";

withDefaults(defineProps<ModalTitleProps>(), {
	tag: 'h5'
});
</script>

<template>
	<component :is="tag" class="modal-title">
		<slot></slot>
	</component>
</template>