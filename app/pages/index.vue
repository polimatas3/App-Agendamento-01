<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <AppHeader />

    <!-- Hero Section -->
    <main class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h2 class="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Bem-vindo ao
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AppAgendamento
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Sistema de agendamento desenvolvido com Nuxt 4 e Tailwind CSS
        </p>
      </div>

      <!-- Cards de Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">📱</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">100% Responsivo</h3>
          <p class="text-gray-600">Funciona perfeitamente em todos os dispositivos</p>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Nuxt 4</h3>
          <p class="text-gray-600">Framework moderno e performático</p>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl">🎨</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Tailwind CSS</h3>
          <p class="text-gray-600">Estilização rápida e moderna</p>
        </div>
      </div>

      <!-- Seção de Demonstração Tailwind -->
      <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
        <h3 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Demonstração de Estilos Tailwind
        </h3>
        
        <!-- Badges -->
        <div class="flex flex-wrap gap-3 justify-center mb-8">
          <span class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
            Badge Azul
          </span>
          <span class="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
            Badge Verde
          </span>
          <span class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
            Badge Amarelo
          </span>
          <span class="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
            Badge Vermelho
          </span>
          <span class="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
            Badge Roxo
          </span>
        </div>

        <!-- Botões com diferentes estilos -->
        <div class="flex flex-wrap gap-4 justify-center mb-8">
          <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Botão Gradiente
          </button>
          <button class="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-600 transition-colors duration-200">
            Botão Sólido
          </button>
          <button class="px-6 py-3 border-2 border-purple-500 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
            Botão Outline
          </button>
        </div>

        <!-- Grid de cores -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div class="h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            Red
          </div>
          <div class="h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            Orange
          </div>
          <div class="h-20 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            Yellow
          </div>
          <div class="h-20 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            Green
          </div>
          <div class="h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md">
            Blue
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h3 class="text-3xl md:text-4xl font-bold mb-4">Pronto para começar?</h3>
        <p class="text-xl mb-8 text-blue-100">Faça login e comece a usar o sistema agora mesmo</p>
        <NuxtLink
          to="/login"
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
        >
          Acessar Login
        </NuxtLink>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-12 py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">© 2025 AppAgendamento - Desenvolvido com Nuxt 4 e Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Página inicial - header e auth gerenciados pelo AppHeader
</script>
