<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import Popover from "@/components/Notifications/Popover.vue";
</script>

<template>
	<h2 class="mt-3">Example</h2>
	<Button id="p1">Popover Default</Button>
	<Popover target="#p1" placement="right">
		Hello Popover
	</Popover>
	
	<h2 class="mt-3">Four Directions</h2>
	<template v-for="placement in ['left','right','top','bottom']">
		<Button :id="placement" class="me-3">Popover {{ placement }}</Button>
		<Popover :target="'#'+placement" :placement="placement">
			Hello Popover
		</Popover>
	</template>
</template>