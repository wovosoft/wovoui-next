<script setup lang="ts">
import {AlertProps} from "@/composables/useAlerts";
import {computed, ref,} from "vue";
import ButtonClose from "@/components/Buttons/ButtonClose.vue";
import {getTransitionDurationFromElement} from "@/composables/useHelpers";

const props = withDefaults(defineProps<AlertProps>(), {
	tag: 'div',
	variant: 'primary',
	timeout: 3,
	show: false
});

const CLASS_NAME_FADE = 'fade'
const CLASS_NAME_SHOW = 'show'

const emit = defineEmits<{
	close: [value: Event];
	closed: [value: Event];
}>();


const isShown = ref<boolean>(props.show);

/**
 * If is dismissible and shown then it should render,
 * else by default it should render
 */
const shouldRender = ref<boolean>(props.dismissible ? props.show : true);

/**
 * @link https://github.com/twbs/bootstrap/blob/bde23ae6612b71376e6cd906679425bd58d8db72/js/src/alert.js#L37
 * 1. Trigger 'close' event
 * 2. If event is prevented, return
 * 3. Remove class 'show'
 * 4. Check if the alert is animated, (has fade class)
 *      a) if not animated remove the element directly from dom, shouldRender = false
 *      b) else after transition is finished, remove the element from dom, shouldRender = true
 * @param e
 */
const close = (e: Event & { target: Element }) => {
	emit('close', e);
	
	if (e.defaultPrevented) {
		return;
	}
	
	//remove class 'show'
	isShown.value = false;
	
	const alertElement = e.target.closest('.alert');
	const isAnimated = alertElement?.classList.contains(CLASS_NAME_FADE);
	
	if (!isAnimated) {
		shouldRender.value = false;
		emit('closed', e);
	} else if (alertElement) {
		const durationPadding = 5;
		const emulatedDuration = getTransitionDurationFromElement(alertElement) + durationPadding;
		
		setTimeout(() => {
			shouldRender.value = false;
			emit('closed', e);
		}, emulatedDuration);
	}
};

// onMounted(() => {
// 	if (shouldRender.value && props.dismissible) {
// 		//@ts-ignore
// 		const target = getCurrentInstance()?.ctx?.$el as Element
// 		if (props.timeout) {
// 			setTimeout(() => {
// 				close({target: target} as Event & { target: Element })
// 			}, props.timeout * 1000);
// 		}
// 	}
// });

defineExpose({
	close
});

const attrs = computed(() => ({
	role: 'alert',
	class: [
		"alert",
		{
			"d-flex": props.dismissible,
			["alert-" + props.variant]: props.variant,
			"alert-dismissible": props.dismissible,
			"fade": props.dismissible,
			[CLASS_NAME_SHOW]: isShown.value
		}
	]
}));
</script>

<template>
	<component :is="tag" v-bind="attrs" v-if="shouldRender">
		<slot></slot>
		<ButtonClose
			v-if="props.dismissible"
			@click="close"
		/>
	</component>
</template>






