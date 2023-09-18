<script setup lang="ts">

import Dropdown from "@/components/Dropdowns/Dropdown.vue";
import DropdownItem from "@/components/Dropdowns/DropdownItem.vue";
import {Col, Row} from "@/components/Layouts/index";
</script>

<template>
	<Row>
		<Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3>Single Button</h3>
			<Dropdown text="Dropdown">
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
		<Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3>Split Button</h3>
			<Dropdown text="Dropdown" split>
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
		<Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3>Sizing (lg)</h3>
			<Dropdown text="Dropdown" size="lg">
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
		
		<Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3>Sizing (sm)</h3>
			<Dropdown text="Dropdown" size="sm">
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
		<Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3>Dark dropdowns </h3>
			<Dropdown text="Dropdown" menu-dark>
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
        <Col style="margin-bottom: 50px;" :md="4" :sm="12">
			<h3> Centered dropdown Big Title than menu </h3>
			<Dropdown text="Dropdown" menu-dark centered>
				<DropdownItem v-for="i in 10">
					Dropdown Item {{ i }}
				</DropdownItem>
			</Dropdown>
		</Col>
	</Row>
</template>
