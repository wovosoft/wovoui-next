<template>
	<teleport to="body">
		<div ref="thePopover" role="tooltip" :class="classes" v-bind="$attrs">
			<div data-popper-arrow class="popover-arrow"></div>
			<div class="popover-header" v-if="$slots.header || header">
				<slot name="header">
					{{ header }}
				</slot>
			</div>
			<div class="popover-body">
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import usePopper from "@/composables/usePopper";
import {Modifier, Instance as PopperInstance} from "@popperjs/core/lib/types";
import {PopoverProps} from "@/components/Notifications/index";

const props = withDefaults(defineProps<PopoverProps>(), {
	//https://popper.js.org/docs/v2/constructors/#options
	placement: 'top',
	triggers: 'click'
});

/**
 * Multiple targets will be used in Floating UI implementation
 */
const thePopover = ref<HTMLDivElement>();
const theTarget = ref<Element>();

onMounted(() => {
	if (typeof props.target === 'string') {
		theTarget.value = document.querySelector(props.target);
	} else {
		theTarget.value = props.target;
	}
	
	theTarget.value?.addEventListener(props.triggers, show);
});

onBeforeUnmount(() => {
	hide();
	theTarget.value?.removeEventListener(props.triggers, show);
});

const outsideHandler = (e: PointerEvent) => {
	if (
		!theTarget.value.isSameNode(e.target as Element)
		&& !theTarget.value.contains(e.target as Element)
		&& !thePopover.value.isSameNode(e.target as Element)
		&& !thePopover.value.contains(e.target as Element)
	) {
		hide();
	}
};

const popper = ref<PopperInstance>();

const show = () => {
	isShown.value = true;
	popper.value = usePopper(theTarget.value, thePopover.value, popperOptions());
	setTimeout(() => document.addEventListener('click', outsideHandler), 0)
};

const hide = () => {
	document.removeEventListener('click', outsideHandler);
	isShown.value = false;
	popper.value?.destroy();
};

const dir = ref();
const isShown = ref<boolean>();
const classes = computed(() => [
	"popover",
	"fade",
	{
		show: isShown.value,
		["bs-popover-" + dir.value]: !!dir.value
	}
]);

const popperOptions = () => ({
	placement: ['auto', 'auto-start', 'auto-end'].includes(props.placement) ? 'top' : props.placement,
	modifiers: <Modifier<any, any>[]>[
		{
			name: 'topLogger',
			enabled: true,
			phase: 'main',
			fn({state}) {
				dir.value = popperDirection(state.placement)
			},
		},
		{
			name: 'offset',
			enabled: true,
			options: {
				offset: () => [0, 10],
			},
		},
	],
});

const popperDirection = (placement: string) =>
	(placement.startsWith('auto') || placement.startsWith('top'))
		? "top" : (placement.startsWith('bottom'))
			? "bottom" : (placement.startsWith('right'))
				? "end" : (placement.startsWith('left'))
					? "start" : placement;
</script>