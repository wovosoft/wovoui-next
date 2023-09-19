<script setup lang="ts">
import {Button} from "@/components/Buttons";
import {DropdownMenu} from "@/components/Dropdowns";
import {
    createDropdown, directionMap,
    DropdownProps, popperPlacementMap
} from "@/composables/useDropdowns";
import {computed, defineComponent, getCurrentInstance, h, onMounted, ref} from "vue";

const props = withDefaults(defineProps<DropdownProps>(), {
    tag: "div",
    menuTag: "ul",
    toggleTag: "button",
    variant: "secondary",
    splitVariant: "secondary",
    align: "start",
    asGroup: true
});

const emit = defineEmits<{
    show: [value: boolean]
    shown: [value: boolean]
    hide: [value: boolean]
    hidden: [value: boolean],
    'update:modelValue': [value: boolean]
}>();

//@todo: implement later
// const isShown = useModel(props, 'modelValue');
//
// watch(isShown, value => {
//     if (value === isShown.value) {
//         return;
//     }
//     if (value) {
//         showDropdown();
//     } else {
//         hideDropdown();
//     }
// });

const popperPlacement = computed(() => popperPlacementMap[props.align]?.[props.dir] || popperPlacementMap.start.bottom);
const dropDirection = computed(() => directionMap[props.dir] || "dropdown");

const classes = computed(() => [
    dropDirection.value,
    {
        "btn-group": props.split || props.asGroup,
        "dropdown-center": props.dir === 'bottom' && props.align === 'center',
        "dropup-center": props.dir === 'top' && props.align === 'center',
    }
]);


const dd = ref<any>();

onMounted(() => {
    const root = getCurrentInstance()?.vnode?.el as HTMLElement;
    dd.value = createDropdown(
        root,
        null,
        null, {
            placement: popperPlacement.value
        },
        emit
    );
});

const ToggleButton = defineComponent({
    setup(toggleProps, {slots}) {
        return () => h(
            Button,
            {
                block: props.block,
                disabled: props.disabled,
                variant: props.variant,
                size: props.size,
                class: [
                    "dropdown-toggle",
                    {'dropdown-toggle-split': props.split}
                ],
            },
            slots?.default
        )
    }
});

const TheButton = defineComponent({
    setup(pt, {slots}) {
        return () => h(Button, {
            disabled: props.disabled,
            variant: props.variant,
            block: props.block,
            size: props.size,
        }, slots?.default)
    }
});

const showDropdown = () => dd.value?.show();
const hideDropdown = () => dd.value?.hide();
const toggleDropdown = () => dd.value?.toggle();
const onKeydownDown = (e: KeyboardEvent) => dd.value?.onKeydownDown(e);
const onKeydownUp = (e: KeyboardEvent) => dd.value?.onKeydownUp(e);

defineExpose({
    show: showDropdown,
    hide: hideDropdown,
    toggle: toggleDropdown,
});


</script>

<template>
    <component
        :is="tag"
        :class="classes"
        @keydown.down="onKeydownDown"
        @keydown.up="onKeydownUp"
        @keydown.esc="hideDropdown">
        <Button v-if="split && dropDirection!=='dropstart'">
            <slot name="button-content">
                {{ text }}
            </slot>
        </Button>

        <ToggleButton ref="toggle" @click="toggleDropdown">
            <slot name="button-content" v-if="!split">
                {{ text }}
            </slot>
        </ToggleButton>

        <DropdownMenu ref="menu" :dark="menuDark">
            <slot/>
        </DropdownMenu>

        <TheButton v-if="split && dropDirection==='dropstart'">
            <slot name="button-content">
                {{ text }}
            </slot>
        </TheButton>
    </component>
</template>
