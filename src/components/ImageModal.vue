<template>
  <div class="image-modal__image-wrapper">
    <img class="image-modal__image" :src="src" alt="big image preview" />
    <div class="image-modal__image-wrapper-background" @click="emits('close')"></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'

defineProps<{
  src: string
}>()

const emits = defineEmits(['close'])

onMounted(() => {
  document.body.classList.add('no-scroll')
})

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll')
})
</script>

<style lang="scss" scoped>
.image-modal {
  &__image-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image-wrapper-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(#000, 0.7);
  }

  &__image {
    height: 80vh;
    z-index: 1;
  }
}
</style>
