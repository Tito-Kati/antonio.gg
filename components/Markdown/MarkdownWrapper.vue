<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="markdown-wrapper__container">
    <div
      class="markdown-wrapper__result"
      v-html="result"
    />

    <div
      class="markdown-wrapper__code"
      v-html="code"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import MarkdownIt from 'markdown-it'
import { getHighlighter } from 'shikiji'

export default defineComponent({
  props: {
    template: {
      required: true,
      type: String as PropType<string>,
    },
  },
  data() {
    return {
      markdownIt: null as null | MarkdownIt,
      shikiji: null as null | Awaited<ReturnType<typeof getHighlighter>>,
    }
  },
  computed: {
    result() {
      if (this.markdownIt === null) {
        return ''
      }

      return this.markdownIt.render(this.template)
    },
    code() {
      if (this.shikiji === null) {
        return ''
      }

      const wrapper = document.createElement('template')
      wrapper.innerHTML = this.shikiji.codeToHtml(this.template, {
        lang: 'md',
        theme: 'github-dark',
      })

      const code = wrapper.content.firstElementChild

      code?.classList.add('vp-code')
      code?.removeAttribute('style')

      return wrapper.innerHTML
    },
  },
  created() {
    this.markdownIt = new MarkdownIt()

    getHighlighter({
      themes: ['github-dark'],
      langs: ['md'],
    })
      .then((shikiji) => {
        this.shikiji = shikiji
      })
      .catch(() => {})
  },
})
</script>

<style lang="scss">
.markdown-wrapper {
  &__container {
    @apply columns-2;
  }
}
</style>
