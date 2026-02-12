---
applyTo: '**'
---

# Guia de Projeto — Nuxt 4 (estrutura + padrões de código)

⚠️ **Atenção**  
Este documento é um **guia baseado em boas práticas e na documentação oficial**.  
**Sempre siga as orientações do desenvolvedor responsável pelo projeto.**  
Não é uma regra imutável — serve como referência para manter consistência, legibilidade e escalabilidade.

## Estrutura de pastas (Nuxt 4)

Sempre respeitar a estrutura abaixo ao criar **novos arquivos/pastas**:

my-nuxt-app/
├─ app/
│ ├─ assets/
│ ├─ components/
│ ├─ composables/
│ ├─ layouts/
│ ├─ middleware/
│ ├─ pages/
│ ├─ plugins/
│ ├─ utils/
│ ├─ app.vue
│ ├─ app.config.ts
│ └─ error.vue
├─ content/
├─ public/
├─ shared/
│ ├─ types/
│ └─ constants/
├─ server/
│ ├─ api/
│ ├─ middleware/
│ └─ plugins/
├─ tailwind.config.ts
├─ nuxt.config.ts
└─ .env

## Princípios de arquitetura

1. Componentes pequenos, reusáveis e sem lógica de dados
2. Lógica de domínio em composables (/app/composables/useX.ts)
3. Responsabilidade única por arquivo
4. Sempre TypeScript, sem `any`
5. Camadas: UI → Composables → Dados (server/api ou SDK)

## Regras de nomenclatura

- Componentes: PascalCase (UserCard.vue)
- Páginas: minúsculas (login.vue)
- Layouts: PascalCase
- Composables: use + PascalCase (useAuth.ts)
- Middlewares: camelCase (authGuard.ts)
- Utils: camelCase (formatDate.ts)
- Tipos: PascalCase (UserDTO.ts)

**Sempre use imports explícitos, evitando auto-imports.**
