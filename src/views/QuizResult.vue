<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import questions from '@/assets/questions.json'

const userAnswers = ref<Record<string, string>>({})

onMounted(() => {
  const saved = localStorage.getItem('quiz-answers')
  if (saved) {
    userAnswers.value = JSON.parse(saved)
  }
})

const isCorrect = (qId: string, correct: string) => {
  return userAnswers.value[qId] === correct
}
</script>

<template>
  <h2 class="text-xl font-bold mb-4">Quiz Results</h2>
  <div class="flex flex-col gap-2">
    <div v-for="question in questions" :key="question.id" class="mb-6 p-4 border rounded-md">
      <p class="font-semibold mb-1">{{ question.id }}. {{ question.question }}</p>
      <p>
        ✅ Correct Answer: <span class="font-medium">{{ question.answer }}</span>
      </p>
      <p>
        📝 Your Answer:
        <span
          :class="
            isCorrect(String(question.id), question.answer) ? 'text-green-600' : 'text-red-600'
          "
        >
          {{ userAnswers[question.id] || 'Not Answered' }}
        </span>
      </p>
    </div>
  </div>
</template>
