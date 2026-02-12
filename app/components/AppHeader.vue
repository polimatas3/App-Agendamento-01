<template>
  <header class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold hover:opacity-90 transition-opacity">
          AppAgendamento
        </NuxtLink>
        <ClientOnly>
          <div class="flex items-center gap-3">
            <template v-if="showNavLinks">
              <NuxtLink
                to="/dashboard"
                class="px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
              >
                Dashboard
              </NuxtLink>
              <NuxtLink
                to="/perfil"
                class="px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-all duration-200"
              >
                Perfil
              </NuxtLink>
            </template>
            <NuxtLink
              v-if="!isAuthenticated"
              to="/login"
              class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </NuxtLink>
            <template v-else>
              <span class="text-sm font-medium truncate max-w-[200px] md:max-w-xs" :title="user?.email ?? ''">
                {{ user?.email }}
              </span>
              <BaseButton
                @click="handleLogout"
                :loading="loading"
                variant="secondary"
                class="bg-white text-blue-600 hover:bg-blue-50"
              >
                Sair
              </BaseButton>
            </template>
          </div>
          <template #fallback>
            <NuxtLink
              to="/login"
              class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </NuxtLink>
          </template>
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { BaseButton } from '#components'
import { useAuth } from '~/composables/useAuth'
import { navigateTo } from '#imports'

defineProps<{
  /** Exibe links de navegação (Dashboard, Perfil) - útil em páginas protegidas */
  showNavLinks?: boolean
}>()

const { user, logout, isAuthenticated, loading } = useAuth()

const handleLogout = async () => {
  const { error } = await logout()

  if (error) {
    console.error('Erro ao fazer logout:', error)
    return
  }

  await navigateTo('/login', { replace: true })
}
</script>
