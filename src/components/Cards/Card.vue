<template>
	<component :is="tag" :class="classes">
		<CardImage
			v-if="image && (image.position==='top' || !image.position)"
			v-bind="image"
		/>
		
		<CardHeader v-if="$slots.header || header?.text" v-bind="header">
			<slot name="header">
				{{ header?.text }}
			</slot>
		</CardHeader>
		
		<CardBody v-bind="body" :overlay="image?.overlay">
			<CardTitle v-if="$slots.title || title?.text" :tag="title?.tag">
				<slot name="title">
					{{ title?.text }}
				</slot>
			</CardTitle>
			<CardSubTitle v-if="$slots.subTitle || subTitle?.text" :tag="subTitle.tag">
				<slot name="subTitle">
					{{ subTitle?.text }}
				</slot>
			</CardSubTitle>
			<slot></slot>
		</CardBody>
		
		<CardFooter v-if="$slots.footer || footer?.text" v-bind="footer">
			<slot name="footer">
				{{ footer?.text }}
			</slot>
		</CardFooter>
		<CardImage
			v-if="image && image.position==='bottom'"
			v-bind="image"
		/>
	</component>
</template>

<script lang="ts" setup>
import {CardBody, CardFooter, CardHeader, CardTitle, CardSubTitle, CardImage, CardProps} from "./index";
import {computed} from "vue";
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