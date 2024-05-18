<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="50" />
  </header>

  <RouterView />
  <Footer />
</template>

<style lang="scss" scoped></style>
