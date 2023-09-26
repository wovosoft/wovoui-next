<script setup lang="ts">
import {computed, provide} from "vue";
import {getScreenSizes, ScreenSize} from "@/composables/useResponsive";
import {ListGroupProps} from "@/components/ListGroups/index";

const props = withDefaults(defineProps<ListGroupProps>(), {
    tag: "ul",
    horizontal: false
});

const attrs = computed(() => {
    let horizontalClasses: string[] = [];
    if (typeof props.horizontal === 'boolean' && props.horizontal) {
        horizontalClasses = ['list-group-horizontal'];
    } else if (Array.isArray(props.horizontal)) {
        horizontalClasses = props.horizontal.map((ss: ScreenSize) => 'list-group-horizontal-' + ss);
    } else if (typeof props.horizontal === 'string' && getScreenSizes.includes(props.horizontal)) {
        horizontalClasses = ['list-group-horizontal-' + props.horizontal];
    }

    return {
        class: [
            "list-group",
            {
                "list-group-flush": props.flush,
                "list-group-numbered": props.numbered,
            },
            ...horizontalClasses
        ]
    };
});

//catchable by list group item
provide('listGroupTag', props.numbered ? 'ol' : props.tag);
</script>

<template>
    <component :is="numbered?'ol':tag" v-bind="attrs">
        <slot></slot>
    </component>
</template>
