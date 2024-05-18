<template>
  <div class="image-gallery">
    <div class="image-gallery__image-item" v-for="image in imageList" :key="image">
      <img :src="image" class="image-gallery__image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const imageList = ref([
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/500.jpg',
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/50.jpg',
  'https://picsum.photos/id/65/100/50.jpg'
])
</script>

<style lang="scss" scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(8, 80vw);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 40vw);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 20vw);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 10vw);
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
