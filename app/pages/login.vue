<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Login
          </h1>
          <p class="text-gray-600">
            Entre com suas credenciais para continuar
          </p>
        </div>

        <!-- Formulário -->
        <LoginForm @submit="handleSubmit" :loading="loading" />

        <!-- Link Esqueci a senha -->
        <div class="mt-4 text-right">
          <NuxtLink
            to="/recuperar-senha"
            class="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Esqueci a senha
          </NuxtLink>
        </div>

        <!-- Mensagem de erro -->
        <ClientOnly>
          <div v-if="error" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-600">{{ error }}</p>
          </div>
        </ClientOnly>

        <!-- Divisor -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-4 text-sm text-gray-500">ou</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <!-- Link para voltar -->
        <div class="text-center">
          <NuxtLink
            to="/"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            ← Voltar para a página inicial
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from '#components'
import { useAuth } from '~/composables/useAuth'
import { navigateTo } from '#imports'

const { login, loading, error } = useAuth()

const handleSubmit = async (payload: { email: string; password: string }) => {
  const { user, error: authError } = await login({
    email: payload.email,
    password: payload.password,
  })

  if (authError) {
    // Erro já está em error.value (reativo), será exibido no template
    return
  }

  // Login bem-sucedido - redirecionar para a página inicial
  if (user) {
    await navigateTo('/', { replace: true })
  }
}
</script>
