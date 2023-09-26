<script setup lang="ts">
import {generateClasses} from "@/composables/useHelpers";
import {CardHeaderProps} from "./index";

withDefaults(defineProps<CardHeaderProps>(), {
	tag: 'div'
});
</script>

<template>
	<component
		:is="tag" class="card-footer"
		:class="generateClasses({
            bg:variant,
            text:textVariant,
            border:borderVariant
	   })">
		<slot></slot>
	</component>
</template>