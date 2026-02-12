<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <div class="text-center">
          <div
            class="mx-auto h-12 w-12 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"
          />

          <h1 class="mt-6 text-2xl font-bold text-gray-800">
            Confirmando autenticação…
          </h1>

          <p class="mt-2 text-gray-600">
            Aguarde enquanto validamos sua sessão.
          </p>
        </div>

        <div v-if="errorMessage" class="mt-8 rounded-xl border border-red-200 bg-red-50 p-4">
          <p class="text-sm font-semibold text-red-800">Não foi possível autenticar</p>
          <p class="mt-1 text-sm text-red-700 break-words">{{ errorMessage }}</p>

          <div class="mt-4 flex gap-3">
            <NuxtLink
              to="/login"
              class="flex-1 rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              Voltar ao login
            </NuxtLink>
            <NuxtLink
              to="/"
              class="flex-1 rounded-lg bg-gray-200 px-4 py-2 text-center text-sm font-semibold text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Início
            </NuxtLink>
          </div>
        </div>

        <div v-else class="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p class="text-sm text-gray-700">
            Depois de autenticar, você será redirecionado automaticamente.
          </p>
          <p class="mt-2 text-xs text-gray-500">
            Se demorar muito, tente recarregar a página.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { navigateTo, useRoute } from '#imports'
import { useSupabaseCookieRedirect } from '#imports'
import { useSupabaseUser } from '#imports'

const route = useRoute()
const user = useSupabaseUser()
const redirectCookie = useSupabaseCookieRedirect()

const errorMessage = computed(() => {
  const error = route.query.error
  const errorDescription = route.query.error_description

  const errorText = typeof error === 'string' ? error : null
  const descriptionText = typeof errorDescription === 'string' ? errorDescription : null

  return descriptionText || errorText
})

watch(
  user,
  async (value) => {
    if (!value) return

    const next = redirectCookie.pluck() || '/'
    await navigateTo(next, { replace: true })
  },
  { immediate: true }
)
</script>

