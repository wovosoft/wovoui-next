<script setup lang="ts">
import {computed} from "vue";
import {RowProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<RowProps>(), {
  tag: 'div'
});

const alignMap: Record<string,string> = {
  'start': 'items-start',
  'center': 'items-center',
  'end': 'items-end',
  'baseline': 'items-baseline',
  'stretch': 'items-stretch'
};

const justifyMap: Record<string,string> = {
  'start': 'justify-start',
  'center': 'justify-center',
  'end': 'justify-end',
  'around': 'justify-around',
  'between': 'justify-between',
  'evenly': 'justify-evenly'
};

function gapClass(prefix: string | null, value: number | undefined) {
  if (value === undefined || value === null) return null;
  const cls = `gap-${value}`;
  return prefix ? `${prefix}:${cls}` : cls;
}

const attrs = computed(() => {
  const classes: Array<any> = ['flex', 'flex-wrap', '-mx-2'];

  if (props.align) {
    const mapped = alignMap[props.align as string];
    if (mapped) classes.push(mapped);
  }

  if (props.alignContent) {
    const mapped = justifyMap[props.alignContent as string];
    if (mapped) classes.push(mapped);
  }

  // gutters / gaps
  const g = gapClass(null, props.g as any);
  const gSm = gapClass('sm', props.gSm as any);
  const gMd = gapClass('md', props.gMd as any);
  const gLg = gapClass('lg', props.gLg as any);
  const gXl = gapClass('xl', props.gXl as any);
  const gXxl = gapClass('2xl', props.gXxl as any);

  [g, gSm, gMd, gLg, gXl, gXxl].forEach((c) => { if (c) classes.push(c); });

  // individual axis gaps
  if (props.gx) classes.push(`gap-x-${props.gx}`);
  if (props.gy) classes.push(`gap-y-${props.gy}`);

  return { class: classes };
});
</script>

<template>
  <component :is="tag" v-bind="attrs">
    <slot></slot>
  </component>
</template>
