<script setup lang="ts">

import {Card, CardTitle, CardText} from "@/components/Cards";
import {Button} from "@/components/Buttons";
import {getColorVariants} from "@/composables/useColorSchemes";

const getRandomCv = () => {
	const num = Math.round(Math.random() * 10);
	if (num >= getColorVariants.length) {
		return getColorVariants[num - 1];
	}
	return getColorVariants[num];
}
</script>

<template>
	<div>
		<h3>Example</h3>
		<p>
			Default Card without specific slots.
		</p>
		
		<Card>
			<CardTitle>Card title</CardTitle>
			<CardText>
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</CardText>
			<Button href="#" variant="primary">Go somewhere</Button>
		</Card>
		
		<h3 class="mt-3">Card with <code>title</code> Props</h3>
		<Card title="Card Title with prop">
			<CardText>
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</CardText>
			<Button href="#" variant="primary">Go somewhere</Button>
		</Card>
		
		<h3 class="mt-3">Card with <code>title</code> and <code>sub-title</code> Props</h3>
		<Card title="Card Title with prop" sub-title="Card Sub Title">
			<CardText>
				Some quick example text to build on the card title and make up the bulk of the card's content.
			</CardText>
			<Button href="#" variant="primary">Go somewhere</Button>
		</Card>
		
		<div class="row">
			<div class="col-md-4 col-sm-12">
				<h3 class="mt-3">Default Card Image</h3>
				<Card :image-props="{src:'https://picsum.photos/536/354'}">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button href="#" variant="primary">Go somewhere</Button>
				</Card>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="mt-3">Top Card Image</h3>
				<Card :image-props="{src:'https://picsum.photos/536/354',position:'top'}">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button href="#" variant="primary">Go somewhere</Button>
				</Card>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="mt-3">Bottom Card Image</h3>
				<Card :image-props="{src:'https://picsum.photos/536/354',position:'bottom'}">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button href="#" variant="primary">Go somewhere</Button>
				</Card>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="mt-3">Overlays Card Image</h3>
				<Card :image-props="{src:'https://picsum.photos/536/354',overlay:true}">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button href="#" variant="primary">Go somewhere</Button>
				</Card>
			</div>
			<div class="col-md-4 col-sm-12">
				<h3 class="mt-3">End(Right) Card Image</h3>
				<Card :image-props="{src:'https://picsum.photos/536/354',position:'end'}">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
					<Button href="#" variant="primary">Go somewhere</Button>
				</Card>
			</div>
		</div>
		
		<h3 class="mt-3">Text-Bg Variants</h3>
		<div class="row g-2">
			<div class="col-md-4 col-sm-12" v-for="cv in getColorVariants">
				<Card :text-bg-variant="cv" :header="cv">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
				</Card>
			</div>
		</div>
		
		<h3 class="mt-3">Border Variants</h3>
		<div class="row g-2">
			<div class="col-md-4 col-sm-12" v-for="cv in getColorVariants">
				<Card :border-variant="cv" :header="cv">
					<CardText>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</CardText>
				</Card>
			</div>
		</div>
		
		<h3 class="mt-3">Card Groups</h3>
	</div>
</template>