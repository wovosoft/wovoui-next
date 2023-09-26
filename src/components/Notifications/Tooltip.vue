<template>
	<teleport to="body" v-if="shouldShow">
		<div :class="classes" ref="element" role="tooltip">
			<div data-popper-arrow class="tooltip-arrow"></div>
			<div class="tooltip-inner" ref="inner">
				<slot>{{ content }}</slot>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onBeforeUpdate, onMounted, ref} from "vue";
import {createPopper, Instance} from "@popperjs/core";
import {BasePlacement} from "@popperjs/core/lib/enums";
import {Modifier, OptionsGeneric} from "@popperjs/core/lib/types";
import {TooltipProps} from "@/components/Notifications/index";

const props = withDefaults(defineProps<TooltipProps>(), {
	placement: 'top',
	opensOn: 'mouseenter',
	closesOn: 'mouseleave'
});

const element = ref<HTMLElement>();
const shouldShow = ref<boolean>(false);

const popper = ref<Instance | null>();
const tooltipDir = ref<BasePlacement>();

/**
 * Runs on nextTick, because this should run after both elements are available.
 * Probability: Re-consideration should be made about keeping popper js alive
 * after it is unmounted
 * eg; if(popper.value){popper.value.update()} else createPopper(...)
 * But point to be noted, this approach will consume memory for the popper instance.
 * @param isShowing
 */
function initializePopper(isShowing: boolean) {
	const target = targetElement();
	if (isShowing && target && element.value) {
		popper.value = createPopper(
			target,
			element.value,
			popperOptions()
		);
	}
	
}

const popperOptions = (): Partial<OptionsGeneric<Partial<Modifier<any, any>>>> => ({
	placement: props.placement,
	modifiers: [
		{
			name: 'topLogger',
			enabled: true,
			phase: 'main',
			fn({state}) {
				tooltipDir.value = (state.placement.startsWith('right') ? 'end'
					: state.placement.startsWith('left') ? 'start' : state.placement.split('-')[0]) as BasePlacement;
			},
		}
	],
});

const classes = computed(() => {
	return [
		"tooltip", "fade", "bs-tooltip-" + tooltipDir.value, {
			"show": shouldShow.value,
		}
	]
});

function targetElement() {
	return document?.getElementById(props.target);
}

function destroyPopper() {
	popper.value?.destroy();
	popper.value = null;
}

//hooks
onMounted(() => {
	const target = targetElement();
	if (target) {
		target.addEventListener(props.opensOn, show);
		target.addEventListener(props.closesOn, hide);
	}
});

onBeforeUpdate(() => {
	if (shouldShow.value) {
		nextTick(() => initializePopper(true))
	}
});

onBeforeUnmount(() => {
	const target = targetElement();
	if (target) {
		target.removeEventListener(props.opensOn, show);
		target.removeEventListener(props.closesOn, hide);
	}
	destroyPopper();
});

const show = () => shouldShow.value = true;
const hide = () => shouldShow.value = false;
const toggle = () => shouldShow.value = !shouldShow.value;

defineExpose({show, hide, toggle});
</script>