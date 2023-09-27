import CardSubTitle from "@/components/Cards/CardSubTitle.vue";

export {default as Card} from "./Card.vue";
export {default as CardBody} from "./CardBody.vue";
export {default as CardFooter} from "./CardFooter.vue";
export {default as CardGroup} from "./CardGroup.vue";
export {default as CardHeader} from "./CardHeader.vue";
export {default as CardImage} from "./CardImage.vue";
export {default as CardLink} from "./CardLink.vue";
export {default as CardSubTitle} from "./CardSubTitle.vue";
export {default as CardText} from "./CardText.vue";
export {default as CardTitle} from "./CardTitle.vue";

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

interface TextProps {
    text?: string;
}

export interface CardProps extends HasTag, HasBgVariant, HasBorderVariant, HasTextVariant, HasTextBgVariant {
    noBody?: boolean;

    align?: string;

    header?: CardHeaderProps & TextProps;
    body?: CardBodyProps & TextProps;
    footer?: CardFooterProps & TextProps;

    image?: CardImageProps & TextProps;

    overlay?: boolean;

    title?: CardTitleProps & TextProps;

    subTitle?: CardSubTitleProps & TextProps;
}

