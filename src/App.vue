<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
