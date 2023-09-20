<script setup lang="ts">
import Autocomplete from "@/components/Forms/Autocomplete.vue";
import {ref} from "vue";

const fakeOptions = Array.from({length: 50}, (value, index) => 'Option ' + (index + 1));
const autocompleteText = ref<string>(null);
</script>

<template>
	<div>
		<h3>Autocomplete</h3>
		<Autocomplete
			:options="fakeOptions"
			v-model="autocompleteText"
		/>
		{{ autocompleteText }}
	</div>
</template>