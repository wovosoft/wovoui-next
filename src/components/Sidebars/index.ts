import {HasBgVariant, HasTag} from "@/composables/useCommonProps";
import {StyleValue} from "vue";
import {ClassType} from "@/index";
import {BasePlacement} from "@/composables/useResponsive";
import {ColorVariant} from "@/composables/useColorSchemes";

export interface OffcanvasProps extends HasTag {
    modelValue?: boolean;
    title?: string;
    showClose?: boolean;
    btnCloseWhite?: boolean;
}

export interface OffcanvasBodyProps extends HasTag {

}

export interface OffcanvasProps extends HasTag, HasBgVariant {
    modelValue?: boolean;
    placement?: BasePlacement;
    header?: string;
    headerClass?: ClassType;
    bodyClass?: ClassType;
    backdropClass?: ClassType;
    headerStyle?: StyleValue;
    bodyStyle?: StyleValue;
    backdropStyle?: StyleValue;
    title?: string;
    backdrop?: boolean;
    enableBodyScroll?: boolean;
    btnCloseWhite?: boolean;
    scrollbarPadding?: string;
    noCloseOnEsc?: boolean;
    textVariant?: ColorVariant;
}