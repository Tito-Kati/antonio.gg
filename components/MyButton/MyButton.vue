<template>
  <button
    type="button"
    :class="['button', primary && 'button--primary']"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss">
.button {
  @apply bg-green-500 rounded-full px-4 py-2 text-white;

  &--primary {
    @apply bg-blue-500;
  }
}
</style>
