<template>
    <component :is="tag" class="nav-item">
        <NavLink
            :tag="linkTag"
            :target="target"
            :href="href"
            :to="to"
            :active="active"
            :disabled="disabled"
            :aria-current="ariaCurrent">
            <slot></slot>
        </NavLink>
    </component>
</template>

<script lang="ts" setup>
import NavLink from "@/components/Navigation/NavLink.vue";
import {NavItemProps} from "@/components/Navigation/index";

withDefaults(defineProps<NavItemProps>(), {
    tag: 'li',
    linkTag: 'a',
    href: '#',
	ariaCurrent:'page',
});
</script>