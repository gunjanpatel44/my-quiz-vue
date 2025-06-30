import type { Directive } from 'vue'

const vHighlight: Directive = {
  mounted(el: HTMLElement) {
    el.classList.add('bg-yellow-200', 'p-2', 'rounded', 'transition-colors', 'duration-300')
  },
}

export default vHighlight
