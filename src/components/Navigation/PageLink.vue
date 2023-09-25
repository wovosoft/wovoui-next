<script setup lang="ts">
import {PageLinkProps} from "@/components/Navigation/useNavigation";

const props = withDefaults(defineProps<PageLinkProps>(), {
    tag: 'a',
    href: '#',
    prevText: '&laquo;',
    nextText: '&raquo;'
});

const ariaLabelText = () => {
    if (props.next) {
        return "Next";
    }
    if (props.prev) {
        return "Previous";
    }
    return null;
};
</script>

<template>
    <component :is="tag" :aria-label="ariaLabelText()" class="page-link" :href="href">
        <slot></slot>
    </component>
</template>