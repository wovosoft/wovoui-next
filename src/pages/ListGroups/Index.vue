<script setup lang="ts">

import ListGroup from "@/components/ListGroups/ListGroup.vue";
import ListGroupItem from "@/components/ListGroups/ListGroupItem.vue";
import {getScreenSizes} from "@/composables/useResponsive";
</script>

<template>
    <div>
        <h3>Default Example</h3>
        <ListGroup>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Active items</h3>
        <ListGroup>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem active>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Disabled items</h3>
        <ListGroup>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem disabled>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Flush items</h3>
        <ListGroup flush>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem disabled>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Numbered items</h3>
        <ListGroup numbered>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem disabled>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Horizontal items</h3>
        <ListGroup horizontal>
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <ListGroup v-for="ss in getScreenSizes" :horizontal="ss">
            <ListGroupItem>{{ ss }}</ListGroupItem>
            <ListGroupItem>{{ ss }}</ListGroupItem>
            <ListGroupItem>{{ ss }}</ListGroupItem>
            <ListGroupItem>{{ ss }}</ListGroupItem>
        </ListGroup>


        <h3>List Group with div element</h3>
        <p>
            When list group's wrapper element is div, and items doesn't have tag=a or
            href props set, list group item will be rendered as div element.
        </p>
        <ListGroup tag="div">
            <ListGroupItem>One</ListGroupItem>
            <ListGroupItem>Two</ListGroupItem>
            <ListGroupItem>Three</ListGroupItem>
        </ListGroup>

        <h3>Items with href</h3>
        <ListGroup>
            <ListGroupItem href="#">One</ListGroupItem>
            <ListGroupItem href="#">Two</ListGroupItem>
            <ListGroupItem href="#">Three</ListGroupItem>
        </ListGroup>
    </div>
</template>