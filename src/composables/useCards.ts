import {
    HasBgVariant,
    HasBorderVariant,
    HasTag,
    HasTextBgVariant,
    HasTextVariant,
    HasVariant
} from "@/composables/useCommonProps";
import {TextVariants} from "@/composables/useColorSchemes";

export interface CardTitleProps extends HasTag {

}

export interface CardTextProps extends HasTag {

}

export interface CardTextProps extends HasTag {

}

export interface CardSubTitleProps extends HasTag, HasTextVariant {
    title?: string;
}

export interface CardLinkProps {
    href?: string;
}

//@todo: think about reusing this union type, start and end position should be implemented
export type CardImagePosition = 'start' | 'end' | 'top' | 'bottom';

export interface CardImageProps {
    src: string;
    alt?: string;
    overlay?: boolean;
    position?: CardImagePosition;
}

export interface CardHeaderProps extends HasTag, HasVariant, HasBorderVariant, HasTextVariant {

}

export interface CardFooterProps extends HasTag, HasVariant, HasBorderVariant, HasTextVariant {

}

export interface CardGroupProps extends HasTag {
    deck?: boolean;
    columns?: boolean;
}

export interface CardBodyProps extends HasTag, HasVariant, HasBorderVariant, HasTextVariant {
    overlay?: boolean;
    subTitle?: string;
    subTitleTag?: keyof HTMLElementTagNameMap;
    subTitleTextVariant?: TextVariants;
    title?: string;
    titleTag?: keyof HTMLElementTagNameMap;
}

export interface CardProps extends HasTag, HasBgVariant, HasBorderVariant, HasTextVariant, HasTextBgVariant {
    noBody?: boolean;

    align?: string;

    bodyProps?: CardBodyProps;

    footer?: string;
    footerProps?: CardFooterProps;

    header?: string;
    headerProps?: CardHeaderProps;

    imageProps?: CardImageProps;

    overlay?: boolean;

    title?: string;
    titleTag?: keyof HTMLElementTagNameMap;

    subTitle?: string;
    subtitleTag?: keyof HTMLElementTagNameMap;
}

