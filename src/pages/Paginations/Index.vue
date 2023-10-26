<script setup lang="ts">

import Pagination from "@/components/Navigation/Pagination.vue";
import PageItem from "@/components/Navigation/PageItem.vue";
</script>

<template>
	<div>
		<h1>Pagination</h1>
		<nav aria-label="Page navigation example">
			<Pagination>
				<PageItem>Previous</PageItem>
				<PageItem v-for="i in 5">{{ i }}</PageItem>
				<PageItem>Next</PageItem>
			</Pagination>
		</nav>
	</div>
</template>