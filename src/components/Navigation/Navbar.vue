<template>
	<nav :class="classes" role="navigation">
		<Container :fluid="fluid" :size="size">
			<template v-if="brand || $slots.brand">
				<slot name="brand">
					<NavbarBrand :href="brandUrl">
						{{ brand }}
					</NavbarBrand>
				</slot>
			</template>
			<NavbarToggler
				v-if="toggleEnabled"
				v-model="collapsed"
			/>
			<slot :collapsed="collapsed" :toggleNavbar="toggleNavbar"></slot>
		</Container>
	</nav>
</template>
<script lang="ts" setup>
import {computed, provide, ref} from "vue";
import NavbarBrand from "@/components/Navigation/NavbarBrand.vue";
import NavbarToggler from "@/components/Navigation/NavbarToggler.vue";
import {NavbarProps} from "@/components/Navigation/index";
import Container from "@/components/Layouts/Container.vue";
import {AccordionIsCollapsedInjectionKey} from "@/components/Accordions";

const props = withDefaults(defineProps<NavbarProps>(), {
	brandUrl: '#',
	toggleEnabled: true,
	variant: 'light',
	bgVariant: 'light',
	expandsOn: 'lg',
	/**
	 * Navbar's are fluid by default
	 * @see https://getbootstrap.com/docs/5.0/layout/containers/#fluid-containers
	 */
	fluid: true
});

const collapsed = ref<boolean>(false);

function toggleNavbar() {
	collapsed.value = !collapsed.value;
}

const classes = computed(() => [
	"navbar",
	{
		["navbar-" + props.variant]: !!props.variant,
		["bg-" + props.bgVariant]: !!props.bgVariant,
		["fixed-" + props.fixed]: !!props.fixed,
		["sticky-" + props.sticky]: !!props.sticky,
	},
	...(Array.isArray(props.expandsOn) ? props.expandsOn : [props.expandsOn])
		.map(screen => "navbar-expand-" + screen)
]);

provide(AccordionIsCollapsedInjectionKey, collapsed);
</script>