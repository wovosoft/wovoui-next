<template>
	<component :is="tag" v-bind="attrs">
		<template v-if="active">
			<slot></slot>
		</template>
		<template v-else-if="href">
			<a :href="href">
				<slot></slot>
			</a>
		</template>
		<template v-else>
			<slot></slot>
		</template>
	</component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {BreadcrumbItemProps} from "@/components/Breadcrumbs/index";

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
	tag: "li",
	activeClass: "active",
	ariaCurrent: "location",
	target: "_self",
	href: "#"
});


const attrs = computed(() => ({
	'aria-current': props.ariaCurrent,
	target: props.target,
	class: [
		"breadcrumb-item",
		{
			"active": props.active
		}
	]
}));
</script>