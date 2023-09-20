<script lang="ts" setup>

import Input from "@/components/Forms/Input.vue";
import {ref} from "vue";
import FormGroup from "@/components/Forms/FormGroup.vue";
import Textarea from "@/components/Forms/Textarea.vue";

const textModel = ref<string>();
</script>

<template>
	<div>
		<h3>Form Control</h3>
		<Input v-model="textModel"/>
		{{ textModel }}
		
		<h3 class="mt-3">Small Form Control</h3>
		<Input v-model="textModel" size="sm"/>
		{{ textModel }}
		
		<h3 class="mt-3">Large Form Control</h3>
		<Input v-model="textModel" size="lg"/>
		{{ textModel }}
		<br/>
		<FormGroup label="Form Group">
			<Input v-model="textModel"/>
		</FormGroup>
		
		<FormGroup label="Form Group Floating" floating>
			<Input v-model="textModel"/>
		</FormGroup>
		<FormGroup label="Form Group Textarea floating" floating>
			<Textarea v-model="textModel"/>
		</FormGroup>
	</div>
</template>