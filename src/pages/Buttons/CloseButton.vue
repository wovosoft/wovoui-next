<script setup lang="ts">

import ButtonClose from "@/components/Buttons/ButtonClose.vue";
</script>

<template>
    <div>
        <h3>Example</h3>
        <ButtonClose/>

        <h3>Disabled state</h3>
        <ButtonClose disabled/>

        <h3>Dark variant</h3>
        <div data-bs-theme="dark">
            <ButtonClose disabled/>
        </div>
    </div>
</template>
