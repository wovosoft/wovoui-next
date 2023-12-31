<template>
    <component :is="tag" :role="role" :tabindex="tabindex" :class="classes">
        <Button tag="li"
                :size="addButtonSize"
                :pill="tagPills"
                :variant="tagVariant"
                v-for="(tag,tag_key) in model"
                :key="tag_key"
                class="me-1 mt-1 d-inline-flex align-items-center">
            {{ tag }}
            <Badge class="ms-2" :variant="badgeVariant" @click="model.splice(tag_key,1)">
                <X class="hover:bg-bright"/>
            </Badge>
        </Button>
        <li class="d-inline-flex flex-grow-1">
            <Input
                :size="addButtonSize"
                class="wui-tags-input w-100"
                :placeholder="placeholder"
                v-model.trim="inputText"
                @keyup.delete="backspacePressed"
                @keypress="addTag"
            />
            <Button @click="addTag" :size="addButtonSize" class="mt-1 py-0" v-if="inputText">
                {{ addButtonText }}
            </Button>
        </li>
    </component>
</template>

<script lang="ts" setup>
import {computed, ref, useModel} from "vue";
import {X} from "@wovosoft/wovoui-icons";
import Badge from "@/components/Ui/Badge.vue";
import {Button} from "@/components/Buttons";
import {Input, TagsProps} from "@/components/Forms";

const props = withDefaults(defineProps<TagsProps>(), {
    tag: 'ul',
    role: 'group',
    tabindex: -1,
    placeholder: 'Add Tag',
    tagVariant: 'secondary',
    badgeVariant: 'primary',
    addButtonSize: 'sm',
    addButtonText: 'Add',
});

const inputText = ref<string | number>();

const model = useModel(props, 'modelValue');

const addTag = (e: KeyboardEvent) => {
    if (!Array.isArray(model.value)) {
        model.value = [];
    }

    if ((e.keyCode === 13 || e.which === 13 || e.type === 'click') && inputText.value) {
        model.value.push(inputText.value)
        inputText.value = null;
    } else if (props.separator && props.separator.includes(e.key) && inputText.value) {
        model.value.push(inputText.value)
        setTimeout(() => inputText.value = null, 0);
    }
}
const backspacePressed = (e) => {
    if (props.removeOnDelete && e.target.selectionStart === 0 && model.value.length) {
        model.value.pop();
    }
}

const classes = computed(() => [
    "d-flex",
    "flex-wrap",
    "ps-1",
    "pe-1",
    "pb-1",
    "pt-0",
]);
</script>