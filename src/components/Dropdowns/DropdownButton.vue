<template>
    <li role="menuitem">
        <button
            class="dropdown-item"
            type="button"
            :class="{'active':active,'disabled':disabled}">
            <slot></slot>
        </button>
    </li>
</template>

<script lang="ts" setup>

import {DropdownButtonProps} from "@/components/Dropdowns/index";

withDefaults(defineProps<DropdownButtonProps>(), {
    active: false,
    disabled: false
})
</script>