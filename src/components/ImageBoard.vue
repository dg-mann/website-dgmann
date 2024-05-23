<template>
  <div class="image-gallery">
    <div
      class="image-gallery__image-item"
      v-for="image in images"
      :key="image.name"
      @click="handleImageClick(image)"
    >
      <img :src="image.name" class="image-gallery__image" />
    </div>
  </div>
  <ImageModal v-if="isImageModalOpen" :src="imageModalSrc" @close="handleClose" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ImageModal from './ImageModal.vue'
const images = import.meta.glob('@/assets/images/preview/*.jpg')
const isImageModalOpen = ref(false)
const imageModalSrc = ref('')

function createImageLink(previewSource) {
  const pathArray = previewSource.split('/')
  const indexOfPreview = pathArray.indexOf('preview')
  if (indexOfPreview > -1) {
    pathArray.splice(indexOfPreview, 1)
  }

  return pathArray.join('/')
}

function handleImageClick(image) {
  imageModalSrc.value = createImageLink(image.name)
  isImageModalOpen.value = true
}

function handleClose() {
  isImageModalOpen.value = false
}
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
    transition: transform 0.2s linear;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
}
</style>
