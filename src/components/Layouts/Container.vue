<script setup lang="ts">
import {computed} from "vue";
import {ContainerProps} from "@/components/Layouts/index";

const props = withDefaults(defineProps<ContainerProps>(), {
  tag: 'div',
  fluid: false
});

const sizeMap: Record<string, string> = {
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  'xxl': 'max-w-2xl'
};

const attrs = computed(() => {
  const classes: Array<any> = ['px-4'];

  if (props.fluid) {
    classes.push('w-full');
  } else if (props.size) {
    if (Array.isArray(props.size)) {
      props.size.forEach((s: any) => {
        const mapped = sizeMap[s];
        if (mapped) classes.push(mapped, 'mx-auto');
      });
    } else {
      const mapped = sizeMap[props.size as string];
      if (mapped) classes.push(mapped, 'mx-auto');
      else classes.push('container', 'mx-auto');
    }
  } else {
    classes.push('container', 'mx-auto');
  }

  return {
    class: classes
  };
});
</script>

<template>
  <component :is="tag" v-bind="attrs">
    <slot></slot>
  </component>
</template>
