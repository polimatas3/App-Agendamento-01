<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <BaseInput
      v-model="form.email"
      label="E-mail"
      name="email"
      type="email"
      autocomplete="email"
      placeholder="seu@email.com"
      required
      inputmode="email"
    />

    <InputPassword
      v-model="form.password"
      label="Senha"
      name="password"
      placeholder="••••••••"
      required
      autocomplete="new-password"
    />

    <InputPassword
      v-model="form.confirmPassword"
      label="Confirmar Senha"
      name="confirmPassword"
      placeholder="••••••••"
      required
      autocomplete="new-password"
    />

    <BaseButton type="submit" class="w-full" :loading="loading" :disabled="loading">
      Criar Conta
    </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { BaseButton, BaseInput, InputPassword } from '#components'

interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  (e: 'submit', payload: { email: string; password: string; confirmPassword: string }): void
}>()

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const onSubmit = () => {
  if (props.loading) return
  emit('submit', {
    email: form.email,
    password: form.password,
    confirmPassword: form.confirmPassword,
  })
}
</script>
