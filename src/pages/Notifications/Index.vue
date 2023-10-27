<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import Popover from "@/components/Notifications/Popover.vue";
import Toast from "@/components/Notifications/Toast.vue";
import ToastContainer from "@/components/Notifications/ToastContainer.vue";
import Tooltip from "@/components/Notifications/Tooltip.vue";
</script>

<template>
    <h2 class="mt-3">Example</h2>
    <Button id="p1">Popover Default</Button>
    <Popover target="#p1">
        Hello Popover
    </Popover>

    <h2 class="mt-3">Four Directions</h2>
    <template v-for="placement in ['left','right','top','bottom']">
        <Button :id="placement" class="me-3">Popover {{placement}}</Button>
        <Popover :target="'#'+placement" :placement="placement">
            Hello Popover
        </Popover>
    </template>

    <h1 class="mt-3">Default Toast</h1>
    <Button @click="$refs.toast_def.toggle()">Toggle Default Toast</Button>
    <ToastContainer placement="top-end" class="p-2">
        <Toast ref="toast_def" header="Toast Header">
            <p>Toast Body</p>
        </Toast>
    </ToastContainer>

    <h1 class="mt-3">Tooltip</h1>
    <Button id="tooltip_target">Click Me</Button>
    <Tooltip target="tooltip_target">Tooltip Content</Tooltip>
</template>