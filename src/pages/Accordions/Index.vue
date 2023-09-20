<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import Collapse from "@/components/Accordions/Collapse.vue";
</script>

<template>
	<div>
		<h3>Collapse</h3>
		<Button @click="$refs.clps.toggle()">Toggle Collapse</Button>
		<Collapse ref="clps">
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
			user activates the relevant trigger.
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
			user activates the relevant trigger.
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
			user activates the relevant trigger.
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
			user activates the relevant trigger.
			Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
			user activates the relevant trigger.
		</Collapse>
	</div>
</template>