<template>
  <nav class="footer-nav">
    <RouterLink class="footer-nav__link" to="/">Home</RouterLink>
    <RouterLink class="footer-nav__link" to="/imprint">Imprint</RouterLink>
    <RouterLink class="footer-nav__link" to="/privacy">Datenschutz</RouterLink>
    <a class="footer-nav__link" href="mailto:paul@degemann.de">Contact</a>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer-nav {
  width: 300px;
  height: 90px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
}
</style>
