<template>
	<template v-if="isVueRouterInstalled && to">
		<component is="router-link" :to="to" :class="classes" v-bind="linkAttributes">
			<slot></slot>
		</component>
	</template>
	<component v-else :is="tag" :class="classes" v-bind="linkAttributes">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
import {computed, getCurrentInstance} from "vue";
import {linkAttributesType, NavLinkProps} from "@/components/Navigation/index";

const props = withDefaults(defineProps<NavLinkProps>(), {
	tag: 'a',
});

const isVueRouterInstalled = computed(() => {
	return !!getCurrentInstance()?.appContext.config.globalProperties.$router;
});

const classes = computed(() => ["nav-link", {
	active: props.active,
	disabled: props.disabled
}]);

const linkAttributes = computed<linkAttributesType>(() => ({
	href: props.tag === "a" ? props.href : null,
	ariaCurrent: props.ariaCurrent,
	ariaDisabled: props.disabled,
	target: (props.target === "a" || props.href) ? props.target : null
}));
</script>