<script setup lang="ts">
import {CollapseProps} from "@/composables/useAccordions";
import {computed, getCurrentInstance, getCurrentScope, onMounted, reactive, ref} from "vue";

const props = withDefaults(defineProps<CollapseProps>(), {
	tag: 'div'
});

const emit = defineEmits<{
	show: [value: any];
	showing: [value: any];
	shown: [value: any];
	hide: [value: any];
	hiding: [value: any];
	hidden: [value: any];
}>();


const states = reactive({
	collapse: true,
	collapsing: false,
	show: props.show,
	shown: props.show
});

const classes = computed(() => [
	{
		'collapse': states.collapse,
		'collapse-horizontal': props.horizontal,
		'collapsing': states.collapsing,
		'show': states.show,
	}
]);

const theRoot = ref();

const show = () => {
	if (states.collapsing || states.shown) {
		return;
	}
	
	//trigger show when operation is about to be started
	emit('show', true);
	
	//https://github.com/twbs/bootstrap/blob/d9baa2f3a9707e00c6773f637a9df7b3d1795aad/js/src/collapse.js#L140C56-L140C56
	
	const dimensionAttribute = getDimensionAttribute();
	
	states.collapse = false;
	states.collapsing = true;
	emit('showing', true);      //transition started
	
	console.log(dimensionAttribute)
	
	theRoot.value.style[dimensionAttribute] = 0;
	
	setTimeout(() => {
		states.collapsing = false;
		states.show = true;
		states.collapse = true;
		states.shown = true    //transition completed
	}, 350);
};

const hide = () => {
	if (states.collapsing || !states.shown) {
		return;
	}
	
	emit('hide', true);
	states.collapsing = true;
	emit('hiding', true);
	
	setTimeout(() => {
		states.shown = true;
		emit('hidden', true);
	}, 350);
};

const toggle = () => {
	if (states.shown) {
		hide();
	} else {
		show();
	}
};

defineExpose({
	show, hide, toggle
});

const getDimension = () => {
	return theRoot.value.getBoundingClientRect()[getDimensionAttribute()] + 'px';
};
const getDimensionAttribute = () => props.horizontal ? 'width' : 'height';
</script>

<template>
	<component :is="tag" :class="classes" ref="theRoot">
		<slot></slot>
	</component>
</template>
