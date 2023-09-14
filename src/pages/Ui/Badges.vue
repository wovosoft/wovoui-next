<script setup lang="ts">

import Badge from "@/components/Ui/Badge.vue";
import Button from "@/components/Buttons/Button.vue";
import {getRectangularPositions} from "@/composables/useResponsive";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
    <div>
        <h1>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h1>
        <h2>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h2>
        <h3>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h3>
        <h4>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h4>
        <h5>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h5>
        <h6>
            Example heading
            <Badge bg-variant="primary">New</Badge>
        </h6>

        <h3>In Buttons</h3>
        <Button variant="primary">
            Notifications
            <Badge text-bg-variant="dark">4</Badge>
        </Button>

        <h3 class="mt-3">Positioned</h3>
        <Button variant="primary" class="position-relative me-5" v-for="bs in getRectangularPositions">
            {{ bs }}
            <Badge :position="bs" pill bg-variant="danger">
                99+
                <span class="visually-hidden">unread messages</span>
            </Badge>
        </Button>

        <h3 class="mt-3">Background colors </h3>
        <Badge v-for="cv in getColorVariants" :text-bg-variant="cv" class="me-3">
            {{ cv }}
        </Badge>

        <h3 class="mt-3">Pill </h3>
        <Badge v-for="cv in getColorVariants" :text-bg-variant="cv" pill class="me-3">
            {{ cv }}
        </Badge>
    </div>
</template>