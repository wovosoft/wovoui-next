<script setup lang="ts">
import {computed} from "vue";
import {generateClasses, generateRectPositionalClasses} from "@/composables/useHelpers";
import {BadgeProps} from "@/components/Ui/index";

const props = withDefaults(defineProps<BadgeProps>(), {
	tag: 'span',
});

const attrs = computed(() => ({
	href: props.href,
	target: props.href ? '_self' : null,
	class: [
		"badge",
		generateClasses({
			bg: props.bgVariant,
			text: props.textVariant,
			textBg: props.textBgVariant
		}),
		{
			"rounded-pill": props.pill,
			"text-decoration-none": props.href,
			"position-absolute translate-middle": props.position,
		},
		generateRectPositionalClasses(props.position)
	]
}))
</script>

<template>
	<component :is="props.href?'a':tag" v-bind="attrs">
		<slot>
			{{ content }}
		</slot>
	</component>
</template>