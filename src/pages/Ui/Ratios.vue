<script setup lang="ts">

import Ratio from "@/components/Ui/Ratio.vue";
import {ref} from "vue";
import {AspectRatio, getAspectRatios} from "@/composables/useResponsive";

const r = ref<AspectRatio>('21x9');
</script>

<template>
    <div>
        <h3>Basic Example</h3>
        <select v-model="r">
            <option v-for="ar in getAspectRatios" :value="ar">
                {{ ar }}
            </option>
        </select>
        <Ratio :ratio="r">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video"
                    allowfullscreen></iframe>
        </Ratio>
    </div>
</template>