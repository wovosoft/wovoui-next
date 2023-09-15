<script setup lang="ts">

import Dropdown from "@/components/Dropdown/Dropdown.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
import Button from "@/components/Buttons/Button.vue";
</script>

<template>
    <div>
        <h3>Example</h3>
        <Dropdown text="Dropdown">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i}}
            </DropdownItem>
        </Dropdown>
        <br/>
        <br/>
        <div class="dropdown2">
            <button class="btn btn-secondary dropdown-toggle"   data-bs-toggle="dropdown" type="button" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>
</template>
