<script setup lang="ts">
import {TableProps} from "@/components/Tables/index";
import {computed} from "vue";

const props = withDefaults(defineProps<TableProps>(), {});

let wrapperClasses = computed(() => ({
    "table-responsive": (props.responsive === true),
    ["table-responsive-" + props.responsive]: (typeof props.responsive === "string" && props.responsive)
}));

let classes = computed(() => [
    "table",
    {
        ["table-" + props.variant]: props.variant,
        "table-striped": props.striped === true,
        "table-striped-columns": props.striped === 'columns',
        "table-hover": props.hover,
        "table-active": props.active,
        "table-bordered": props.bordered,
        ["border-" + props.borderVariant]: !!props.borderVariant,
        "table-borderless": props.borderless,
        "table-sm": props.small,
        ["align-" + props.align]: !!props.align,
        "caption-top": props.captionTop,
    }
]);
</script>

<template>
    <div v-if="responsive" :class="wrapperClasses">
        <table :class="classes">
            <caption v-if="$slots.caption || caption">
                <slot name="caption"></slot>
            </caption>
            <slot></slot>
        </table>
    </div>
    <table :class="classes" v-else>
        <caption v-if="$slots.caption || caption">
            <slot name="caption"></slot>
        </caption>
        <slot></slot>
    </table>
</template>
