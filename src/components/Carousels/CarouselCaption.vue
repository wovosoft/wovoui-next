<script setup lang="ts">

import {CarouselCaptionProps} from "@/components/Carousels/index";

withDefaults(defineProps<CarouselCaptionProps>(), {
	tag: 'div'
});
</script>

<template>
	<component :is="tag" class="carousel-caption">
		<slot></slot>
	</component>
</template>
