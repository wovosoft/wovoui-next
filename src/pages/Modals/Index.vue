<script setup lang="ts">
import Modal from "@/components/Modals/Modal.vue";
import Button from "@/components/Buttons/Button.vue";

</script>

<template>
	<div>
		<h3>Modal Example</h3>
		<Button @click="$refs.mm.show()">
			Open Modal
		</Button>
		<Modal ref="mm">
			Used to set the `id` attribute on the rendered content, and used as the base to generate any additional element IDs as needed
		</Modal>
	</div>
</template>
