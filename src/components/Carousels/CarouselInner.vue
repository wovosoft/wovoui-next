<script setup lang="ts">
import {CarouselInnerProps} from "@/components/Carousels";

withDefaults(defineProps<CarouselInnerProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="carousel-inner">
		<slot></slot>
	</component>
</template>
