<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="inputId"
      class="mb-2 block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <div class="relative">
      <input
        :id="inputId"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :disabled="disabled"
        :required="required"
        :inputmode="inputmode"
        :aria-invalid="Boolean(error) || undefined"
        :aria-describedby="describedBy"
        class="w-full rounded-lg border bg-white px-4 py-3 pr-11 text-gray-900 outline-none transition
               placeholder:text-gray-400
               focus:ring-2 focus:ring-indigo-500 focus:border-transparent
               disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
        :class="error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300'"
        @input="onInput"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />

      <div
        v-if="$slots.right"
        class="absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <slot name="right" />
      </div>
    </div>

    <p v-if="hint && !error" :id="hintId" class="mt-2 text-xs text-gray-500">
      {{ hint }}
    </p>
    <p v-if="error" :id="errorId" class="mt-2 text-xs font-medium text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'

type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'

const props = withDefaults(
  defineProps<{
    modelValue: string
    id?: string
    name?: string
    type?: string
    label?: string
    placeholder?: string
    autocomplete?: string
    required?: boolean
    disabled?: boolean
    hint?: string
    error?: string
    inputmode?: InputMode
  }>(),
  {
    type: 'text',
    required: false,
    disabled: false,
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
  (e: 'focus'): void
}>()

// Usa useId() para gerar IDs consistentes entre servidor e cliente
const generatedId = useId()
const inputId = computed(() => props.id || generatedId)
const hintId = computed(() => `${inputId.value}-hint`)
const errorId = computed(() => `${inputId.value}-error`)

const describedBy = computed(() => {
  if (props.error) return errorId.value
  if (props.hint) return hintId.value
  return undefined
})

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

