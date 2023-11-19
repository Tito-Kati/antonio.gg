<template>
  <div class="layout__container">
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.layout {
  &__container {
    @apply container;
  }
}
</style>