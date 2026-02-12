<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <div class="text-center">
      <div class="mx-auto h-10 w-10 rounded-full border-4 border-gray-200 border-t-gray-700 animate-spin" />
      <p class="mt-4 text-sm font-medium text-gray-700">Redirecionando…</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo } from '#imports'

onMounted(async () => {
  await navigateTo('/confirm', { replace: true })
})
</script>

