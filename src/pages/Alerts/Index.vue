<script setup lang="ts">

import Alert from "@/components/Alerts/Alert.vue";
import {getColorVariants} from "@/composables/useColorSchemes";
</script>

<template>
    <div>
        <h3>Example</h3>
        <Alert variant="primary">
            Default Alert
        </Alert>
	    
	    <h3>Example</h3>
	    <Alert v-for="av in getColorVariants" :variant="av" dismissible show>
		    {{ av}} Alert
	    </Alert>
    </div>
</template>

<style scoped>

</style>