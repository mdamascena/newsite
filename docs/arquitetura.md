# Arquitetura

Última revisão: 15 de agosto de 2026.

Este documento descreve a organização técnica atual da aplicação e os limites de responsabilidade entre suas camadas.

## Stack atual

- Next.js 16 com Pages Router.
- React 19.
- JavaScript/JSX como base predominante, com alguns componentes TypeScript/TSX.
- `react-hook-form` e resolvers Yup para formulários.
- Axios para chamadas HTTP.
- Tailwind CSS 4, `tailwind-styled-components` e CSS global para estilos.
- Radix UI, HeroUI por camada de compatibilidade e componentes locais em `components/ui`.
- Framer Motion para transições e animações.
- Tema global forçado para `light` por `next-themes` em `pages/_app.jsx`.

O acompanhamento aplica uma classe `dark` local em seu próprio layout, apesar do tema global claro.

As versões exatas e o runtime Node suportado devem ser consultados em `package.json`.

## Estrutura de diretórios

| Caminho | Responsabilidade |
| --- | --- |
| `pages/` | Rotas do Pages Router e composição inicial das telas |
| `components/geral/` | Componentes compartilhados de produto, formulário, seção, modal, botão e layout |
| `components/<modalidade>/` | Landing page, estilos e fluxo específicos de uma modalidade |
| `components/ui/` | Primitivos visuais reutilizáveis |
| `context/` | Estado React compartilhado dentro de uma árvore |
| `schema/` | Schemas Yup e validações de domínio dos formulários |
| `services/geral/` | Autenticação, pessoa, cadastro, reset, CEP, IBGE e companhia de energia |
| `services/credluz/` | Serviços específicos da jornada CredLuz |
| `shared/` | Toasts, alertas e variantes de animação compartilhadas |
| `lib/` | Funções puras e utilitários de aplicação |
| `styles/` | CSS global, tokens e classes utilitárias compostas |
| `public/` | Imagens e arquivos estáticos |
| `docs/` | Contexto técnico e de produto para manutenção |

## Como uma rota de formulário é montada

```text
pages/<modalidade>/cadastro/index.jsx
    ├── BaseForm (layout, copy lateral e progresso)
    └── FormDataProvider
        └── orquestrador da modalidade
            └── FormProvider do react-hook-form
                └── step ativo
                    └── função de services, quando necessária
```

A página da rota é o ponto de composição, não o local das regras do fluxo. O ponto em que todos os steps de uma modalidade se juntam é o orquestrador em `components/<modalidade>/form/index.jsx` ou seu equivalente nomeado.

No CredLuz, por exemplo:

```text
pages/credluz/cadastro/index.jsx
    → components/credluz/form/index.jsx (`FormCredLuz`)
    → components/credluz/form/Form*.jsx e components/geral/form/Form*.jsx
    → schema/schemaCredLuz.jsx e schema/schemaCadastro.jsx
    → services/geral/*
```

O contrato completo de page, orquestrador e step está em [Formulários e regras](./formularios-e-regras.md).

## Estado da aplicação

### Dados do formulário

`context/FormContext.jsx` expõe:

- `formData`, o objeto acumulado do fluxo;
- `atualizarForm(newData)`, que faz merge superficial com os dados anteriores.

Cada rota de cadastro monta seu próprio `FormDataProvider`. Os dados ficam em memória e são perdidos quando essa árvore é desmontada ou a página é recarregada.

### Estado do formulário ativo

O orquestrador cria um único `useForm` e o fornece aos steps por `FormProvider`. O schema do step ativo é escolhido pelo orquestrador.

### Estado visual do step

A página mantém `stepInfo` porque `BaseForm` e o orquestrador são irmãos na composição. O orquestrador publica a copy importada do step junto ao progresso calculado. Não criar estados separados para título, descrição, seção ou labels.

### Persistência local atual

O uso de `localStorage` é pontual:

- `valoreal.currentUserCpf` identifica o CPF usado no acompanhamento da conta;
- `ciaeId` guarda a companhia de energia selecionada no CredLuz.

`localStorage` não substitui `FormContext` nem é a fonte geral dos formulários.

## Serviços e APIs

Não existe um arquivo central que reúna todas as APIs. Os módulos de `services` são adaptadores independentes, importados pelo componente ou orquestrador que é dono da operação.

| Serviço | Responsabilidade principal | Consumidores atuais principais |
| --- | --- | --- |
| `geral/apiAuth.jsx` | Login | Formulários de conta/login |
| `geral/apiPessoa.jsx` | Consultar pessoa por CPF | `FormCadastro` e acompanhamento |
| `geral/apiAddPessoa.jsx` | Registrar credencial e adicionar pessoa/endereço | CredLuz |
| `geral/apiDadosReset.jsx` | Consultar dados de recuperação | Fluxo de reset |
| `geral/apiCep.jsx` | Consultar endereço no ViaCEP | `FormEndereco` |
| `geral/apiIBGE.jsx` | Listar estados e municípios | `FormEndereco` |
| `geral/apiCompanhiaEnergia.jsx` | Listar e normalizar companhias por cidade | Orquestrador CredLuz |
| `credluz/apiPreAnalise.jsx` | Criar pré-análise de empréstimo de energia | `ResumoCredLuz` |

Regras vigentes:

- Encapsular Axios, construção de payload, tratamento de status e normalização em `services`.
- Retornar um contrato simples para a UI, preferencialmente com `success`, dados e mensagem quando aplicável.
- Não espalhar URLs ou transformação de payload em componentes visuais.
- Manter no orquestrador a chamada que decide branch ou mudança de step.
- Manter no step somente consultas locais necessárias à interação daquele campo.

Os retornos ainda não são uniformes: alguns serviços devolvem `{ success, data, message }`, reset pode devolver `null`, e CEP/IBGE podem devolver `undefined`. Não presumir um contrato comum sem conferir o módulo chamado. Também não existe cliente Axios central, interceptor ou sessão/token compartilhado.

Configuração atual:

- `NEXT_PUBLIC_AUTH_API_BASE_URL` configura o cadastro de credencial em `apiAddPessoa.jsx`.
- `NEXT_PUBLIC_CREDLUZ_API_BASE_URL` configura pessoa/endereço em `apiAddPessoa.jsx`, companhia de energia em `apiCompanhiaEnergia.jsx` e pré-análise em `apiPreAnalise.jsx`.
- Alguns módulos de autenticação/pessoa/reset ainda possuem URLs `https://localhost:*` fixas. Isso é uma limitação atual e deve ser corrigido antes de depender de ambientes diferentes.
- ViaCEP e IBGE usam seus endpoints públicos diretamente.
- Não há rotas locais em `pages/api`; as chamadas partem do cliente para os serviços externos.

## Arquitetura do acompanhamento

`components/conta/acompanhamento/acompanhamentoData.js` é a fonte central dos contratos exibidos no acompanhamento: cliente, propostas, contratos, ofertas, etapas, status e adaptadores.

Decisões vigentes:

- `Home.jsx`, `Historico.jsx`, `Ofertas.jsx` e `Perfil.jsx` cuidam de apresentação e interação local.
- As telas não devem chamar endpoints, ler `localStorage` para montar contratos nem duplicar regras de normalização.
- Uma nova integração deve entrar por uma função exportada de `acompanhamentoData.js` e devolver dados prontos para a tela.
- `cliente` é o objeto central do cliente autenticado. `carregarClienteAcompanhamento` atualiza esse mesmo objeto; não criar um segundo modelo concorrente.
- O estado React da tela pode conter uma referência/cópia de `cliente` para provocar renderização, mas o contrato continua centralizado no módulo de dados.
- Etapas de proposta usam somente `ordem`, `titulo`, `data` e `horario`.
- A ordenação usa o inteiro `ordem`.
- A última etapa com `data` ou `horario` é a etapa atual.
- `etapaAtual` e `progresso` devem ser derivados por `obterResumoEtapas`.

Parte das propostas, contratos e ofertas desse arquivo ainda é composta por dados locais demonstrativos. Não tratar esses dados como resposta real da API.

`Home.jsx` ainda contém algumas formatações locais de moeda, data e hora. Isso é uma exceção atual ao limite de responsabilidade acima, não um padrão para novas telas.

## Imports e configuração

Aliases configurados:

- `components/*`;
- `shared/*`;
- `@/*` no `tsconfig.json`.

O projeto ainda mistura imports relativos e aliases. Ao editar um módulo, seguir o padrão predominante naquela área e evitar criar um novo alias sem necessidade.

`strict` está desativado e `allowJs` está ativo. O typecheck ajuda a encontrar incompatibilidades, mas não transforma automaticamente os arquivos JSX em código estritamente tipado.

## Verificação mínima

Comandos disponíveis:

```text
npm run typecheck
npm run lint
npm run build
```

Não existe script de teste automatizado em `package.json`. Mudanças de fluxo devem incluir verificação manual das rotas afetadas, especialmente branches, chamadas de serviço, avanço, retorno e responsividade.

## Limites técnicos conhecidos

- `FormContext` não persiste um formulário após reload.
- Há URLs locais fixas em parte dos serviços.
- A aplicação combina várias bibliotecas visuais e dois estilos de import.
- A cobertura automatizada de fluxos não está configurada.
- O cadastro de perfil e o avaliador de aptidão ainda não formam uma jornada única em todas as modalidades.
- O acompanhamento ainda combina integração de cliente com dados demonstrativos de propostas e ofertas.
- CEP e IBGE capturam erros dentro do próprio serviço e podem devolver `undefined`, o que impede alguns `catch` dos consumidores de serem acionados.
