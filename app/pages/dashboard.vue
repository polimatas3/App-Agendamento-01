<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <AppHeader show-nav-links />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Cards de Estatísticas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Total de Agendamentos</p>
              <p class="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-2xl">📅</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Confirmados</p>
              <p class="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span class="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Pendentes</p>
              <p class="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span class="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-600 mb-1">Cancelados</p>
              <p class="text-3xl font-bold text-gray-800">0</p>
            </div>
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span class="text-2xl">❌</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de Conteúdo Principal -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Coluna Principal -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Card de Agendamentos Recentes -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Agendamentos Recentes</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p class="font-semibold text-gray-800">Nenhum agendamento</p>
                  <p class="text-sm text-gray-600">Não há agendamentos cadastrados ainda</p>
                </div>
                <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                  Vazio
                </span>
              </div>
            </div>
          </div>

          <!-- Card de Ações Rápidas -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Ações Rápidas</h2>
            <div class="grid grid-cols-2 gap-4">
              <BaseButton class="w-full" variant="primary">
                Novo Agendamento
              </BaseButton>
              <BaseButton class="w-full" variant="secondary">
                Ver Relatórios
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Card de Informações -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Informações</h2>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <span class="text-lg">👤</span>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Usuário</p>
                  <p class="font-semibold text-gray-800">Logado</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span class="text-lg">📊</span>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Status</p>
                  <p class="font-semibold text-gray-800">Ativo</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Card de Calendário -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Calendário</h2>
            <div class="text-center py-8">
              <p class="text-gray-600">Calendário será implementado aqui</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Dashboard - header e auth gerenciados pelo AppHeader
</script>
