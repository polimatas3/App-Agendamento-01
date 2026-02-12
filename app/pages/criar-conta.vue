<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Criar Conta
          </h1>
          <p class="text-gray-600">
            Preencha os dados para criar sua conta
          </p>
        </div>

        <!-- Formulário -->
        <CreateAccountForm @submit="handleSubmit" :loading="loading" />

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

        <!-- Link para login -->
        <div class="text-center">
          <NuxtLink
            to="/login"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Já tem uma conta? Faça login
          </NuxtLink>
        </div>

        <!-- Link para voltar -->
        <div class="text-center mt-4">
          <NuxtLink
            to="/"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            ← Voltar para a página inicial
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Modal de confirmação de email -->
    <AlertModal
      v-model="showEmailConfirmationModal"
      type="info"
      title="Confirme seu email"
      button-text="Entendi"
    >
      <p>
        Enviamos um email de confirmação para <strong>{{ registrationEmail }}</strong>.
      </p>
      <p class="mt-3">
        Por favor, verifique sua caixa de entrada e clique no link de confirmação para ativar sua conta.
      </p>
      <p class="mt-3 text-sm text-gray-500">
        Se não encontrar o email, verifique também a pasta de spam.
      </p>
    </AlertModal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { CreateAccountForm, AlertModal } from '#components'
import { useAuth } from '~/composables/useAuth'
import { useSupabaseClient, navigateTo } from '#imports'

const { register, loading, error, isAuthenticated } = useAuth()
const client = useSupabaseClient()

const showEmailConfirmationModal = ref(false)
const registrationEmail = ref('')

// Função para redirecionar se já estiver autenticado
const redirectIfAuthenticated = async () => {
  if (isAuthenticated.value) {
    await navigateTo('/', { replace: true })
  }
}

// Observar mudanças no estado de autenticação
watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    redirectIfAuthenticated()
  }
})

// Verificar ao montar o componente (no cliente)
onMounted(() => {
  redirectIfAuthenticated()
})

const handleSubmit = async (payload: {
  email: string
  password: string
  confirmPassword: string
}) => {
  // Validar se as senhas coincidem
  if (payload.password !== payload.confirmPassword) {
    error.value = 'As senhas não coincidem.'
    return
  }

  // Validar comprimento mínimo da senha
  if (payload.password.length < 6) {
    error.value = 'A senha deve ter pelo menos 6 caracteres.'
    return
  }

  const { user, error: authError } = await register({
    email: payload.email,
    password: payload.password,
  })

  if (authError) {
    // Erro já está em error.value (reativo), será exibido no template
    return
  }

  // Verificar se o registro foi bem-sucedido
  if (user) {
    // Verificar se há sessão ativa (se não houver, significa que precisa confirmar email)
    const { data: sessionData } = await client.auth.getSession()

    if (!sessionData.session) {
      // Não há sessão, significa que precisa confirmar email
      registrationEmail.value = payload.email
      showEmailConfirmationModal.value = true
    } else {
      // Há sessão, usuário já está logado - redirecionar
      await navigateTo('/', { replace: true })
    }
  }
}
</script>
