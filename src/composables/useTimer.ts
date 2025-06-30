import { ref } from 'vue'
import { useRouter } from 'vue-router'

const timeLeft = ref(60)
const isRunning = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

export function useTimer() {
  const router = useRouter()
  const start = () => {
    if (isRunning.value) return
    isRunning.value = true
    timer = setInterval(() => {
      timeLeft.value--
      if (timeLeft.value <= 0) {
        stop()
        router.push('/result')
      }
    }, 1000)
  }
  const stop = () => {
    isRunning.value = false
    if (timer) clearInterval(timer)
    timer = null
    timeLeft.value = 60
  }
  const submit = () => {
    stop()
    router.push('/result')
  }
  return {
    timeLeft,
    isRunning,
    submit,
    start,
    stop,
  }
}
