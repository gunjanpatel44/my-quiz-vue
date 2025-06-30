<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useTimer } from '@/composables/useTimer'
const { timeLeft } = useTimer()
</script>
<template>
  <header class="flex justify-between gap-4 items-center p-4 bg-gray-500 text-white sticky top-0">
    <div class="flex items-center gap-4">
      <img alt="Vue logo" class="logo h-[50px] w-[50px]" src="@/assets/logo.svg" />
      <nav class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quiz">Quiz</RouterLink>
      </nav>
    </div>
    <p class="text-sm text-gray-700" v-highlight>Time left: {{ timeLeft }} sec</p>
  </header>
  <Suspense>
    <template #default>
      <div class="mx-auto px-15">
        <RouterView />
      </div>
    </template>
    <template #fallback>
      <div class="text-center p-4">Loading...</div>
    </template>
  </Suspense>
  <footer class="w-full sticky left-0 bottom-0 text-center text-white p-2 bg-gray-500">
    <p>© 2025 My Quiz by Gunjan</p>
  </footer>
</template>
