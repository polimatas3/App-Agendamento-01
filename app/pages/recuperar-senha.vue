<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Recuperar Senha
          </h1>
          <p class="text-gray-600">
            Digite sua nova senha
          </p>
        </div>

        <!-- Formulário -->
        <form class="space-y-6">
          <BaseInput
            v-model="senha"
            label="Nova Senha"
            name="senha"
            type="password"
            placeholder="Digite sua nova senha"
            required
            autocomplete="new-password"
          />
        </form>

        <!-- Link para voltar -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/login"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            ← Voltar para o login
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/components/BaseInput.vue'

const senha = ref('')
</script>
