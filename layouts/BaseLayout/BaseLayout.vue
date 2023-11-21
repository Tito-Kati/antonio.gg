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
      document.body.style.setProperty('--rotation', `${(window.scrollY * 0.1) % 360}deg`)
    })
  },
})
</script>

<style lang="scss" scoped>
.layout {
  &__container {
    @apply container;
  }
}
</style>
