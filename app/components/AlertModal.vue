<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="handleClose"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all"
        >
          <!-- Ícone de alerta -->
          <div class="flex justify-center mb-4">
            <div
              class="flex items-center justify-center w-16 h-16 rounded-full"
              :class="iconBgClass"
            >
              <svg
                v-if="type === 'info'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                :class="iconColorClass"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-else-if="type === 'success'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                :class="iconColorClass"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                v-else-if="type === 'warning'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                :class="iconColorClass"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                :class="iconColorClass"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <!-- Título -->
          <h3 v-if="title" class="text-xl font-bold text-gray-800 text-center mb-3">
            {{ title }}
          </h3>

          <!-- Mensagem -->
          <p class="text-gray-600 text-center mb-6">
            <slot>{{ message }}</slot>
          </p>

          <!-- Botão de fechar -->
          <div class="flex justify-center">
            <BaseButton @click="handleClose" variant="primary" class="min-w-[120px]">
              {{ buttonText }}
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BaseButton } from '#components'

type AlertType = 'info' | 'success' | 'warning' | 'error'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    type?: AlertType
    title?: string
    message?: string
    buttonText?: string
  }>(),
  {
    type: 'info',
    buttonText: 'Entendi',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const iconBgClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-100'
    case 'warning':
      return 'bg-yellow-100'
    case 'error':
      return 'bg-red-100'
    case 'info':
    default:
      return 'bg-blue-100'
  }
})

const iconColorClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'text-green-600'
    case 'warning':
      return 'text-yellow-600'
    case 'error':
      return 'text-red-600'
    case 'info':
    default:
      return 'text-blue-600'
  }
})

const handleClose = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
  opacity: 0;
}
</style>
