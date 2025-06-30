<script lang="ts" setup>
import { defineEmits } from 'vue'

const props = defineProps<{
  question: {
    id: number
    question: string
    options: string[]
    answer: string
  }
  selectedAnswer: string
}>()

const emit = defineEmits<{
  (e: 'update:answer', value: string): void
}>()
</script>

<template>
  <div>
    <p class="font-semibold">
      <span>{{ props.question.id }}&period;</span>
      {{ props.question.question }}
    </p>
    <ul class="space-y-1">
      <li v-for="option in props.question.options" :key="option" class="flex items-center gap-2">
        <input
          type="radio"
          :id="`${props.question.id}-${option}`"
          :name="String(props.question.id)"
          :value="option"
          :checked="selectedAnswer === option"
          @change="emit('update:answer', option)"
        />
        <label :for="`${props.question.id}-${option}`">{{ option }}</label>
      </li>
    </ul>
  </div>
</template>
