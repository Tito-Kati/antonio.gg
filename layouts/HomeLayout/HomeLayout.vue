<template>
  <div class="home-layout__container">
    <img
      class="home-layout__profile"
      src="/images/profile.jpg"
      alt="Imagen de perfil de Antonio Gonzalez Gea"
    />
    <div class="home-layout__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.home-layout {
  &__container {
    @apply grid min-h-screen content-center gap-8;

    @screen lg {
      grid-template-columns: auto 1fr;
    }
  }

  &__profile {
    @apply mt-8 w-64 justify-self-center rounded-full;

    @screen lg {
      @apply w-52;
    }

    @screen xl {
      @apply w-64;
    }
  }

  &__content {
  }
}
</style>
