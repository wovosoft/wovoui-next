<template>
	<teleport v-if="container" :to="container">
		<component :is="tag" :class="classes" v-bind="$attrs">
			<slot></slot>
		</component>
	</teleport>
	<component v-else :is="tag" :class="classes" v-bind="$attrs">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {ToastContainerProps} from "@/components/Notifications/index";

const props = withDefaults(defineProps<ToastContainerProps>(), {
	tag: 'div',
});

const classes = computed(() => ([
	"toast-container", {
		"top-0 start-0": props.placement === 'top-start',
		"top-0 start-50 translate-middle-x": props.placement === 'top-center',
		"top-0 end-0": props.placement === 'top-end',
		"top-50 start-0 translate-middle-y": props.placement === 'middle-start',
		"top-50 start-50 translate-middle": props.placement === 'middle-center',
		"top-50 end-0 translate-middle-y": props.placement === 'middle-end',
		"bottom-0 start-0": props.placement === 'bottom-start',
		"bottom-0 start-50 translate-middle-x": props.placement === 'bottom-center',
		"bottom-0 end-0": props.placement === 'bottom-end',
	}
]));
</script>