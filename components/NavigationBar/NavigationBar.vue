<template>
  <nav class="navigation-bar__background">
    <div class="navigation-bar__container">
      <a
        class="navigation-bar__home"
        href="/"
        title="Ir a inicio"
      >
        <img
          class="navigation-bar__image"
          src="/images/profile.jpg"
          alt="Imagen de perfil de Antonio Gonzalez Gea"
        />

        antonio.gg
      </a>

      <div class="navigation-bar__separator"></div>

      <CompactSocialLinks
        class="navigation-bar__social-links"
        linked-in-handle="antonio-gonzalez-gea"
        x-handle="Tito_Kati"
        git-hub-handle="Tito-Kati"
        printables-handle="Katarn"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CompactSocialLinks from '@/components/CompactSocialLinks/CompactSocialLinks.vue'

export default defineComponent({
  components: { CompactSocialLinks },
})
</script>

<style lang="scss">
.navigation-bar {
  &__background {
    @apply fixed inset-x-0 top-0 z-navigation-bar bg-black/50 backdrop-blur-sm;

    @media print {
      @apply hidden;
    }
  }

  &__container {
    @apply container flex items-center gap-4 py-1;
  }

  &__home {
    @apply flex items-center gap-4;
  }

  &__image {
    @apply h-8 rounded-full;
  }

  &__separator {
    @apply flex-grow;
  }

  &__social-links {
    @apply flex-nowrap;
  }
}
</style>
