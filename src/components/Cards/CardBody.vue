<script setup lang="ts">
import {CardBodyProps} from "@/composables/useCards";
import {computed} from "vue";
import {generateClasses} from "@/composables/useHelpers";
import CardTitle from "@/components/Cards/CardTitle.vue";
import CardSubTitle from "@/components/Cards/CardSubTitle.vue";

const props = withDefaults(defineProps<CardBodyProps>(), {
	tag: 'div',
	subTitleTag: 'h6',
	subTitleTextVariant: 'muted',
	titleTag: 'h4'
});

const classes = computed(() => [
	{
		"card-body": !props.overlay,
		"card-img-overlay": props.overlay,
	},
	generateClasses({
		bg: props.variant,
		text: props.textVariant,
		border: props.borderVariant
	})
]);
</script>

<template>
	<component :is="tag" :class="classes">
		<CardTitle :tag="titleTag" v-if="$slots.title || title">
			<slot name="title">
				{{ title }}
			</slot>
		</CardTitle>
		
		<CardSubTitle
			:tag="subTitleTag"
			v-if="$slots.subTitle || subTitle"
			:text-variant="subTitleTextVariant">
			<slot name="subTitle" v-if="$slots.subTitle || subTitle">
				{{ subTitle }}
			</slot>
		</CardSubTitle>
		
		<slot></slot>
	</component>
</template>