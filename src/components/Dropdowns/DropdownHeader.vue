<template>
    <component :is="wrapper" role="presentation">
        <component :is="tag" class="dropdown-header">
            <slot></slot>
        </component>
    </component>
</template>

<script lang="ts" setup>

import {DropdownHeaderProps} from "@/composables/useDropdowns";

withDefaults(defineProps<DropdownHeaderProps>(), {
    wrapper: 'li',
    tag: 'h6'
})
</script>