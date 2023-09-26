<script setup lang="ts">
import {UsersFew} from "@/pages/Tables/users";
import {Datatable} from "@/components/Tables";
import {DatatableFieldType} from "@/components/Tables";

const fields = [
    {key: 'id'},
    {key: 'title'},
    {key: 'completed'},
];

const stringFields = [
    'id',
    'title',
    'completed'
];

const stringObjectFields = [
    'id',
    {key: 'title'},
    'completed'
];

const fieldsWithFormatter: DatatableFieldType[] | string[] = [
    {key: 'id'},
    {key: 'title'},
    {key: 'completed', formatter: (value: any, key: string) => 'Formatted : ' + value[key]},
];
</script>

<template>
    <div>
        <h3>Basic Datatable</h3>
        <Datatable :fields="fields" :items="UsersFew"/>

        <h3>Small Datatable</h3>
        <Datatable small :fields="fields" :items="UsersFew"/>

        <h3>Small-bordered Datatable</h3>
        <Datatable small bordered :fields="fields" :items="UsersFew"/>

        <h3>Small-bordered-head variant Datatable</h3>
        <Datatable
            small
            bordered
            hover
            :fields="fields"
            :items="UsersFew"
            head-variant="dark"
        />

        <h3>string[] fields Datatable</h3>
        <Datatable
            small
            bordered
            hover
            :fields="stringFields"
            :items="UsersFew"
            head-variant="dark"
        />

        <h3>string[]|fieldType fields Datatable</h3>
        <Datatable
            small
            bordered
            hover
            :fields="stringObjectFields"
            :items="UsersFew"
            head-variant="dark"
        />

        <h3>with formatter fields Datatable</h3>
        <Datatable
            small
            bordered
            hover
            :fields="fieldsWithFormatter"
            :items="UsersFew"
            head-variant="dark"
        />
    </div>
</template>