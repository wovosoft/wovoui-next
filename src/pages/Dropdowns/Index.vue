<script setup lang="ts">

import Dropdown from "@/components/Dropdowns/Dropdown.vue";
import DropdownItem from "@/components/Dropdowns/DropdownItem.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
	<div>
		<h3>Single button </h3>
		<Dropdown text="Dropdown">
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h3>Variants</h3>
		<Dropdown text="Dropdown" v-for="cv in getColorVariants" :variant="cv" class="me-3">
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h3>Split button </h3>
		<Dropdown text="Dropdown" split>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h3>Sizing </h3>
		<Dropdown text="Dropdown" size="sm" class="me-3">
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		<Dropdown text="Dropdown" size="lg">
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h3>Dark Dropdown</h3>
		<Dropdown text="Dropdown" menu-dark>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h2>Directions</h2>
		<h4>Centered</h4>
		<Dropdown text="Dropdown" centered>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h4>Dropup</h4>
		<Dropdown text="Dropdown" dropup>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		<Dropdown text="Dropdown" split dropup>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h4>Dropup Centered</h4>
		<Dropdown text="Dropdown" dropup dropup-centered>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h4>Dropend</h4>
		<Dropdown text="Dropdown" dropend>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		<Dropdown text="Dropdown" dropend split>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		<h4>Dropstart</h4>
		<Dropdown text="Dropdown" dropstart>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		<Dropdown text="Dropdown" dropstart split>
			<DropdownItem v-for="i in 10">
				Dropdown Item {{ i }}
			</DropdownItem>
		</Dropdown>
		
		
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
	</div>
</template>



















