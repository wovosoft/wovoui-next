<script setup lang="ts">
import {CarouselInnerProps} from "@/composables/useCarousels";

withDefaults(defineProps<CarouselInnerProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="carousel-inner">
		<slot></slot>
	</component>
</template>
