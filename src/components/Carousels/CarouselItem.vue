<script setup lang="ts">
import {CarouselItemProps} from "@/composables/useCarousels";
import {computed, inject, reactive, Ref, useModel, watch} from "vue";

const props = withDefaults(defineProps<CarouselItemProps>(), {
    tag: 'div',
    active: false,
    start: false,
    end: false
});

const isActive = useModel(props, "active", {local: true});

const registerItem = inject<(item: Ref<boolean>) => number>("registerItem");
registerItem(isActive);

const direction = inject<Ref<'next' | 'prev'>>("direction");

const states = reactive({
    next: false,
    prev: false,
    start: false,
    end: false
});

const classes = computed(() => ({
    'carousel-item': true,
    active: isActive.value,
    'carousel-item-start': states.start,
    'carousel-item-end': states.end,
    'carousel-item-next': states.next,
    'carousel-item-prev': states.prev
}));

const isNext = () => direction.value === 'next';
const isPrev = () => direction.value === 'prev';

watch(isActive, (value: boolean) => {
    if (value) {

    } else {

    }
});

</script>

<template>
    <component :is="tag" :class="classes">
        <slot></slot>
    </component>
</template>