<template>
  <BaseInput
    v-model="proxy"
    :id="id"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :required="required"
    :disabled="disabled"
    :hint="hint"
    :error="error"
    :type="isVisible ? 'text' : 'password'"
  >
    <template #right>
      <button
        type="button"
        class="inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors"
        :aria-label="isVisible ? 'Ocultar senha' : 'Mostrar senha'"
        @click="toggle"
      >
        <svg
          v-if="!isVisible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
          <path
            d="M9.88 9.88A3 3 0 0 1 15 12c0 .85-.35 1.62-.91 2.17"
          />
          <path d="M2 12s3.5-7 10-7c2.04 0 3.82.66 5.32 1.6" />
          <path d="M22 12s-3.5 7-10 7c-2.13 0-4-.72-5.56-1.72" />
          <path d="M3 3l18 18" />
        </svg>
      </button>
    </template>
  </BaseInput>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseInput } from '#components'

const props = withDefaults(
  defineProps<{
    modelValue: string
    id?: string
    name?: string
    label?: string
    placeholder?: string
    autocomplete?: string
    required?: boolean
    disabled?: boolean
    hint?: string
    error?: string
  }>(),
  {
    required: false,
    disabled: false,
    autocomplete: 'current-password',
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isVisible = ref(false)

const proxy = computed({
  get: () => props.modelValue,
  set: (v: string) => emit('update:modelValue', v),
})

const toggle = () => {
  isVisible.value = !isVisible.value
}
</script>

