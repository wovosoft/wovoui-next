<script setup lang="ts">

import Carousel from "@/components/Carousels/Carousel.vue";
import CarouselItem from "@/components/Carousels/CarouselItem.vue";
import Card from "@/components/Cards/Card.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
    <div>
        <h3>Example</h3>
        <Carousel>
            <CarouselItem v-for="(cv,index) in getColorVariants" :active="index===4">
                <Card :text-bg-variant="cv" :body-props="{class:'py-5'}" style="padding-left: 100px;padding-right: 100px;">
                    <h3 class="text-center">{{cv}}</h3>
                    This is the first item's accordion body. It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These classes control the overall appearance,
                    as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just about any HTML can go within the
                    `.accordion-body`, though the transition does limit overflow.
                </Card>
            </CarouselItem>
        </Carousel>
    </div>
</template>
