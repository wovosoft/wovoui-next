<script setup lang="ts">

import ButtonGroup from "@/components/Buttons/ButtonGroup.vue";
import Button from "@/components/Buttons/Button.vue";
import ButtonToolbar from "@/components/Buttons/ButtonToolbar.vue";
</script>

<template>
    <div>
        <h3>Basic example </h3>
        <ButtonGroup>
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>

        <h3>Mixed styles</h3>
        <ButtonGroup>
            <Button variant="success">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>

        <h3>Outlined styles</h3>
        <ButtonGroup outline>
            <Button variant="success">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>

        <h3>Button Toolbar</h3>
        <ButtonToolbar>
            <ButtonGroup>
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
            </ButtonGroup>

            <ButtonGroup class="mx-3">
                <Button variant="success">Left</Button>
                <Button variant="danger">Middle</Button>
                <Button variant="primary">Right</Button>
            </ButtonGroup>

            <ButtonGroup outline>
                <Button variant="success">Left</Button>
                <Button variant="danger">Middle</Button>
                <Button variant="primary">Right</Button>
            </ButtonGroup>
        </ButtonToolbar>

        <h3>Sizing (Large Button Group)</h3>
        <ButtonGroup size="lg">
            <Button variant="success">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>

        <h3>Sizing (Small Button Group)</h3>
        <ButtonGroup size="sm">
            <Button variant="success">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>

        <h3>Vertical variation</h3>
        <ButtonGroup vertical>
            <Button variant="success">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>


    </div>
</template>

<style scoped>

</style>