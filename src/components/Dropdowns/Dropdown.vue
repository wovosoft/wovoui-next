<script setup lang="ts">
import {Button} from "@/components/Buttons";
import {DropdownMenu} from "@/components/Dropdowns";
import {createDropdown, DropdownProps} from "@/composables/useDropdowns";
import {computed, getCurrentInstance, onMounted, ref} from "vue";

const props = withDefaults(defineProps<DropdownProps>(), {
    tag: "div",
    menuTag: "ul",
    toggleTag: "button",
    variant: "secondary",
    splitVariant: "secondary",
    align: "start",
});

const classes = computed(() => {
    return [
        {
            "btn-group": !props.block && !props.isNav && !props.centered,
            "dropdown": props.block || props.isNav,
            "dropdown-center": props.centered,
            [`drop${props.dir}`]: props.dir,
            [`${props.dir}-center`]: props.centered && props.dir
        }
    ];
});

const popperPlacement = computed(() => {
    const placement = props.dir === 'end' ? 'right' :
        (props.dir === 'start' ? 'left' : props.dir);
    return [placement, props.align].join('-');
});

const dd = ref();
const toggle = ref<InstanceType<typeof Button>>();
const menu = ref<InstanceType<typeof DropdownMenu>>();

onMounted(() => {
    dd.value = createDropdown(
        getCurrentInstance()?.vnode?.el as HTMLElement,
        toggle.value?.$el,
        menu.value.$el,
        {
            placement: popperPlacement.value
        }
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
        <DropdownMenu ref="menu" :dark="menuDark">
            <slot/>
        </DropdownMenu>
    </component>
</template>
