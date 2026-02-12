<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <AppHeader show-nav-links />
    <div class="flex items-center justify-center p-4 min-h-[calc(100vh-theme(spacing.20))]">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Perfil
          </h1>
          <p class="text-gray-600">
            Altere sua senha de acesso
          </p>
        </div>

        <!-- Formulário de troca de senha -->
        <form class="space-y-6" @submit.prevent="onSubmit">
          <InputPassword
            v-model="form.newPassword"
            label="Nova senha"
            name="new-password"
            placeholder="••••••••"
            required
            autocomplete="new-password"
          />

          <InputPassword
            v-model="form.confirmPassword"
            label="Confirmar nova senha"
            name="confirm-new-password"
            placeholder="••••••••"
            required
            autocomplete="new-password"
          />

          <BaseButton type="submit" class="w-full" :loading="loading">
            Salvar nova senha
          </BaseButton>
        </form>
        </div>
      </div>
    </div>

    <!-- Modal de feedback -->
    <AlertModal
      v-model="showFeedbackModal"
      :type="feedbackType"
      :title="feedbackTitle"
      :button-text="'Entendi'"
    >
      <p>{{ feedbackMessage }}</p>
    </AlertModal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { BaseButton, InputPassword, AlertModal } from '#components'
import { useAuth } from '~/composables/useAuth'

const { updatePassword, loading, error } = useAuth()

const form = reactive({
  newPassword: '',
  confirmPassword: '',
})

const showFeedbackModal = ref(false)
const feedbackType = ref<'success' | 'error'>('success')
const feedbackTitle = ref('')
const feedbackMessage = ref('')

const showFeedback = (type: 'success' | 'error', title: string, message: string) => {
  feedbackType.value = type
  feedbackTitle.value = title
  feedbackMessage.value = message
  showFeedbackModal.value = true
}

const onSubmit = async () => {
  if (form.newPassword !== form.confirmPassword) {
    showFeedback('error', 'Senhas não coincidem', 'A nova senha e a confirmação devem ser iguais.')
    return
  }

  if (form.newPassword.length < 6) {
    showFeedback('error', 'Senha muito curta', 'A senha deve ter pelo menos 6 caracteres.')
    return
  }

  const { error: updateError } = await updatePassword({ newPassword: form.newPassword })

  if (updateError) {
    showFeedback('error', 'Erro ao alterar senha', error.value ?? 'Ocorreu um erro. Tente novamente.')
    return
  }

  showFeedback('success', 'Senha alterada', 'Sua senha foi alterada com sucesso.')
  form.newPassword = ''
  form.confirmPassword = ''
}
</script>

