<script setup lang="ts">

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb.vue";
import BreadcrumbItem from "@/components/Breadcrumbs/BreadcrumbItem.vue";

const items = [
	{text: 'One', href: '#'},
	{text: 'Two', href: '#'},
	{text: 'Three', href: '#', active: true},
]
</script>

<template>
	<div>
		<h1>Breadcrumbs</h1>
		<Breadcrumb>
			<BreadcrumbItem>One</BreadcrumbItem>
			<BreadcrumbItem>Two</BreadcrumbItem>
			<BreadcrumbItem active>Three</BreadcrumbItem>
		</Breadcrumb>
		
		<h1>Dividers</h1>
		<Breadcrumb divider=">">
			<BreadcrumbItem>One</BreadcrumbItem>
			<BreadcrumbItem>Two</BreadcrumbItem>
			<BreadcrumbItem active>Three</BreadcrumbItem>
		</Breadcrumb>
		
		<h1>Items</h1>
		<Breadcrumb :items="items"/>
	</div>
</template>