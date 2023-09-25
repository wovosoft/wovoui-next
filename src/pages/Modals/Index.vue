<script setup lang="ts">
import Modal from "@/components/Modals/Modal.vue";
import Button from "@/components/Buttons/Button.vue";

</script>

<template>
	<div>
		<h3>Modal Example</h3>
		<Button @click="$refs.mm.show()">
			Non-static Modal
		</Button>
		<Modal ref="mm" :header="{text:'Modal Header'}">
			Used to set the `id` attribute on the rendered content, and used as the base to generate any additional
			element IDs as needed
		</Modal>
		
		<Button @click="$refs.mm1.show()" class="ms-3">
			Backdrop Disabled
		</Button>
		<Modal ref="mm1" no-close-on-backdrop :header="{text:'Modal Backdrop Disabled'}">
			Used to set the `id` attribute on the rendered content, and used as the base to generate any additional
			element IDs as needed
		</Modal>
		
		<Button @click="$refs.mm2.show()" class="ms-3">
			Static Backdrop
		</Button>
		<Modal ref="mm2" static :header="{text:'Modal Backdrop Static'}">
			Used to set the `id` attribute on the rendered content, and used as the base to generate any additional
			element IDs as needed
		</Modal>
		
		<Button @click="$refs.mm3.show()" class="ms-3">
			Modal Backdrop Static & No Close on ESC
		</Button>
		<Modal ref="mm3" static no-close-on-esc :header="{text:'Modal Backdrop Static & No Close on ESC'}">
			Used to set the `id` attribute on the rendered content, and used as the base to generate any additional
			element IDs as needed
		</Modal>
	</div>
</template>
