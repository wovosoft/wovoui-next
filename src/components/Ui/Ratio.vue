<template>
    <component :is="tag" :class="classes" :style="styles">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
/**
 * https://getbootstrap.com/docs/5.3/helpers/ratio/#sass-maps
 * $aspect-ratios: (
 *   "1x1": 100%,
 *   "4x3": calc(3 / 4 * 100%),
 *   "16x9": calc(9 / 16 * 100%),
 *   "21x9": calc(9 / 21 * 100%)
 * );
 */

import {computed} from "vue";
import {getAspectRatios} from "@/composables/useResponsive";
import {isNumeric} from "@/composables/useHelpers";
import {AspectProps} from "@/components/Ui/index";

/**
 * This component is generated based on bootstrap helpers.
 * More details can be found at
 * @link https://getbootstrap.com/docs/5.3/helpers/ratio
 */
const props = withDefaults(defineProps<AspectProps>(), {
    tag: 'div',
    ratio: '16x9'
});

const styles = computed(() => {
    if (isNumeric(props.ratio)) {
        return {
            "--bs-aspect-ratio": props.ratio ? (props.ratio + "%") : null
        }
    }

    if (!getAspectRatios.includes(props.ratio) && props.ratio.toString().includes('x')) {
        //https://getbootstrap.com/docs/5.3/helpers/ratio/#sass-maps
        let ratios = ((ratios) => (ratios[1] / ratios[0] * 100))(
            props.ratio.toString().split("x").map((i: string) => Number(i))
        );

        return {
            "--bs-aspect-ratio": ratios > 0 && ratios !== Infinity ? (ratios + "%") : null
        }
    }
});

const classes = computed(() => [
    "ratio", {
        ["ratio-" + props.ratio]: getAspectRatios.includes(props.ratio)
    }
]);
</script>