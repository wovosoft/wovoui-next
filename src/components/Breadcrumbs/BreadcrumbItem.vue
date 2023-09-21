<template>
	<component :is="tag" :class="classes" v-bind="attributes">
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
import {BreadcrumbItemProps} from "@/composables/useBreadcrumbs";

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
	tag: "li",
	activeClass: "active",
	ariaCurrent: "location",
	target: "_self",
	href: "#"
});

const attributes = computed(() => {
	return {
		ariaCurrent: props.ariaCurrent
	}
});
const isRouterInstalled = computed(() => !!getCurrentInstance()?.appContext.config.globalProperties.$router);
const classes = computed(() => [
	"breadcrumb-item",
	{
		"active": props.active
	}
]);
</script>