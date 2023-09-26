<script setup lang="ts">
import Button from "@/components/Buttons/Button.vue";
import Collapse from "@/components/Accordions/Collapse.vue";
import Card from "@/components/Cards/Card.vue";
import {ref} from "vue";
import Accordion from "@/components/Accordions/Accordion.vue";
import AccordionItem from "@/components/Accordions/AccordionItem.vue";

const isShown = ref<boolean>(false)
const isShownHorizontal = ref<boolean>(false)
const accordionModel = ref<number>(0)
</script>

<template>
	<div>
		<div>
			<h3>Collapse : {{ isShown }}</h3>
			<Button @click="$refs.clps.toggle()" class="me-3">Toggle Collapse</Button>
			<Button @click="isShown=!isShown" class="me-3">Toggle Collapse by Model</Button>
		</div>
		
		<Collapse ref="clps" v-model="isShown">
			<Card>
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
			</Card>
		</Collapse>
		
		<br/>
		<br/>
		<Button @click="isShownHorizontal=!isShownHorizontal" class="me-3">Toggle Collapse by Model</Button>
		
		<Collapse ref="collapse_horizontal" v-model="isShownHorizontal" horizontal width="500px">
			<Card>
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
				Some placeholder content for the collapse component. This panel is hidden by default but revealed when
				the
				user activates the relevant trigger.
			</Card>
		</Collapse>
		
		<h3 class="mt-3">Accordion with model {{ accordionModel }}</h3>
		<Accordion v-model="accordionModel">
			<AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
				<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
				plugin adds
				the appropriate classes that we use to style each element. These classes control the overall appearance,
				as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
				overriding our default variables. It's also worth noting that just about any HTML can go within the
				`.accordion-body`, though the transition does limit overflow.
			</AccordionItem>
		</Accordion>
		
		<h3>Accordion</h3>
		
		<Accordion>
			<AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
				<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
				plugin adds
				the appropriate classes that we use to style each element. These classes control the overall appearance,
				as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
				overriding our default variables. It's also worth noting that just about any HTML can go within the
				`.accordion-body`, though the transition does limit overflow.
			</AccordionItem>
		</Accordion>
		
		<h3 class="mt-3">Always Open Accordion</h3>
		<Accordion always-open>
			<AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
				<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
				plugin adds
				the appropriate classes that we use to style each element. These classes control the overall appearance,
				as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
				overriding our default variables. It's also worth noting that just about any HTML can go within the
				`.accordion-body`, though the transition does limit overflow.
			</AccordionItem>
		</Accordion>
		
		<h3 class="mt-3">Always Open, Flush Accordion</h3>
		<Accordion always-open flush>
			<AccordionItem v-for="i in 5" :header="'Accordion Item #'+i">
				<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
				plugin adds
				the appropriate classes that we use to style each element. These classes control the overall appearance,
				as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or
				overriding our default variables. It's also worth noting that just about any HTML can go within the
				`.accordion-body`, though the transition does limit overflow.
			</AccordionItem>
		</Accordion>
	
	
	</div>
</template>