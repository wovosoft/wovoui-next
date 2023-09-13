<script setup lang="ts">
import {CardTextProps} from "@/composables/useCards";

withDefaults(defineProps<CardTextProps>(), {
	tag: 'p'
});
</script>

<template>
	<component :is="tag" class="card-text">
		<slot></slot>
	</component>
</template>