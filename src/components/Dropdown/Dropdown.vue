<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import vDropdownToggle from "@/directives/vDropdownToggle";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import {DropdownProps} from "@/composables/useDropdowns";
import {computed} from "vue";

const props = withDefaults(defineProps<DropdownProps>(), {
    tag: "div",
    menuTag: "ul",
    toggleTag: "button",
    variant: "secondary",
    splitVariant: "secondary",
    align: "start",
    dir: "bottom"
});

const classes = computed(() => ({
    "btn-group": !props.block && !props.isNav,
    "dropdown": props.block || props.isNav,
    "dropend": props.dir === "right",
    "dropstart": props.dir === "left",
    "dropup": props.dir === "top",
}));
</script>

<template>
    <component :is="tag" :class="classes">
        <Button
            v-if="split"
            data-bs-toggle="dropdown"
            :disabled="disabled"
            :variant="splitVariant"
            :block="block"
            v-dropdown-toggle
            :size="size">
            <slot name="button-content">
                {{ text }}
            </slot>
        </Button>
        <!--should be nav link-->
        <a v-if="isNav"
           ref="toggle"
           data-bs-toggle="dropdown"
           v-dropdown-toggle
           class="dropdown-toggle"
           role="button">
            {{ text }}
        </a>
        <Button
            v-else
            data-bs-toggle="dropdown"
            v-dropdown-toggle
            ref="toggle"
            :tag="toggleTag"
            :block="block"
            :disabled="disabled"
            :variant="variant"
            :size="size"
            class="dropdown-toggle"
            :class="{'dropdown-toggle-split':split}">
            <slot name="button-content">
                <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                <template v-else>{{ text }}</template>
            </slot>
        </Button>
        <DropdownMenu>
            <slot/>
        </DropdownMenu>
    </component>
</template>
