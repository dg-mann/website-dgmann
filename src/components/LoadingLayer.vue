<template>
  <div class="loading-layer">
    <div class="loading-layer__loader"></div>
    <div class="loading-layer__background"></div>
  </div>
</template>

<style lang="scss" scoped>
.loading-layer {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(#000, 0.7);
  }

  &__loader {
    width: 50px;
    aspect-ratio: 1;
    color: #dc1818;
    background:
      radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
      radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
      linear-gradient(to bottom left, currentColor 42%, #0000 43%) bottom left,
      linear-gradient(to bottom right, currentColor 42%, #0000 43%) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: inherit;
      opacity: 0.4;
      animation: beat 0.2s infinite;
    }
  }

  @keyframes beat {
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
}
</style>
