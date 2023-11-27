<template>
  <div class="layout__container">
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    document.addEventListener('scroll', function () {
      const bodyStyles = document.body.style
      const rotation = `${(Math.floor(window.scrollY * 0.01) % 36) * 10}deg`
      const property = '--rotation'

      if (bodyStyles.getPropertyValue(property) !== rotation) {
        bodyStyles.setProperty(property, rotation)
      }
    })
  },
})
</script>

<style lang="scss">
.layout {
  &__container {
    @apply container;
  }
}
</style>
