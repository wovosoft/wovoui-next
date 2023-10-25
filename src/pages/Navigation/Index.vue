<script setup lang="ts">

import Navbar from "@/components/Navigation/Navbar.vue";
import NavbarNav from "@/components/Navigation/NavbarNav.vue";
import NavItem from "@/components/Navigation/NavItem.vue";
import Dropdown from "@/components/Dropdowns/Dropdown.vue";
import DropdownItem from "@/components/Dropdowns/DropdownItem.vue";
import DropdownDivider from "@/components/Dropdowns/DropdownDivider.vue";
import Collapse from "@/components/Accordions/Collapse.vue";
</script>

<template>
	<div>
		<h1>Navbar</h1>
		<Navbar brand="Navbar" expands-on="lg" fluid>
			<template #default="{collapsed}">
				<Collapse is-nav :model-value="collapsed">
					<NavbarNav class="me-auto mb-2 mb-lg-0">
						<NavItem href="#">Home</NavItem>
						<NavItem href="#">Link</NavItem>
						<Dropdown tag="li" is-nav text="Dropdown">
							<DropdownItem href="#">Action</DropdownItem>
							<DropdownItem href="#">Another action</DropdownItem>
							<DropdownDivider/>
							<DropdownItem href="#">Something else here</DropdownItem>
						</Dropdown>
						<NavItem disabled>Disabled</NavItem>
					</NavbarNav>
					<form class="d-flex" role="search">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</Collapse>
			</template>
		</Navbar>
	</div>
</template>