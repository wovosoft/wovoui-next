<script setup lang="ts">
import {computed} from "vue";
import {isBoolean, isTrue} from "@/composables/useHelpers";
import {ColProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<ColProps>(), {
  tag: 'div'
});

function pct(n: number) { return `${(n / 12) * 100}%`; }

function responsiveWidthClasses(prefix: string | null, value: any) {
  if (value === undefined || value === null) return [];
  // if boolean true -> let it be flex-auto at breakpoint
  if (value === true) {
    return prefix ? [`${prefix}:flex-1`, `${prefix}:w-full`] : ['flex-1', 'w-full'];
  }
  // numeric -> compute percentage
  const num = Number(value);
  if (!isNaN(num) && num >= 1 && num <= 12) {
    const p = pct(num);
    if (prefix) {
      return [`${prefix}:flex-[0_0_${p}]`, `${prefix}:max-w-[${p}]`];
    }
    return [`flex-[0_0_${p}]`, `max-w-[${p}]`];
  }
  return [];
}

const attrs = computed(() => {
  const classes: Array<any> = ['px-2', 'box-border'];

  // default column behaviour
  const baseCols = props.cols ?? null;
  if (baseCols) {
    classes.push(...responsiveWidthClasses(null, baseCols));
  } else if (!(props.sm || props.md || props.lg || props.xl || props.cols)) {
    // no sizing provided -> full width flex child
    classes.push('w-full', 'flex-auto');
  }

  // responsive column sizes
  classes.push(...responsiveWidthClasses('sm', props.sm));
  classes.push(...responsiveWidthClasses('md', props.md));
  classes.push(...responsiveWidthClasses('lg', props.lg));
  classes.push(...responsiveWidthClasses('xl', props.xl));

  // alignment
  if (props.align) classes.push(`self-${props.align}`);
  if (props.justifyContent) classes.push(`justify-${props.justifyContent}`);

  // order
  if (props.order !== undefined && props.order !== null) classes.push(`order-${props.order}`);

  // offsets -> margin-left
  if (props.offsetSm) classes.push(`sm:ml-[${pct(Number(props.offsetSm))}]`);
  if (props.offsetMd) classes.push(`md:ml-[${pct(Number(props.offsetMd))}]`);
  if (props.offsetLg) classes.push(`lg:ml-[${pct(Number(props.offsetLg))}]`);
  if (props.offsetXl) classes.push(`xl:ml-[${pct(Number(props.offsetXl))}]`);

  return { class: classes };
});
</script>

<template>
  <component :is="tag" v-bind="attrs">
    <slot></slot>
  </component>
</template>
