<script setup lang="ts">

import {ModalContentProps} from "@/components/Modals/index";

withDefaults(defineProps<ModalContentProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="modal-content">
		<slot></slot>
	</component>
</template>
