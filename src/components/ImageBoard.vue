<template>
  <div class="grid-container">
    <div class="image-item" v-for="image in imageList" :key="image">
      <img :src="image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const imageList = ref([
  'https://picsum.photos/id/65/200/300.jpg',
  'https://picsum.photos/id/65/200/400.jpg',
  'https://picsum.photos/id/65/200/500.jpg'
])
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.image-item {
  display: flex;
  justify-content: center;
  grid-column: span 1;
  grid-row: span 1;
}
</style>
