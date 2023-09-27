import {HasTag} from "@/composables/useCommonProps";

//Exports
export {default as Carousel} from "./Carousel.vue";
export {default as CarouselCaption} from "./CarouselCaption.vue";
export {default as CarouselControl} from "./CarouselControl.vue";
export {default as CarouselIndicatorButton} from "./CarouselIndicatorButton.vue";
export {default as CarouselIndicators} from "./CarouselIndicators.vue";
export {default as CarouselInner} from "./CarouselInner.vue";
export {default as CarouselItem} from "./CarouselItem.vue";

//Types
export interface CarouselCaptionProps extends HasTag {

}

export interface CarouselIndicatorsProps extends HasTag {

}

export interface CarouselInnerProps extends HasTag {

}

export interface CarouselItemProps extends HasTag {
    /**
     * Controls the active state of the item. Set to true to make it the active slide.
     */
    active?: boolean;
}

export interface CarouselProps extends HasTag {
    modelValue?: number;
    fade?: boolean;
    dark?: boolean;
    slide?: boolean;
    indicators?: boolean;
    controls?: boolean;
    timeout?: number;
}