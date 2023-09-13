<script setup lang="ts">
import {CommonTableProps, getTableCommonClasses} from "@/composables/useTables";

const props = withDefaults(defineProps<CommonTableProps>(), {});
const classes = getTableCommonClasses(props);
</script>

<template>
	<td :class="classes">
		<slot></slot>
	</td>
</template>