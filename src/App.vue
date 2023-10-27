<script setup lang="ts">
import {routes} from "@/routes";
import {Container, Row, Col} from "@/components/Layouts";
import ListGroup from "@/components/ListGroups/ListGroup.vue";
import Navbar from "@/components/Navigation/Navbar.vue";
import NavbarNav from "@/components/Navigation/NavbarNav.vue";
import NavItem from "@/components/Navigation/NavItem.vue";
import Collapse from "@/components/Accordions/Collapse.vue";

</script>

<template>
    <Navbar brand="wovoui" variant="dark" bg-variant="dark" sticky="top">
        <template #default="{collapsed}">
            <Collapse is-nav :model-value="collapsed">
                <NavbarNav class="me-auto mb-2 mb-lg-0">
                    <NavItem>
                        Test
                    </NavItem>
                </NavbarNav>
            </Collapse>
        </template>
    </Navbar>
    <Container fluid>
        <Row class="row">
            <Col :md="3" :sm="12" class="py-3">
                <ListGroup>
                    <template v-for="r in routes">
                        <template v-if="r.children">
                            <div class="list-group-item list-group-item-action">
                                {{r.meta?.['title']}}
                                <ul>
                                    <li v-for="child in r.children">
                                        <router-link :to="child">
                                            {{child.meta?.['title']}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <router-link v-else :to="r" class="list-group-item list-group-item-action">
                            {{r.meta?.['title']}}
                        </router-link>
                    </template>
                </ListGroup>
            </Col>
            <Col class="py-3">
                <router-view></router-view>
            </Col>
        </Row>
    </Container>
</template>
