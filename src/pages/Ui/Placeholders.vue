<script setup lang="ts">

import Placeholder from "@/components/Ui/Placeholder.vue";
import Card from "@/components/Cards/Card.vue";
import CardBody from "@/components/Cards/CardBody.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
	<div>
		<h1>As Component</h1>
		<Card no-body aria-hidden="true">
			<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
			     role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
				Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96"></rect>
			</svg>
			<CardBody class="card-body">
				<Placeholder glow class="card-title">
					<span class="placeholder col-6"></span>
				</Placeholder>
				<Placeholder glow tag="p" class="card-text">
					<Placeholder tag="span" :col="7"></Placeholder>
					<Placeholder tag="span" :col="4"></Placeholder>
					<Placeholder tag="span" :col="4"></Placeholder>
					<Placeholder tag="span" :col="6"></Placeholder>
					<Placeholder tag="span" :col="7"></Placeholder>
					<Placeholder tag="span" :col="8"></Placeholder>
				</Placeholder>
				<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
			</CardBody>
		</Card>
		
		<h1>Variants</h1>
		<Card no-body aria-hidden="true">
			<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
			     role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>
				Placeholder</title>
				<rect width="100%" height="100%" fill="#868e96"></rect>
			</svg>
			<CardBody class="card-body">
				<Placeholder glow class="card-title">
					<span class="placeholder col-6"></span>
				</Placeholder>
				<Placeholder glow tag="p" class="card-text">
					<Placeholder v-for="cv in getColorVariants" :variant="cv" tag="span" :col="12"></Placeholder>
					
				</Placeholder>
				<a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
			</CardBody>
		</Card>
	</div>
</template>
