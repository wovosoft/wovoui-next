<script setup lang="ts">
import {Button} from "@/components/Buttons";
import {DropdownMenu} from "@/components/Dropdowns";
import {createDropdown, DropdownProps} from "@/composables/useDropdowns";
import {computed, defineComponent, getCurrentInstance, h, onMounted, ref} from "vue";

const props = withDefaults(defineProps<DropdownProps>(), {
	tag: "div",
	menuTag: "ul",
	toggleTag: "button",
	variant: "secondary",
	splitVariant: "secondary",
	align: "start",
	asGroup: true
});

const classes = computed(() => {
	return [
		{
			"dropdown-center": props.centered,
			"dropdown": !props.split && !props.centered && !props.dropupCentered,
			"btn-group": props.split || props.asGroup,
			"dropup": props.dropup,
			"dropstart": props.dropstart,
			"dropend": props.dropend,
			"dropup-center": props.dropupCentered
		}
	];
});

const placement = computed(() => {
	if (props.dropend) {
		return "right-start";
	}
	if (props.dropstart) {
		return "left-start";
	}
	
	if (props.dropup) {
		return "top-start";
	}
	
	return "bottom-start";
});

const dd = ref();
const toggle = ref<InstanceType<typeof Button>>();
const menu = ref<InstanceType<typeof DropdownMenu>>();


onMounted(() => {
	dd.value = createDropdown(
		getCurrentInstance()?.vnode?.el as HTMLElement,
		toggle.value?.$el,
		menu.value.$el,
		{
			placement: placement.value
		}
	);
});

const ToggleButton = defineComponent({
	setup(toggleProps, {slots}) {
		return () => h(
			Button,
			{
				tag: props.tag,
				block: props.block,
				disabled: props.disabled,
				variant: props.variant,
				size: props.size,
				class: [
					"dropdown-toggle",
					{'dropdown-toggle-split': props.split}
				],
			},
			slots?.default?.()
		)
	}
});

const TheButton = defineComponent({
	setup(pt, {slots}) {
		return () => h(Button, {
			disabled: props.disabled,
			variant: props.variant,
			block: props.block,
			size: props.size,
		}, slots?.default?.())
	}
});
</script>

<template>
	<component
		:is="tag"
		:class="classes"
		@keydown.down="()=>dd.onKeydownDown()"
		@keydown.up="()=>dd.onKeydownUp()"
		@keydown.esc="()=>dd.hide()">
		<!--For dropstart when split it should be at start position-->
		
		<Button v-if="split && !dropstart">
			<slot name="button-content">
				{{ text }}
			</slot>
		</Button>
		
		<ToggleButton
			ref="toggle"
			@click="()=>dd?.toggle()">
			<slot name="button-content" v-if="!split">
				{{ text }}
			</slot>
		</ToggleButton>
		
		<DropdownMenu ref="menu" :dark="menuDark">
			<slot/>
		</DropdownMenu>
		
		<TheButton v-if="split && dropstart">
			<slot name="button-content">
				{{ text }}
			</slot>
		</TheButton>
	
	</component>
</template>
