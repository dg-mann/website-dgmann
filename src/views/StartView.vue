<script setup lang="ts">
import ImageBoard from '@/components/ImageBoard.vue'
</script>

<template>
  <main>
    <div class="stage">
      <div class="stage-content">
        <h1 class="stage-content__headline">DGMANN</h1>
        <sub class="stage-content__sub-line"><3 by Paul Degemann</sub>
        <p>Code & Photography</p>
      </div>
    </div>
    <ImageBoard />
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors';

.stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.stage-content {
  text-align: right;

  &__headline {
    margin-bottom: -20px;
  }
}

h1 {
  color: $primary-color;
}

p {
  color: $primary-color;
  text-align: center;
}
</style>
