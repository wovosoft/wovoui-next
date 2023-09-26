<script setup lang="ts">
import {NavbarBrandProps} from "@/components/Navigation/index";

withDefaults(defineProps<NavbarBrandProps>(), {
	tag: 'a',
	href: '#'
});
</script>

<template>
	<component :is="tag" class="navbar-brand" :href="tag==='a'?href:null">
		<slot></slot>
	</component>
</template>
