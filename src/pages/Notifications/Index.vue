<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import Popover from "@/components/Notifications/Popover.vue";
</script>

<template>
	<h2 class="mt-3">Example</h2>
	<Button id="p1">Popover Default</Button>
	<Popover target="#p1">
		Hello Popover
	</Popover>
</template>