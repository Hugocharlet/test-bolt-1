import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.body.classList.toggle('dark', isDark.value)
  }

  return {
    isDark,
    toggleTheme
  }
}