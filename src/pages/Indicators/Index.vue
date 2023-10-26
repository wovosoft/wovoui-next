<script setup lang="ts">

import Progress from "@/components/Indicators/Progress.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
import Spinner from "@/components/Indicators/Spinner.vue";
</script>

<template>
	<h1 class="mt-3">Default Progress</h1>
	<Progress :value="Math.round(Math.random()*100)"/>
	
	<h1 class="mt-3">Height of Progress</h1>
	<Progress :value="Math.round(Math.random()*100)" height="10px"/>
	
	<h1 class="mt-3">Custom Label</h1>
	<Progress :value="Math.round(Math.random()*100)">
		<template #bar="{value}">
			Current Value : {{ value }}%
		</template>
	</Progress>
	
	<h1 class="mt-3">Backgrounds of Progress</h1>
	<template v-for="cv in getColorVariants">
		<Progress :value="Math.round(Math.random()*100)" :variant="cv" class="mb-3"/>
	</template>
	
	<h1 class="mt-3">Stripped Progress</h1>
	<template v-for="cv in getColorVariants">
		<Progress striped :value="Math.round(Math.random()*100)" :variant="cv" class="mb-3"/>
	</template>
	
	<h1 class="mt-3">Stripped & Animated Progress</h1>
	<template v-for="cv in getColorVariants">
		<Progress striped animated :value="Math.round(Math.random()*100)" :variant="cv" class="mb-3"/>
	</template>
	
	<h1 class="mt-3">Spinners</h1>
	<Spinner/>
	
	<h1 class="mt-3">Spinner Colors</h1>
	<Spinner v-for="cv in getColorVariants" :variant="cv" class="me-3"/>
	
	<h1 class="mt-3">Spinner Colors & Growing</h1>
	<Spinner v-for="cv in getColorVariants" grow :variant="cv" class="me-3"/>
	
	<h1 class="mt-3">Spinner Colors & Growing & Size</h1>
	<Spinner v-for="cv in getColorVariants" size="lg" grow :variant="cv" class="me-3"/> <br/>
	<Spinner v-for="cv in getColorVariants" size="sm" grow :variant="cv" class="me-3"/>
</template>