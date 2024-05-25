<template>
  <header class="header">
    <RouterLink to="/"
      ><img alt="DGMANN Logo" class="header__logo" src="@/assets/logo.png"
    /></RouterLink>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  height: 40px;
  padding: 15px;

  &__logo {
    height: 100%;
  }
}
</style>
