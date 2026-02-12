import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { AuthError, User } from '@supabase/supabase-js'
import { useSupabaseClient, useSupabaseUser, useSupabaseCookieRedirect } from '#imports'

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResult {
  user: User | null
  error: AuthError | null
}

interface LogoutResult {
  error: AuthError | null
}

interface UseAuthReturn {
  user: Ref<User | null>
  isAuthenticated: Ref<boolean>
  loading: Ref<boolean>
  error: Ref<string | null>
  login: (credentials: LoginCredentials) => Promise<LoginResult>
  logout: () => Promise<LogoutResult>
}

export const useAuth = (): UseAuthReturn => {
  const client = useSupabaseClient()
  const userJwt = useSupabaseUser()
  const redirectCookie = useSupabaseCookieRedirect()

  const loading = ref(false)
  const error = ref<string | null>(null)

  const user = computed<User | null>(() => {
    // `useSupabaseUser` aqui expõe o payload JWT; em projetos reais você
    // pode mapear isso para o tipo de usuário da sua aplicação.
    return (userJwt.value as unknown as User) ?? null
  })

  const isAuthenticated = computed<boolean>(() => Boolean(user.value))

  const login = async (credentials: LoginCredentials): Promise<LoginResult> => {
    loading.value = true
    error.value = null

    try {
      const { data, error: authError } = await client.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      })

      if (authError) {
        error.value = authError.message
        return {
          user: null,
          error: authError,
        }
      }

      // O módulo @nuxtjs/supabase cria o cookie automaticamente
      // Aguardar um momento para garantir que o cookie seja processado
      if (data.session) {
        // Pequeno delay para garantir que o cookie seja criado e o estado atualizado
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      return {
        user: data.user ?? null,
        error: null,
      }
    } catch (err) {
      const unknownError = err as AuthError
      error.value = unknownError?.message ?? 'Erro ao autenticar.'

      return {
        user: null,
        error: unknownError,
      }
    } finally {
      loading.value = false
    }
  }

  const logout = async (): Promise<LogoutResult> => {
    loading.value = true
    error.value = null

    try {
      const { error: signOutError } = await client.auth.signOut()

      if (signOutError) {
        error.value = signOutError.message
        return {
          error: signOutError,
        }
      }

      // Limpa o cookie de redirect (boa prática com Supabase + Nuxt)
      redirectCookie.path.value = null

      return {
        error: null,
      }
    } catch (err) {
      const unknownError = err as AuthError
      error.value = unknownError?.message ?? 'Erro ao sair.'

      return {
        error: unknownError,
      }
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
  }
}

