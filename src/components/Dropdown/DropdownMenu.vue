<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>

<script lang="ts" setup>
import {computed, watch} from "vue";
import {DropdownMenuProps} from "@/composables/useDropdowns";

const props = withDefaults(defineProps<DropdownMenuProps>(), {
    tag: 'ul'
});


const classes = computed(() => ([
    "dropdown-menu",
    {
        'dropdown-menu-dark': props.dark,
        'show': props.show,
        'w-100': props.block
    }
]));

const emit = defineEmits<{
    (e: 'opened', value: boolean): void
    (e: 'closed', value: boolean): void
}>();

watch(() => props.show, value => {
    if (value) {
        emit("opened", true);
    } else {
        emit("closed", true);
    }
});
</script>
