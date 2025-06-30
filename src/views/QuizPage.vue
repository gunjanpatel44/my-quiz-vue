<script lang="ts" setup>
import questions from '@/assets/questions.json'
import { ref, watch, onMounted } from 'vue'
import QuizQuestion from '@/components/QuizQuestion.vue'
import CommonButton from '@/components/common/CommonButton.vue'
import { useTimer } from '@/composables/useTimer'

const answers = ref<Record<number, string>>({})
const showModal = ref(false)
const { submit, start } = useTimer()

onMounted(() => {
  if (!showModal.value) {
    showModal.value = true
  }
})

watch(
  answers,
  (newVal) => {
    localStorage.setItem('quiz-answers', JSON.stringify(newVal))
  },
  { deep: true },
)

const handleStartClick = () => {
  showModal.value = false
  start()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden"
    >
      <div class="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl">
        <h2 class="text-xl font-bold mb-4">Exam Instructions</h2>
        <ul class="list-disc pl-5 text-gray-700 space-y-1">
          <li>Answer all questions honestly.</li>
          <li>Your answers are saved automatically.</li>
          <li>You can review and submit at any time.</li>
        </ul>
        <div class="mt-4 text-right">
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            @click="handleStartClick"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  </Teleport>

  <div class="flex flex-col text-gray-600">
    <p>Answer the following questions. Your answers will be saved automatically.</p>
    <p>You can review your answers on the results page after submitting the quiz.</p>
  </div>
  <div class="flex flex-col gap-2 mb-6">
    <div v-for="question in questions" :key="question.id" class="flex flex-col gap-2 mb-6">
      <QuizQuestion
        :question="question"
        :selectedAnswer="answers[question.id]"
        @update:answer="(val) => (answers[question.id] = val)"
      />
    </div>
  </div>
  <CommonButton buttonText="Submit Quiz" @click="submit" />
</template>
