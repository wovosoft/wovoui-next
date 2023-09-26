<script setup lang="ts">
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td} from "@/components/Tables";
import {DatatableFieldType, DatatableItemType, DatatableProps} from "@/components/Tables/index";
import {startCase} from "lodash";

const {
    items,
    fields,
    headVariant,
    bodyVariant,
    footVariant,
    headClass,
    bodyClass,
    footClass,
    ...propsForTable
} = withDefaults(defineProps<DatatableProps>(), {});

const getLabel = (field: DatatableFieldType | string): string => {
    if (typeof field === 'string') {
        return startCase(field);
    }

    return field?.label || startCase(field.key);
};

const getKey = (field: DatatableFieldType | string): string => {
    if (typeof field === 'string') {
        return field;
    }

    return field.key;
};

const getValue = (row: DatatableItemType, field: DatatableFieldType | string): any => {
    const key = getKey(field);

    if (typeof field === "object" && typeof field.formatter === "function") {
        return field.formatter(row, key);
    }

    if (!Array.isArray(row)) {
        return row?.[key];
    }
    return row;
};
</script>

<template>
    <Table v-bind="propsForTable">
        <Thead :variant="headVariant" :class="headClass">
        <Tr>
            <Th v-for="(field,field_key) in fields" :key="field_key">
                <slot :name="`head(${getKey(field)})`"
                      :column="getKey(field)"
                      :field="field"
                      :index="field_key"
                      :label="getLabel(field)">
                    {{ getLabel(field) }}
                </slot>
            </Th>
        </Tr>
        </Thead>
        <Tbody :variant="bodyVariant" :class="bodyClass">
        <Tr v-for="(row,row_key) in items" :key="row_key">
            <Td v-for="(field,field_key) in fields" :key="field_key">
                <slot :name="`cell(${getKey(field)})`"
                      :item="row"
                      :index="field_key"
                      :field="field"
                      :value="getValue(row,field)">
                    {{ getValue(row, field) }}
                </slot>
            </Td>
        </Tr>
        </Tbody>
        <Tfoot v-if="$slots.footer" :variant="footVariant" :class="footClass">
        <slot name="footer"></slot>
        </Tfoot>
    </Table>
</template>
