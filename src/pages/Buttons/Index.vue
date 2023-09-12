<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
    <div class="mt-3">
        <h3>Buttons</h3>
        <Button class="me-3 mb-3">Default Button</Button>
        <Button v-for="cv in getColorVariants" :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Small Buttons</h3>
        <Button v-for="cv in getColorVariants" size="sm" :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Large Buttons</h3>
        <Button v-for="cv in getColorVariants" size="lg" :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Button Anchors</h3>
        <Button tag="a" v-for="cv in getColorVariants" :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Button Disabled</h3>
        <Button tag="a" disabled v-for="cv in getColorVariants" :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Outlined Button</h3>
        <Button v-for="cv in getColorVariants" outline :variant="cv" class="me-3 mb-3">
            {{cv}} Button
        </Button>

        <h3>Block Button</h3>
       <div>
           <Button v-for="cv in getColorVariants" block :variant="cv" class="mb-3">
               {{cv}} Button
           </Button>
       </div>
    </div>
</template>