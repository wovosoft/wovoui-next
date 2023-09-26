<script setup lang="ts">
import {CommonTableProps, getTableCommonClasses} from "@/components/Tables/index";

const props = withDefaults(defineProps<CommonTableProps>(), {});
const classes = getTableCommonClasses(props);
</script>

<template>
	<tbody :class="classes">
	<slot></slot>
	</tbody>
</template>