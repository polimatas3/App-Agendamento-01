<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all
           focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed"
    :class="[sizeClass, variantClass, (disabled || loading) ? 'opacity-70' : '']"
    @click="$emit('click', $event)"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: Variant
    size?: Size
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  }
)

defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'px-3 py-2 text-sm'
  if (props.size === 'lg') return 'px-6 py-3 text-base'
  return 'px-4 py-2.5 text-sm'
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400'
    case 'ghost':
      return 'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-300'
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    case 'primary':
    default:
      return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-md hover:shadow-lg'
  }
})
</script>

