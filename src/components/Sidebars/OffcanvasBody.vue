<script setup lang="ts">
import {OffcanvasBodyProps} from "@/components/Sidebars/index";

withDefaults(defineProps<OffcanvasBodyProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="offcanvas-body">
		<slot></slot>
	</component>
</template>