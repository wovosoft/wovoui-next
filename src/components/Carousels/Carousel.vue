<script setup lang="ts">

import CarouselInner from "@/components/Carousels/CarouselInner.vue";
import CarouselControl from "@/components/Carousels/CarouselControl.vue";
import CarouselIndicators from "@/components/Carousels/CarouselIndicators.vue";
import {computed, onMounted, provide, Ref, ref, unref, useModel} from "vue";
import CarouselIndicatorButton from "@/components/Carousels/CarouselIndicatorButton.vue";
import {CarouselProps} from "@/composables/useCarousels";

const props = withDefaults(defineProps<CarouselProps>(), {
    tag: 'div'
});

/**
 * @description States of the items
 */

const items = ref<Ref<boolean>[]>([]);

/**
 * Register an item
 * Returns index of the item in items array
 * @param item
 */
const registerItem = (item: Ref<boolean>): number => {
    const index = (items.value.push(item) - 1);

    if (item.value) {
        currentItem.value = index;
    }

    return index;
};

provide("registerItem", registerItem);

const currentItem = useModel(props, "modelValue", {local: true});

const direction = ref<'next' | 'prev'>("next");
provide('direction', direction);


onMounted(() => {
    //if no active item is set, set the first item as active
    if (!items.value.find((item, index) => item.value)) {
        items.value[0].value = true;
    }
});

const showItem = (item: number | Ref<boolean>) => {
    let nextItem: Ref<boolean>;
    if (typeof item === 'number') {
        if (item < 0 || item >= items.value.length) {
            throw new Error("Invalid Index");
        }

        nextItem = items.value[item];
    } else {
        nextItem = item;
    }

    const prevItem = items.value[currentItem.value];

    //find direction
    direction.value = items.value.indexOf(nextItem) > items.value.indexOf(prevItem) ? "next" : "prev";
    nextItem.value = true;
    prevItem.value = false;
    currentItem.value = items.value.indexOf(nextItem);
};


const nextClicked = () => {

};
const prevClicked = () => {

};

const classes = computed(() => [
    "carousel",
    {
        slide: props.slide,
        "carousel-fade": props.fade,
        "carousel-dark": props.dark,
    }
]);
</script>

<template>
    <component :is="tag" :class="classes">
        <CarouselIndicators>
            <CarouselIndicatorButton
                v-for="(item, index) in items"
                :key="index"
                :index="index"
                :aria-label="'Slide ' + (index + 1)"
                :active="index === currentItem"
                @click="showItem(index)"
            />
        </CarouselIndicators>
        <CarouselInner>
            <slot/>
        </CarouselInner>
        <CarouselControl type="prev"/>
        <CarouselControl type="next"/>
    </component>
</template>