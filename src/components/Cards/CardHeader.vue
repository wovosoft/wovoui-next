<script setup lang="ts">
import {CardHeaderProps} from "@/composables/useCards";
import {generateClasses} from "@/composables/useHelpers";

withDefaults(defineProps<CardHeaderProps>(), {
	tag: 'div'
});
</script>

<template>
	<component
		:is="tag" class="card-header"
		:class="generateClasses({
            bg:variant,
            text:textVariant,
            border:borderVariant
	   })">
		<slot></slot>
	</component>
</template>