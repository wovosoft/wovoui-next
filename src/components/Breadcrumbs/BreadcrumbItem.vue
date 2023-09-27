<template>
	<component :is="tag" v-bind="attrs">
		<template v-if="isRouterInstalled && to">
			<router-link :to="to">
				<slot></slot>
			</router-link>
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
import {computed, getCurrentInstance} from "vue";
import {BreadcrumbItemProps} from "@/components/Breadcrumbs/index";

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
	tag: "li",
	activeClass: "active",
	ariaCurrent: "location",
	target: "_self",
	href: "#"
});

const isRouterInstalled = computed(() => !!getCurrentInstance()?.appContext.config.globalProperties.$router);

const attrs = computed(() => ({
	'aria-current': props.ariaCurrent,
	class: [
		"breadcrumb-item",
		{
			"active": props.active
		}
	]
}));
</script>