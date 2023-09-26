<script setup lang="ts">
import {CardTitleProps} from "./index";

withDefaults(defineProps<CardTitleProps>(), {
	tag: 'h4'
});
</script>

<template>
	<component :is="tag" class="card-title">
		<slot></slot>
	</component>
</template>