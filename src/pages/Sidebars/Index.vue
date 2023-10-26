<script setup lang="ts">

import Offcanvas from "@/components/Sidebars/Offcanvas.vue";
import Button from "@/components/Buttons/Button.vue";
</script>

<template>
	<div>
		<h1>Offcanvas</h1>
		<Button @click="$refs.basic1.toggle()">Toggle Basic</Button>
		<Offcanvas ref="basic1" header="Offcanvas Title">
			Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements
			here.
		</Offcanvas>
	</div>
</template>
