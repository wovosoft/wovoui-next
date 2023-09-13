<template>
	<component :is="tag" :class="classes">
		<CardImage
			v-if="imageProps && (imageProps.position==='top' || !imageProps.position)"
			v-bind="imageProps"
		/>
		
		<CardHeader v-if="$slots.header || header" v-bind="headerProps">
			<slot name="header">
				{{ header }}
			</slot>
		</CardHeader>
		
		<CardBody v-bind="bodyProps" :overlay="imageProps?.overlay">
			<CardTitle v-if="$slots.title || title" :tag="titleTag">
				<slot name="title">
					{{ title }}
				</slot>
			</CardTitle>
			<CardSubTitle v-if="$slots.subTitle || subTitle" :tag="subtitleTag">
				<slot name="subTitle">
					{{ subTitle }}
				</slot>
			</CardSubTitle>
			<slot></slot>
		</CardBody>
		
		<CardFooter v-if="$slots.footer || footer" v-bind="footerProps">
			<slot name="footer">
				{{ footer }}
			</slot>
		</CardFooter>
		<CardImage
			v-if="imageProps && imageProps.position==='bottom'"
			v-bind="imageProps"
		/>
	</component>
</template>

<script lang="ts" setup>
import {CardBody, CardFooter, CardHeader, CardTitle, CardSubTitle, CardImage} from "./index";
import {computed} from "vue";
import {CardProps} from "@/composables/useCards";
import {generateClasses} from "@/composables/useHelpers";

const props = withDefaults(defineProps<CardProps>(), {
	tag: 'div',
	titleTag: 'h4',
});

const classes = computed(() => [
	"card",
	// {
	// 	"flex-row": props.imgLeft || props.imgStart,
	// 	"flex-row-reverse": props.imgRight || props.imgEnd,
	// },
	generateClasses({
		bg: props.bgVariant,
		text: props.textVariant,
		border: props.borderVariant,
		textBg: props.textBgVariant
	}),
]);

</script>
<style>
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