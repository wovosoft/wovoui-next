<script setup lang="ts">
import ProgressBar from "@/components/Indicators/ProgressBar.vue";
import {ProgressProps} from "@/components/Indicators/index";

const props = withDefaults(defineProps<ProgressProps>(), {
	tag: 'div',
	barTag: 'div',
	value: 0,
	min: 0,
	max: 100,
	showValue: true,
});
</script>

<template>
	<component :is="tag" class="progress" role="progressbar" :style="{height: props.height}">
		<slot :value="value">
			<ProgressBar
				:tag="barTag"
				:value="value"
				:min="min"
				:max="max"
				:show-value="showValue"
				:variant="variant"
				:striped="striped" :animated="animated">
				<slot v-if="$slots.bar" name="bar" :value="value"/>
			</ProgressBar>
		</slot>
	</component>
</template>