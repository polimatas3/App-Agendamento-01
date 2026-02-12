---
applyTo: '**'
---

# Guia Essencial: @nuxtjs/supabase

⚠️ Atenção: Este é apenas um guia técnico de referência. Sempre priorizar as instruções específicas do desenvolvedor responsável pelo projeto.

Você está trabalhando em um projeto Nuxt 4 com o módulo @nuxtjs/supabase.

Sempre que gerar código relacionado a autenticação, sessão, SSR ou acesso a dados Supabase:
- Seguir as boas práticas descritas neste guia.
- Usar TypeScript.
- Evitar any.
- Separar UI e lógica.
- Preferir composables.

---

## Instalação

npx nuxi@latest module add supabase

---

## Configuração

nuxt.config.ts:

modules: ['@nuxtjs/supabase']

Variáveis de ambiente obrigatórias:

SUPABASE_URL
SUPABASE_KEY
SUPABASE_SERVICE_KEY (opcional)

---

## Autenticação

Fluxo padrão: PKCE

### Página Login
- Usar useSupabaseClient()
- Usar signInWithOtp()
- Redirecionar para /confirm

### Página Confirm
- Usar useSupabaseUser()
- Navegar automaticamente quando autenticado

### Redirecionamento com cookie
- Usar useSupabaseCookieRedirect()
- redirectInfo.pluck()

---

## Reset de senha

- resetPasswordForEmail()
- updateUser()

---

## Composables disponíveis

- useSupabaseClient()
- useSupabaseUser()
- useSupabaseCookieRedirect()
- serverSupabaseClient()
- serverSupabaseServiceRole()

---

## Regras importantes

- Configurar URLs no dashboard Supabase
- SSR usa cookies por padrão
- PKCE ativado por padrão
- Types gerados automaticamente do schema
