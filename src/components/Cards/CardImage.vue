<script setup lang="ts">
import {computed} from "vue";
import {CardImageProps} from "@/composables/useCards";

const props = withDefaults(defineProps<CardImageProps>(), {});

const attrs = computed(() => ({
	src: props.src,
	alt: props.alt || 'No Image',
	class: {
		"card-img": props.overlay,
		"card-img-top": !props.position && !props.overlay,    //when no position is set it should be top
		["card-img-" + props.position]: !!props.position
	}
}));
</script>

<template>
	<img v-bind="attrs"/>
</template>
