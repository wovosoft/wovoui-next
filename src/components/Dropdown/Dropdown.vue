<script setup lang="ts">
import Button from "@/components/Buttons/Button.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import {createDropdown, DropdownProps} from "@/composables/useDropdowns";
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import vClickOutside from "@/directives/vClickOutside";

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

const dd = ref();
const toggle = ref<InstanceType<typeof Button>>();
const menu = ref<InstanceType<typeof DropdownMenu>>();

onMounted(() => {
    dd.value = createDropdown(
        getCurrentInstance().vnode.el,
        toggle.value?.$el,
        menu.value.$el
    );
});
</script>

<template>
    <component
        :is="tag"
        :class="classes"
        @keydown.down="()=>dd.onKeydownDown()"
        @keydown.up="()=>dd.onKeydownUp()"
        @keydown.esc="()=>dd.hide()">
        <Button
            v-if="split"
            :disabled="disabled"
            :variant="splitVariant"
            :block="block"
            :size="size">
            <slot name="button-content">
                {{ text }}
            </slot>
        </Button>
        <!--should be nav link-->
        <a v-if="isNav"
           ref="toggle"
           @click.prevent=""
           class="dropdown-toggle"
           role="button">
            {{ text }}
        </a>
        <Button
            v-else
            ref="toggle"
            :tag="toggleTag"
            :block="block"
            :disabled="disabled"
            :variant="variant"
            :size="size"
            @click="()=>dd?.toggle()"
            class="dropdown-toggle"
            :class="{'dropdown-toggle-split':split}">
            <slot name="button-content">
                <span class="visually-hidden" v-if="split">Toggle Dropdown</span>
                <template v-else>{{ text }}</template>
            </slot>
        </Button>
        <DropdownMenu ref="menu">
            <slot/>
        </DropdownMenu>
    </component>
</template>
