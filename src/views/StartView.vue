<script setup lang="ts">
import ImageBoard from '@/components/ImageBoard.vue'
</script>

<template>
  <div class="stage">
    <div class="stage-content">
      <img src="@/assets/images/dgmannImage.svg" width="350" />
      <sub class="stage-content__sub-line">♥ by Paul Degemann</sub>
      <p>Code & Photography</p>
    </div>
  </div>
  <ImageBoard />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/colors';

.stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 150px auto;
}

.stage-content {
  text-align: right;

  &__sub-line {
    display: block;
    width: 100%;
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
