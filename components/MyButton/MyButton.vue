<template>
  <button
    type="button"
    :class="[
      'button',
      primary && 'button--primary'
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: false,
    }
  }
});
</script>

<style lang="scss">
.button {
  @apply rounded-full py-2 px-4 bg-amber-500 text-white;

  &--primary{
    @apply bg-red-500;
  }
}
</style>