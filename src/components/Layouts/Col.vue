<script setup lang="ts">
import {computed} from "vue";
import {isBoolean, isTrue} from "@/composables/useHelpers";
import {ColProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<ColProps>(), {
	tag: 'div'
});

const attrs = computed(() => ({
	class: ({
		"col": !(props.sm || props.md || props.lg || props.xl || props.cols),
		["col-" + props.cols]: props.cols,
		["col-sm-" + props.sm]: props.sm && !isBoolean(props.sm),
		["col-md-" + props.md]: props.md && !isBoolean(props.md),
		["col-lg-" + props.lg]: props.lg && !isBoolean(props.lg),
		["col-xl-" + props.xl]: props.xl && !isBoolean(props.xl),
		
		"col-sm": isTrue(props.sm),
		"col-md": isTrue(props.md),
		"col-lg": isTrue(props.lg),
		"col-xl": isTrue(props.xl),
		
		["align-self-" + props.alignSelf]: props.alignSelf,
		["justify-content-" + props.justifyContent]: props.justifyContent,
		
		["order-" + props.order]: props.order,
		
		["offset-sm-" + props.offsetSm]: props.offsetSm,
		["offset-md-" + props.offsetMd]: props.offsetMd,
		["offset-lg-" + props.offsetLg]: props.offsetLg,
		["offset-xl-" + props.offsetXl]: props.offsetXl,
	})
}));

</script>

<template>
	<component :is="tag" v-bind="attrs">
		<slot></slot>
	</component>
</template>
