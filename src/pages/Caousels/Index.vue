<script setup lang="ts">

import Carousel from "@/components/Carousels/Carousel.vue";
import CarouselItem from "@/components/Carousels/CarouselItem.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
import CarouselCaption from "@/components/Carousels/CarouselCaption.vue";
</script>

<template>
    <div data-bs-theme="dark">
        <h3>Example with Controls</h3>
        <Carousel controls>
            <CarouselItem v-for="(cv,index) in getColorVariants" :active="index===0">
                <div :class="['text-bg-'+cv]" style="padding:100px;">
	                <CarouselCaption class="d-none d-md-block">
		                <h5>{{cv}}</h5>
		                <p>Some representative placeholder content for the first slide.</p>
	                </CarouselCaption>
                </div>
            </CarouselItem>
        </Carousel>
	    
	    <h3>Example with Indicators</h3>
        <Carousel indicators>
            <CarouselItem v-for="(cv,index) in getColorVariants" :active="index===0">
                <div :class="['text-bg-'+cv]" style="padding:100px;">
	                <CarouselCaption class="d-none d-md-block">
		                <h5>{{cv}}</h5>
		                <p>Some representative placeholder content for the first slide.</p>
	                </CarouselCaption>
                </div>
            </CarouselItem>
        </Carousel>
	    
	    <h3>Complete Example</h3>
        <Carousel indicators controls>
            <CarouselItem v-for="(cv,index) in getColorVariants" :active="index===0">
                <div :class="['text-bg-'+cv]" style="padding:100px;">
	                <CarouselCaption class="d-none d-md-block">
		                <h5>{{cv}}</h5>
		                <p>Some representative placeholder content for the first slide.</p>
	                </CarouselCaption>
                </div>
            </CarouselItem>
        </Carousel>
	    
	    <h3 class="mt-3">Crossfade</h3>
	    <Carousel indicators controls fade>
		    <CarouselItem v-for="(cv,index) in getColorVariants" :active="index===0">
			    <div :class="['text-bg-'+cv]" style="padding:100px;">
				    <CarouselCaption class="d-none d-md-block">
					    <h5>{{cv}}</h5>
					    <p>Some representative placeholder content for the first slide.</p>
				    </CarouselCaption>
			    </div>
		    </CarouselItem>
	    </Carousel>
    </div>
</template>
