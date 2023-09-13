<script setup lang="ts">

import {Table, Thead, Tbody, Tr, Th, Td} from "@/components/Tables";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
    <div>
        <h3>Default Table</h3>
        <Table>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>First</Th>
                <Th>Last</Th>
                <Th>Handle</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Th scope="row">1</Th>
                <Td>Mark</Td>
                <Td>Otto</Td>
                <Td>@mdo</Td>
            </Tr>
            <Tr>
                <Th scope="row">2</Th>
                <Td>Jacob</Td>
                <Td>Thornton</Td>
                <Td>@fat</Td>
            </Tr>
            <Tr>
                <Th scope="row">3</Th>
                <Td colspan="2">Larry The Bird</Td>
                <Td>@twitter</Td>
            </Tr>
            </Tbody>
        </Table>

        <h3 class="mt-3">Variants</h3>
        <Table v-for="cv in getColorVariants" :variant="cv">
            <Thead>
            <Tr>
                <Th>{{ cv }}</Th>
                <Th>{{ cv }}</Th>
                <Th>{{ cv }}</Th>
                <Th>{{ cv }}</Th>
            </Tr>
            </Thead>
        </Table>

        <h3 class="mt-3">Striped rows</h3>
        <Table striped>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>First</Th>
                <Th>Last</Th>
                <Th>Handle</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Th scope="row">1</Th>
                <Td>Mark</Td>
                <Td>Otto</Td>
                <Td>@mdo</Td>
            </Tr>
            <Tr>
                <Th scope="row">2</Th>
                <Td>Jacob</Td>
                <Td>Thornton</Td>
                <Td>@fat</Td>
            </Tr>
            <Tr>
                <Th scope="row">3</Th>
                <Td colspan="2">Larry The Bird</Td>
                <Td>@twitter</Td>
            </Tr>
            </Tbody>
        </Table>

        <h3 class="mt-3">Striped columns </h3>
        <Table striped="columns">
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>First</Th>
                <Th>Last</Th>
                <Th>Handle</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Th scope="row">1</Th>
                <Td>Mark</Td>
                <Td>Otto</Td>
                <Td>@mdo</Td>
            </Tr>
            <Tr>
                <Th scope="row">2</Th>
                <Td>Jacob</Td>
                <Td>Thornton</Td>
                <Td>@fat</Td>
            </Tr>
            <Tr>
                <Th scope="row">3</Th>
                <Td colspan="2">Larry The Bird</Td>
                <Td>@twitter</Td>
            </Tr>
            </Tbody>
        </Table>

        <h3 class="mt-3">Hoverable rows </h3>
        <Table hover>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th>First</Th>
                <Th>Last</Th>
                <Th>Handle</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Th scope="row">1</Th>
                <Td>Mark</Td>
                <Td>Otto</Td>
                <Td>@mdo</Td>
            </Tr>
            <Tr>
                <Th scope="row">2</Th>
                <Td>Jacob</Td>
                <Td>Thornton</Td>
                <Td>@fat</Td>
            </Tr>
            <Tr>
                <Th scope="row">3</Th>
                <Td colspan="2">Larry The Bird</Td>
                <Td>@twitter</Td>
            </Tr>
            </Tbody>
        </Table>
    </div>
</template>
