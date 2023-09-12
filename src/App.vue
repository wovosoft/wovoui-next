<script setup lang="ts">
import {routes} from "@/routes";
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <ul>
                    <li v-for="r in routes">
                        <router-link :to="r">
                            {{ r.meta?.['title'] }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
