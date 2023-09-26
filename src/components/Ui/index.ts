export {default as Badge} from "./Badge.vue";
export {default as Figure} from "./Figure.vue";
export {default as Placeholder} from "./Placeholder.vue";
export {default as Ratio} from "./Ratio.vue";
export {default as Vr} from "./Vr.vue";

import {HasBgVariant, HasTag, HasTextBgVariant, HasTextVariant, HasVariant} from "@/composables/useCommonProps";
import {AspectRatio, RectangularPosition, PlaceholderSize, ResponsiveNumber} from "@/composables/useResponsive";

export interface FigureProps {
    /**
     * Figure Caption
     */
    caption?: string;

    /**
     * Figure Image URL
     */
    imgUrl?: string;

    /**
     * Defines if figure should be fluid or not
     */
    imgFluid?: boolean;

    /**
     * Alternative value for figure image
     */
    imgAlt?: string;
}

export interface PlaceholderProps extends HasTag, HasVariant {
    /**
     * @description Placeholder Animation
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    glow?: boolean;

    /**
     * @description Placeholder Animation
     * @type boolean
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    wave?: boolean;

    /**
     * @description Placeholder Animation. Props glow or wave can be used.
     * @type string
     * @supported 'glow'|'wave'
     * @default null
     * @link https://getbootstrap.com/docs/5.2/components/placeholders/#animation
     */
    animation?: 'glow' | 'wave',

    /**
     * @description Defines Placeholder Size
     * @type string
     * @default null
     * @supported 'lg' | 'sm' | 'xs'
     */
    size?: PlaceholderSize;

    /**
     * Placeholder width can be set by css utility classes or inline styles
     * e.g. w-75, w-100, width:75% etc
     *
     * @description Sets placeholder width with bootstrap supported responsive layout sizes
     * @default null
     */
    col?: ResponsiveNumber;
}

export interface AspectProps extends HasTag {
    /**
     * Any Bootstrap 5 supported ratio component's css values.
     * The supported values are '1x1' | '4x3' | '16x9' | '21x9'
     * @default "16x9"
     *
     * More Info can be found at
     * @link https://getbootstrap.com/docs/5.2/helpers/ratio/
     *
     * Bootstrap Supports dynamic ratios. This component also supports dynamic ratios.
     * Any valid numeric values will be directly used as Number%
     * and any ratio such as MxN will be converted to (N/M*100)%.
     * Check out more details at
     * @link https://getbootstrap.com/docs/5.3/helpers/ratio/#aspect-ratios
     */
    ratio?: AspectRatio
}

export interface BadgeProps extends HasTag, HasTextVariant, HasBgVariant, HasTextBgVariant {
    /**
     * Generates Pill Badges
     * @default false
     * @link https://getbootstrap.com/docs/5.2/components/badge/#pill-badges
     */
    pill?: boolean;

    /**
     * When provided, the badge will be an anchor link
     */
    href?: string;

    /**
     * Sets position of the badge wrt. its parent,
     * parent element should have positioned relative
     * @supported 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
     * @link https://getbootstrap.com/docs/5.2/components/badge/#positioned
     */
    position?: RectangularPosition;

    /**
     * Default content for default slot
     */
    content?: string | number;
}

export interface VrProps extends HasTag {
    width?: string
}