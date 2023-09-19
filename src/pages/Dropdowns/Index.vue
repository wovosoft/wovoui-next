<script setup lang="ts">

import Dropdown from "@/components/Dropdowns/Dropdown.vue";
import DropdownItem from "@/components/Dropdowns/DropdownItem.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
import {ref} from "vue";
const model=ref<boolean>(false);
</script>

<template>
    <div>
        <h3>Single button </h3>
        {{ model}}
        <Dropdown text="Dropdown" v-model="model">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>
        <Dropdown text="Dropdown" v-model="model">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>

        <h3>Variants</h3>
        <Dropdown text="Dropdown" v-for="cv in getColorVariants" :variant="cv" class="me-3 mb-3">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>

        <h3>Split button </h3>
        <Dropdown text="Dropdown" split>
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>

        <h3>Sizing </h3>
        <Dropdown text="Dropdown" size="sm" class="me-3">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>
        <Dropdown text="Dropdown" size="lg">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>

        <h3>Dark Dropdown</h3>
        <Dropdown text="Dropdown" menu-dark>
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>

        <h2>Directions</h2>

        <template v-for="dir in ['top','bottom','start','end']">
            <template v-for="align in ['start','end','center']">
                <template v-for="splitted in [true,false]">
                    <div>
                        <Dropdown :text="`${dir}-${align}-${splitted ? 'split' : 'single'}`"
                                  :split="splitted"
                                  :dir="dir"
                                  :align="align" class="me-3 mb-3">
                            <DropdownItem v-for="i in 5">
                                Dropdown Item {{ i }}
                            </DropdownItem>
                        </Dropdown>
                    </div>
                </template>
            </template>
        </template>

        <h4>Dropstart</h4>
        <Dropdown text="Dropdown" class="me-3">
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>
        <Dropdown text="Dropdown" split>
            <DropdownItem v-for="i in 10">
                Dropdown Item {{ i }}
            </DropdownItem>
        </Dropdown>


        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
</template>



















