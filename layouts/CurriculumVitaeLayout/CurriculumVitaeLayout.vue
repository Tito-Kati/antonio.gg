<template>
  <div class="curriculum-vitae-layout__container">
    <img
      class="curriculum-vitae-layout__profile"
      src="/images/profile.jpg"
      alt="Imagen de perfil de Antonio Gonzalez Gea"
    />
    <div class="curriculum-vitae-layout__content">
      <slot name="summary" />
      <slot name="experience" />
      <slot name="education" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss">
.curriculum-vitae-layout {
  &__container {
    @apply grid min-h-screen content-center gap-8;

    @screen lg {
      grid-template-columns: auto 1fr;
    }

    @media print {
      grid-template-columns: auto 1fr;
    }
  }

  &__profile {
    @apply mt-8 w-52 justify-self-center rounded-full;

    @screen lg {
      @apply w-40;
    }

    @screen xl {
      @apply w-52;
    }

    @media print {
      @apply w-40;
    }
  }

  &__content {
  }
}
</style>
