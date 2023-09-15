<script setup lang="ts">

import Popper from "@/components/Poppers/Popper.vue";
import Button from "@/components/Buttons/Button.vue";
import DropdownMenu from "@/components/Dropdown/DropdownMenu.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
</script>

<template>
    <div class="container mt-5">
        <Popper tag="div" class="dropdown">
            <template #reference>
                <Button class="dropdown-toggle">Dropdown</Button>
            </template>
            <DropdownMenu>
                <DropdownItem v-for="i in 10">
                    Dropdown Item {{ i }}
                </DropdownItem>
            </DropdownMenu>
        </Popper>
    </div>
</template>