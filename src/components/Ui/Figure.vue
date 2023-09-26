<template>
    <figure class="figure">
        <slot></slot>
        <img v-if="imgUrl" :class="['figure-img',{'img-fluid':imgFluid}]" :src="imgUrl" :alt="imgAlt"/>
        <template v-if="caption||$slots.caption">
            <figcaption class="figure-caption">
                <slot name="caption">
                    {{ caption }}
                </slot>
            </figcaption>
        </template>
    </figure>
</template>

<script lang="ts" setup>

import {FigureProps} from "@/components/Ui/index";

withDefaults(defineProps<FigureProps>(), {})
</script>