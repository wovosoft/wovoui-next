<template>
	<component :is="tag" class="offcanvas-header">
		<OffcanvasTitle v-if="$slots.title || title">
			<slot name="title">
				{{ title }}
			</slot>
		</OffcanvasTitle>
		<slot></slot>
		<ButtonClose
			v-if="showClose"
			:white="btnCloseWhite"
			@click="$emit('update:modelValue',false)"
		/>
	</component>
</template>

<script lang="ts" setup>
import ButtonClose from "@/components/Buttons/ButtonClose.vue";
import OffcanvasTitle from "@/components/Sidebars/OffcanvasTitle.vue";
import {OffcanvasProps} from "@/components/Sidebars/index";

withDefaults(defineProps<OffcanvasProps>(), {
	tag: 'header',
	showClose: true,
});

defineEmits<{
	"update:modelValue": [value: boolean]
}>();
</script>