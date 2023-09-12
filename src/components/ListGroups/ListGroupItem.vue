<script setup lang="ts">
import {ListGroupItemProps} from "@/composables/useListGroups";
import {computed, inject} from "vue";

const props = withDefaults(defineProps<ListGroupItemProps>(), {
    tag: 'div'
});

const listGroupTag = inject('listGroupTag');

const theTag = computed(() => {
    if (props.href) {
        return "a";
    }

    if (['ul', 'ol'].includes(listGroupTag)) {
        return 'li';
    }

    return props.tag;
});

const attrs = computed(() => {
    return {
        ariaCurrent: props.active,
        ariaDisabled: props.disabled,

        //for buttons
        type: (props.asButton || theTag.value === 'button') ? 'button' : null,
        disabled: (theTag.value === 'button' && props.disabled) ? true : null,

        href: props.href,
        class: [
            "list-group-item",
            {
                "active": props.active,
                "disabled": props.disabled,
                "list-group-item-action": props.button || theTag.value === 'a',
                ["list-group-item-" + props.variant]: !!props.variant
            }
        ],
    };
});
</script>

<template>
    <component :is="theTag" v-bind="attrs">
        <slot></slot>
    </component>
</template>