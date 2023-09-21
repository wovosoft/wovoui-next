import {HasTag} from "@/composables/useCommonProps";

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
}