<template>
    <component :is="tag" :class="classes">
        <PageLink :href="href" :tag="linkTag" :prev="prev" :next="next" :aria-label="ariaLabel">
            <slot></slot>
        </PageLink>
    </component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import PageLink from "@/components/Navigation/PageLink.vue";
import {PageItemProps} from "@/components/Navigation/index";

const props = withDefaults(defineProps<PageItemProps>(), {
    tag: 'li',
    linkTag: 'a',
    href: '#'
});

const classes = computed(() => [
        "page-item",
        {
            "active": props.active,
            "disabled": props.disabled,
        }
    ]
);
</script>