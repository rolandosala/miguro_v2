<template>
  <v-app>
<!--     <Topbar v-if="showLayout" /> -->
    <Sidebar v-if="showLayout" />
    <v-main>
      <router-view />
      <FooterNavigation v-if="showLayout" />
    </v-main>

    <AppFooter v-if="showLayout" />
  </v-app>

</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const showLayout = computed(() => route.name !== '/')
</script>