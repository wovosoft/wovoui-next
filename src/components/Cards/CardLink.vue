<script setup lang="ts">
import {CardLinkProps} from "./index";

withDefaults(defineProps<CardLinkProps>(), {
	href: '#'
});
</script>

<template>
	<a class="card-link">
		<slot></slot>
	</a>
</template>