import {PropType} from "vue";
import {HasTag, HasVariant} from "@/composables/useCommonProps";
import {PlaceholderSizes} from "@/composables/useResponsive";

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
    size?: PlaceholderSizes;

    /**
     * Placeholder width can be set by css utility classes or inline styles
     * e.g. w-75, w-100, width:75% etc
     *
     * @description Sets placeholder width with bootstrap supported responsive layout sizes
     * @default null
     */
    col?: ResponsiveNumbers;

}