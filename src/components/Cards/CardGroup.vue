<script setup lang="ts">
import {computed} from "vue";
import {CardGroupProps} from "./index";

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


<style scoped>
@media (min-width: 576px) {
	.card-deck {
		display: flex;
		flex-flow: row wrap;
	}
	
	.card-deck .card {
		flex: 1 0 0;
		margin-right: 15px;
		margin-bottom: 0;
		margin-left: 15px
	}
	
	.card-deck .card:first-child {
		margin-left: 0;
	}
	
	.card-deck .card:last-child {
		margin-right: 0;
	}
}

.card-columns .card {
	margin-bottom: .75rem
}

@media (min-width: 576px) {
	.card-columns {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
		-webkit-column-gap: 1.25rem;
		-moz-column-gap: 1.25rem;
		grid-column-gap: 1.25rem;
		column-gap: 1.25rem;
		orphans: 1;
		widows: 1
	}
	
	.card-columns .card {
		display: inline-block;
		width: 100%
	}
}

</style>