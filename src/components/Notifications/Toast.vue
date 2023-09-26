<template>
	<teleport :to="to">
		<div
			v-if="shouldGenerate"
			ref="element"
			v-bind="$attrs"
			:class="classes"
			role="alert"
			aria-live="assertive"
			aria-atomic="true">
			<div class="toast-header" v-if="$slots.header || header">
				<slot name="header">
					<strong class="me-auto">{{ header }}</strong>
				</slot>
				<ButtonClose v-if="!noCloseButton" @click="visible = false"/>
			</div>
			<ToastBody v-if="!noBody">
				<slot/>
			</ToastBody>
		</div>
	</teleport>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, ref, watch} from "vue";
import ToastBody from "@/components/Notifications/ToastBody.vue";
import ButtonClose from "@/components/Buttons/ButtonClose.vue";
import {getTransitionDurationFromElement} from "@/composables/useHelpers";
import {ToastProps} from "@/components/Notifications/index";

const props = withDefaults(defineProps<ToastProps>(), {
	fade: true,
	timeout: 3,
});

const emit = defineEmits<{
	"update:show": [value: boolean];
	"update:modelValue": [value: boolean];
	"shown": [value: boolean];
	"hidden": [value: boolean];
	"showing": [value: boolean];
	"hiding": [value: boolean];
}>();

const visible = ref<boolean>(!!props.modelValue);
const showing = ref<boolean>(false);
const shouldGenerate = computed(() => !props.lazy || (visible.value && props.lazy));

//when show is defined
if (props.show != null) {
	visible.value = !!props.show;
}

watch(() => props.show, value => {
	if (value !== visible.value) {
		visible.value = !!value;
	}
});

watch(() => props.modelValue, value => {
	if (value !== visible.value) {
		visible.value = !!value;
	}
});

let timer: number | null = null;

function setTimer() {
	timer = setTimeout(() => {
		visible.value = false;
	}, Number(props.timeout) * 1000);
}

function clearTimer() {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	}
}

onBeforeUnmount(clearTimer);

const element = ref<HTMLElement>();

watch(visible, (value) => {
	if (!element?.value) {
		return;
	}
	
	if (value) {
		//when showing
		// shouldGenerate.value=!props.lazy || (visible.value && props.lazy);
		emit("showing", true);
		showing.value = true;
		setTimeout(() => {
			showing.value = false;
			emit("update:modelValue", true);
			emit("update:show", true);
			emit("shown", true);
			
			//when auto hide is disabled.
			if (Number(props.timeout) <= 0 || !props.timeout) {
				clearTimer();
			} else {
				setTimer();
			}
		}, getTransitionDurationFromElement(element.value));
	} else {
		emit("hiding", true);
		showing.value = true;
		setTimeout(() => {
			showing.value = false;
			emit("update:modelValue", false);
			emit("update:show", false);
			emit("hidden", true);
			clearTimer();
			//when hiding
			// shouldGenerate.value=!props.lazy || (visible.value && props.lazy);
		}, getTransitionDurationFromElement(element.value));
	}
});

defineExpose({
	show: () => (visible.value = true),
	hide: () => (visible.value = false),
	toggle: () => (visible.value = !visible.value),
});

const classes = computed(() => [
	"toast",
	{
		show: visible.value,
		hide: !visible.value,
		showing: showing.value,
		fade: props.fade,
		["bg-" + props.variant]: props.variant,
	},
]);
</script>