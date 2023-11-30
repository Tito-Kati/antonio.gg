<template>
  <div class="layout__container">
    <NavigationBar />

    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default defineComponent({
  components: {
    NavigationBar,
  },
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
