<script setup lang="ts">
import {routes} from "@/routes";
import {Container, Row, Col} from "@/components/Layouts";
import ListGroup from "@/components/ListGroups/ListGroup.vue";

</script>

<template>
	<Container fluid>
		<Row class="row">
			<Col :md="3" :sm="12">
				<ListGroup>
					<router-link v-for="r in routes" :to="r" class="list-group-item list-group-item-action">
						{{ r.meta?.['title'] }}
					</router-link>
				</ListGroup>
			</Col>
			<Col>
				<router-view></router-view>
			</Col>
		</Row>
	</Container>
</template>
