<script setup lang="ts">
import Input from "@/components/Forms/Input.vue";
import DropdownMenu from "@/components/Dropdowns/DropdownMenu.vue";
import { AutocompleteProps } from "@/composables/useAutocompletes";
import { computed, getCurrentInstance, onMounted, ref, useModel } from "vue";
import { createDropdown, DropdownInterface } from "@/composables/useDropdowns";

const props = withDefaults(defineProps<AutocompleteProps>(), {
    maxHeight: '300px',
    //@ts-ignore
    options: [],
    modelValue: null,
    menuBlock: true
});

const emit = defineEmits<{
    show: [value: boolean]
    shown: [value: boolean]
    hide: [value: boolean]
    hidden: [value: boolean],
    'update:isShown': [value: boolean],
    'update:modelValue': [value: any]
}>();

const dd = ref<Partial<DropdownInterface>>();

onMounted(() => {
    dd.value = createDropdown(
        getCurrentInstance()?.vnode?.el as HTMLElement,
        null,
        null,
        {},
        emit,
        { focusToggleOnHide: false }
    );
});

const filteredOptions = computed(() => {
    if (!filterText.value) {
        return props.options;
    }

    return props.options.filter(
        (op: string) => op.toLowerCase().includes((filterText.value || '').toString().toLowerCase())
    );
});

const filterText = ref<string>();
const searchItems = (e: KeyboardEvent & { target: HTMLInputElement }) => {
    filterText.value = e.target.value;
};

const dropdownToggle = ref<InstanceType<typeof Input>>();
const model = useModel(props, 'modelValue');
const selectOption = (op: string) => {
    model.value = op;
    hideDropdown();
};

const toggleDropdown = () => dd.value?.toggle();
const showDropdown = () => dd.value?.show();
const hideDropdown = () => dd.value?.hide();
const onKeydownDown = (e: KeyboardEvent) => dd.value?.onKeydownDown(e);
const onKeydownUp = (e: KeyboardEvent) => dd.value?.onKeydownUp(e);
</script>

<template>
    <div class="dropdown" @keydown.down="onKeydownDown" @keydown.up="onKeydownUp" @keydown.esc="hideDropdown">
        <Input ref="dropdownToggle" class="dropdown-toggle" v-model="model" @click="toggleDropdown" @input="searchItems" />
        <DropdownMenu class="overflow-auto" :style="{ maxHeight: maxHeight }" :block="menuBlock">
            <li v-for="op in filteredOptions">
                <a href="#" class="dropdown-item" @click.prevent="selectOption(op)">
                    {{ op }}
                </a>
            </li>
        </DropdownMenu>
    </div>
</template>