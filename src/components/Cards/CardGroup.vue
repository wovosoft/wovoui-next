<script setup lang="ts">
import {computed} from "vue";
import {CardGroupProps} from "@/composables/useCards";

const props = withDefaults(defineProps<CardGroupProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	"card-group": !props.deck && !props.columns,
	"card-deck": props.deck,
	"card-columns": props.columns,
}));
</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>