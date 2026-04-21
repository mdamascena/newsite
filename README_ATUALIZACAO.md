# Atualizacao Next.js e TailwindCSS

## Contexto

- Data da atualizacao: `2026-04-21`
- Branch de trabalho: `update-nextjs-tailwind-2026-04-21`
- Estrutura mantida: `Pages Router`
- Package manager: `npm`
- Snapshot inicial: `VERSOES_ANTIGAS.json`
- Backup de codigo e manifestos: `backup-projeto-20260421`

## Mudancas implementadas

1. Atualizacao do core para `Next.js 16`, `React 19`, `TypeScript 6`, `Tailwind CSS 4` e `ESLint 9`.
2. Migracao do stack legado `@nextui-org/*` para `HeroUI v3`.
3. Substituicao do provider legado em `pages/_app.jsx` por bootstrap simples, ja que o `HeroUI v3` nao exige provider global.
4. Migracao do PostCSS para `@tailwindcss/postcss` com `postcss.config.mjs`.
5. Atualizacao do CSS global para `@import "tailwindcss"`, `@import "@heroui/styles"` e `@import "tw-animate-css"`.
6. Remocao da customizacao obsoleta de `webpack` do `next.config.js`, permitindo usar o build padrao do Next 16 com Turbopack.
7. Adicao de uma camada local de compatibilidade em `components/lib/nextui-compat.jsx` para reduzir risco e preservar a API antiga de modais/disclosure durante a migracao.
8. Migracao do lint para `eslint.config.mjs`, com desativacao apenas das regras do React Compiler que a base atual ainda nao adota.
9. Atualizacao do `tsconfig.json` para compatibilidade com `TypeScript 6`.

## Versoes principais

| Pacote | Antes | Depois |
| --- | --- | --- |
| `next` | `^14.2.5` | `^16.2.4` |
| `react` | `^18.2.0` | `^19.2.5` |
| `react-dom` | `^18.2.0` | `^19.2.5` |
| `tailwindcss` | `^3.4.10` | `^4.2.4` |
| `postcss` | `^8.5.3` | `^8.5.10` |
| `@tailwindcss/postcss` | - | `^4.2.4` |
| `typescript` | `^5.5.4` | `^6.0.3` |
| `eslint` | `8.7.0` | `^9.39.4` |
| `eslint-config-next` | `12.0.8` | `^16.2.4` |
| `@types/react` | `^18.3.4` | `^19.2.14` |
| `@types/react-dom` | `^18.3.1` | `^19.2.3` |
| `@types/node` | `22.5.0` | `^25.6.0` |
| `framer-motion` | `^11.11.17` | `^12.38.0` |
| `motion` | `^11.18.2` | `^12.38.0` |
| `@nextui-org/react` | `^2.4.6` | removido |
| `@heroui/react` | - | `^3.0.3` |
| `@heroui/styles` | - | `^3.0.3` |
| `tailwindcss-animate` | `^1.0.7` | removido |
| `tw-animate-css` | - | `^1.4.0` |
| `next-themes` | `^0.3.0` | `^0.4.6` |
| `sonner` | `^1.5.0` | `^2.0.7` |
| `recharts` | `^2.12.7` | `^3.8.1` |

## Rollback

### Script

```powershell
.\rollback-update.ps1 -WhatIf
.\rollback-update.ps1
```

### Passos manuais equivalentes

```powershell
git log --oneline --decorate -n 10
git reset --hard <commit-anterior>
Copy-Item backup-projeto-20260421\package.json .\package.json -Force
Copy-Item backup-projeto-20260421\package-lock.json .\package-lock.json -Force
Copy-Item backup-projeto-20260421\next.config.js .\next.config.js -Force
Copy-Item backup-projeto-20260421\tailwind.config.js .\tailwind.config.js -Force
Copy-Item backup-projeto-20260421\postcss.config.js .\postcss.config.js -Force
Copy-Item backup-projeto-20260421\tsconfig.json .\tsconfig.json -Force
Copy-Item backup-projeto-20260421\styles.globals.css .\styles\globals.css -Force
Copy-Item backup-projeto-20260421\pages._app.jsx .\pages\_app.jsx -Force
Copy-Item backup-projeto-20260421\components.json .\components.json -Force
if (Test-Path .\postcss.config.mjs) { Remove-Item .\postcss.config.mjs -Force }
npm install
```

## Validacoes executadas

- [x] `npm run typecheck`
- [x] `npm run lint`
- [x] `npm run build`
- [x] `npm run dev`
- [x] Dev server inicializado com sucesso em `http://localhost:3001`

## Observacoes de validacao

- Durante a checagem do `dev`, a porta `3000` ja estava ocupada no ambiente; o Next iniciou automaticamente em `3001`.
- No Windows, o build dentro do sandbox ficou sujeito a lock de arquivos em `.next`; a validacao final de producao foi executada com limpeza segura da pasta `.next` fora do sandbox.
- A migracao para `HeroUI v3` foi feita com uma camada de compatibilidade local para evitar reescrita ampla imediata dos modais e hooks herdados.

## Riscos residuais

- `react-text-mask@5.5.0` ainda declara peer dependency antiga e nao lista React 19 formalmente, embora o projeto compile e rode.
- `@react-email/components` puxa uma dependencia transitiva (`md-to-react-email`) que ainda declara peer de React 18.
- Nao foi executada uma bateria manual completa de regressao visual em todas as paginas e modais; o build, lint, typecheck e bootstrap do dev server passaram.

## Registro de fases

### Fase 0 - Preparacao

- [x] Inventario das dependencias atuais
- [x] Criacao da branch de trabalho
- [x] Commit base antes da migracao
- [x] Copia dos arquivos criticos para a pasta de backup

### Fase 1 - Core framework

- [x] Atualizar `next`, `react`, `react-dom`, `typescript`, `eslint`, `eslint-config-next`
- [x] Ajustar configuracoes do Next e TypeScript
- [x] Executar build, lint e typecheck

### Fase 2 - Tailwind e CSS

- [x] Migrar para `tailwindcss@4`
- [x] Atualizar PostCSS para `@tailwindcss/postcss`
- [x] Adaptar `globals.css` e a estrategia de configuracao
- [x] Revisar compatibilidade com `Shadcn UI`

### Fase 3 - UI libraries

- [x] Migrar `@nextui-org/*` para `@heroui/*`
- [x] Ajustar provider e imports
- [x] Revisar componentes herdados de `Shadcn`/`Magic UI`
- [x] Validar animacoes e imports do stack de motion

### Fase 4 - Fechamento

- [x] Executar testes finais
- [x] Registrar versoes novas
- [x] Documentar rollback e riscos residuais
