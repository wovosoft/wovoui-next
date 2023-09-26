<script setup lang="ts">
import {AlertLinkProps} from "@/components/Alerts";

withDefaults(defineProps<AlertLinkProps>(), {
	href: '#'
});
</script>

<template>
	<a :href="href" class="alert-link">
		<slot></slot>
	</a>
</template>