<script lang="ts" setup>
import { defineEmits } from 'vue'

const props = defineProps<{
  buttonText: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

function handleClick() {
  emit('click')
}
</script>

<template>
  <button
    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
    @click="handleClick"
  >
    {{ props.buttonText }}
  </button>
</template>
