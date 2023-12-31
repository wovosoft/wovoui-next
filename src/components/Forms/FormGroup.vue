<template>
	<component :is="tag" :class="classes" role="group">
		<template v-if="floating && !horizontal">
			<slot></slot>
			<FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
		</template>
		
		<FormLabel
			v-if="label || $slots.label"
			:horizontal="horizontal"
			:sm="labelProps?.['sm']"
			:md="labelProps?.['md']"
			:lg="labelProps?.['lg']"
			:xl="labelProps?.['xl']"
			:for="labelFor">
			<slot name="label">
				{{ label }}
			</slot>
		</FormLabel>
		
		<template v-if="!floating && !horizontal">
			<slot></slot>
			<FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
		</template>
		
		<div v-else-if="horizontal" :class="contentClasses">
			<slot></slot>
			<FeedbackMessages :invalid="invalidFeedback" :valid="validFeedback"/>
		</div>
	</component>
</template>


<script lang="ts" setup>
import {computed, provide} from "vue";
import FormLabel from "@/components/Forms/FormLabel.vue";
import FeedbackMessages from "@/components/Forms/FeedbackMessages.vue";
import {FormGroupProps} from "@/components/Forms/index";

const {validFeedback, invalidFeedback, ...props} = withDefaults(defineProps<FormGroupProps>(), {
	tag: "div"
});

const classes = computed(() => ([
	"form-group", //does nothing, added so that can be queried by css/js
	{
		"mb-3": !props.noMarginBottom,
		"row": props.horizontal,
		"form-floating": props.floating
	}
]));

const contentClasses = computed(() => props.horizontal ? ({
	["col-sm-" + props.contentProps?.sm]: !!props.contentProps?.sm,
	["col-md-" + props.contentProps?.md]: !!props.contentProps?.md,
	["col-lg-" + props.contentProps?.lg]: !!props.contentProps?.lg,
	["col-xl-" + props.contentProps?.xl]: !!props.contentProps?.xl,
}) : null);

/**
 * Form Group's floating labels requires it's internal Input
 * element to have placeholder attribute. So, we can instruct
 * its child Input element about the floating label's existence
 * https://getbootstrap.com/docs/5.3/forms/floating-labels/#example
 */

provide<boolean,string>('hasFloatingLabel', !!props.floating);
</script>

