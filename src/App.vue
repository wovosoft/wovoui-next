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
					<template v-for="r in routes">
						<template v-if="r.children">
							<div class="list-group-item list-group-item-action">
								{{ r.meta?.['title'] }}
								<ul>
									<li v-for="child in r.children">
										<router-link :to="child">
											{{ child.meta?.['title'] }}
										</router-link>
									</li>
								</ul>
							</div>
						</template>
						<router-link v-else :to="r" class="list-group-item list-group-item-action">
							{{ r.meta?.['title'] }}
						</router-link>
					</template>
				</ListGroup>
			</Col>
			<Col>
				<router-view></router-view>
			</Col>
		</Row>
	</Container>
</template>
