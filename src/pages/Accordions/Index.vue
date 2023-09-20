<script setup lang="ts">

import Button from "@/components/Buttons/Button.vue";
import Collapse from "@/components/Accordions/Collapse.vue";
import Card from "@/components/Cards/Card.vue";
import {ref} from "vue";
import vCollapse from "@/directives/vCollapse";

const isShown = ref<boolean>(false)
const isShownHorizontal = ref<boolean>(false)
</script>

<template>
    <div>
        <h3>Collapse : {{isShown}}</h3>
        <Button @click="$refs.clps.toggle()" class="me-3">Toggle Collapse</Button>
        <Button @click="isShown=!isShown" class="me-3">Toggle Collapse by Model</Button>

        <Collapse ref="clps" v-model="isShown">
            <Card>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
            </Card>
        </Collapse>

        <br/>
        <br/>
        <Button @click="isShownHorizontal=!isShownHorizontal" class="me-3">Toggle Collapse by Model</Button>

        <Collapse ref="collapse_horizontal" v-model="isShownHorizontal" horizontal width="500px">
            <Card>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                the
                user activates the relevant trigger.
            </Card>
        </Collapse>
    </div>
</template>