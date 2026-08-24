# Formulários e regras

Última revisão: 15 de agosto de 2026.

Este documento é a fonte de verdade para os formulários de cadastro, o contrato dos steps e as regras de negócio associadas às modalidades de crédito.

## Padrão vigente dos steps

### Responsabilidade de cada camada

| Camada | Responsabilidade |
| --- | --- |
| Página `pages/**/cadastro/index.jsx` | Montar `BaseForm`, `FormDataProvider` e o orquestrador; manter somente o estado `stepInfo` necessário ao layout |
| Orquestrador `components/<modalidade>/form/index.jsx` | Controlar step ativo, ordem, schema, navegação, progresso, branches e APIs que alteram o fluxo |
| Componente do step | Renderizar campos e interações; guardar no próprio arquivo sua copy externa em `STEP_INFO` e sua copy interna |
| `schema/*.jsx` | Definir validação Yup dos dados |
| `context/FormContext.jsx` | Acumular os dados informados durante o fluxo em `formData` |
| `services/**/api*.jsx` | Isolar chamadas HTTP e normalizar o contrato consumido pela interface |
| `BaseForm.jsx` | Renderizar somente o layout compartilhado e as informações recebidas em `stepInfo` |

O `index.jsx` do fluxo não é dono dos textos. Ele importa o componente e a constante que pertencem ao step.

### Contrato `STEP_INFO`

Todo step ativo deve exportar uma constante ao lado do próprio componente:

```jsx
export const STEP_INFO = {
    id: "endereco",
    progressLabel: "Endereço",
    sectionTitle: "Preenchimento de proposta",
    title: "Onde você mora?",
    description: "Agora só precisamos do seu endereço para prosseguir",
};
```

Significado dos campos:

| Campo | Uso |
| --- | --- |
| `id` | Identificador estável e semântico do step |
| `progressLabel` | Nome curto exibido na régua de progresso |
| `sectionTitle` | Nome da fase maior, como `Preenchimento de proposta` ou `Envio de documentos` |
| `title` | Título da área lateral do `BaseForm` |
| `description` | Descrição curta da área lateral do `BaseForm` |

O orquestrador acrescenta somente os dados calculados em tempo de execução:

```jsx
setStepInfo({
    ...activeStep.info,
    progress,
    progressSteps,
});
```

`progress` é o percentual do step ativo. `progressSteps` possui itens no formato `{ key, thresholds }` e é derivado da ordem do fluxo. Esses dois campos não pertencem ao arquivo de um step, porque dependem da modalidade e da posição em que ele foi usado.

`id` já faz parte do contrato para dar identidade estável ao step, mas ainda não é consumido pelo `BaseForm`, pelo `ChartForm` nem pelos orquestradores.

### Regras que devem ser preservadas

- Não criar `flowConfig.js` para textos.
- Não recriar arrays paralelos de títulos, descrições ou labels no orquestrador.
- Não guardar copy de step na página.
- Não passar textos por props para alterar um step reutilizável.
- Um step reutilizável tem a mesma copy em todas as modalidades.
- Se uma modalidade realmente precisar de campos ou copy diferentes, criar um step específico dentro da modalidade, em vez de colocar um mapa de produtos no componente geral.
- Manter `Component`, `schema` e `info` juntos no `FLOW_STEPS` sempre que o fluxo permitir.
- As APIs que decidem branches ou avanço pertencem ao orquestrador. Consultas estritamente ligadas a um campo, como CPF ou CEP, podem permanecer no step, consumindo uma função de `services`.
- Não fazer chamadas HTTP diretamente na página de rota.

### Steps reutilizáveis

As copies compartilhadas estão nestes arquivos:

| Step | Arquivo | Label de progresso |
| --- | --- | --- |
| Cadastro de conta | `components/geral/form/FormCadastro.jsx` | `Registrar conta` |
| Identificação | `components/geral/form/FormIdentificacao.jsx` | `Identificação` |
| Endereço | `components/geral/form/FormEndereco.jsx` | `Endereço` |
| Cadastro de perfil | `components/geral/form/FormCadastroPerfil.jsx` | `Perfil` |

Alterar o `STEP_INFO` de um desses arquivos altera a copy em todos os fluxos que o importam. Esse compartilhamento é intencional.

## Fluxos ativos

### Visão geral

| Rota | Orquestrador | Sequência implementada |
| --- | --- | --- |
| `/cadastro` | `components/principal/form/FormPrincipal.jsx` | Cadastro → Identificação |
| `/consignado-inss/cadastro` | `components/consignado/form/FormConsignado.jsx` | Cadastro → Identificação |
| `/credluz-fast/cadastro` | `components/boleto/form/FormBoleto.jsx` | Cadastro → Identificação |
| `/consignado-clt/cadastro` | `components/clt/form/index.jsx` | Cadastro → Identificação → Endereço |
| `/refin-auto/cadastro` | `components/refinauto/form/index.jsx` | Cadastro → Perfil → Endereço |
| `/saque-aniversario/cadastro` | `components/fgts/form/index.jsx` | Cadastro → Identificação FGTS → Adesão → Autorização → Simulação → Pagamento → Endereço |
| `/credluz/cadastro` | `components/credluz/form/index.jsx` | Fluxo detalhado abaixo |

As sequências curtas representam o estado atual do código, não necessariamente o fluxo final de negócio de cada produto.

### Empréstimo na conta de luz

O CredLuz tem 13 posições e duas fases visuais:

1. Cadastro.
2. Titular da fatura.
3. Identificação.
4. Perfil ocupacional.
5. Endereço.
6. Companhia de energia, somente quando a cidade retorna mais de uma companhia.
7. Confirmação dos dados.
8. Resposta da solicitação.
9. Simulação.
10. Dados bancários.
11. Envio de identidade.
12. Envio da fatura de energia.
13. Finalizado.

Os steps 1 a 8 usam a fase `Preenchimento de proposta`. Os steps 9 a 13 usam `Envio de documentos`, com uma nova régua de progresso.

Ao sair do endereço, `getCompanhiasEnergiaPorCidade` define o branch:

- nenhuma companhia: o usuário permanece no endereço e recebe uma mensagem;
- uma companhia: ela é salva e o step de escolha é pulado;
- mais de uma companhia: o step de companhia é exibido.

Por causa desse branch numérico, o CredLuz ainda usa `SCHEMAS`, `CADASTRO_FLOW` e `DOCUMENTOS_FLOW` no mesmo orquestrador. Os textos continuam pertencendo aos steps; não criar arrays de copy para acompanhar esses arrays.

### FGTS

O fluxo FGTS usa `FLOW_STEPS`. A simulação não possui schema próprio no momento e, por isso, o resolver fica `undefined` nesse step. O pagamento usa `pagamentoPix` e o endereço usa `enderecoSchema`.

`components/fgts/form/FormIdentificacao.jsx` é um componente específico do FGTS, embora atualmente exporte a mesma copy do componente geral.

## Estado, validação e avanço

- Cada orquestrador cria um `FormProvider` de `react-hook-form`.
- O resolver ativo é criado com `yupResolver(schema)`; um step sem validação pode usar resolver `undefined`.
- Principal, INSS, CredLuz Fast, CLT, Refin Auto e CredLuz validam normalmente em `onBlur`; FGTS usa `onSubmit`.
- O step usa `useFormContext()` para acessar campos, erros e `handleSubmit`.
- Ao avançar, o orquestrador combina os dados em `FormContext` por meio de `atualizarForm`.
- `FormContext` faz merge superficial dos novos campos e mantém os dados apenas em memória durante a montagem atual.
- Voltar altera o índice do fluxo sem apagar os dados já acumulados.
- O progresso normal começa em `0%` no primeiro step e termina em `100%` no último.
- Fluxos condicionais devem calcular a régua a partir da lista realmente exibida, não da lista completa.

## APIs relacionadas aos formulários

Os arquivos `api*.jsx` não são unidos em um agregador. Cada step ou orquestrador importa apenas o serviço de que precisa.

No fluxo atual:

- `FormCadastro` consulta o CPF por `getPessoaPorCpf` e pode executar um callback `onBeforeNext` fornecido pelo orquestrador.
- O CredLuz usa `registrarUsuario` no início, consulta companhias após o endereço e usa `adicionarPessoa` na confirmação dos dados.
- `FormEndereco` usa ViaCEP e IBGE para preencher e validar endereço.
- As chamadas HTTP devem continuar encapsuladas em `services`; o formulário consome o retorno já normalizado.

Detalhes sobre serviços, URLs e persistência estão em [Arquitetura](./arquitetura.md).

## Lacunas conhecidas dos fluxos atuais

Estas lacunas descrevem o código atual e não devem ser confundidas com comportamento concluído:

- O step 8 do CredLuz sempre renderiza `PropostaAprovada`; ainda não existe chamada de pré-análise nem branch para recusa, proposta ativa, contrato ativo ou falha.
- RG e fatura do CredLuz são convertidos para base64 e ficam somente no estado do formulário. Não há serviço de envio final dos documentos ou da proposta.
- Os fluxos Principal, INSS, CredLuz Fast, CLT, Refin Auto e FGTS limitam o índice no último step, mas ainda não possuem uma etapa terminal de confirmação, API final ou redirecionamento.
- No FGTS, alguns avanços após os modais de adesão e autorização chamam `onNext()` diretamente e podem não persistir a resposta pelo caminho normal de submit.
- Há validações obrigatórias complementadas nos componentes, enquanto alguns campos continuam permissivos no Yup. Alterações de schema precisam ser verificadas junto com as regras de cada `Controller`.
- `FormNaoTitular` e `components/fgts/form/FormDadosCliente.jsx` não participam de um fluxo ativo; nem todo arquivo com prefixo `Form` é um step vigente.
- O CredLuz ainda usa um step próprio de ocupação e o FGTS mantém uma identificação própria; a consolidação completa no cadastro de perfil ainda não ocorreu.

## Cadastro de perfil

### Implementado

Existem hoje:

- `components/geral/form/FormCadastroPerfil.jsx`;
- `schema/schemaPerfil.jsx`;
- `lib/avaliarAptidaoModalidades.js`.

O componente usa substeps internos, uma pergunta por vez, progresso próprio e respostas persistidas em `FormContext`. Ele está integrado somente ao fluxo de refinanciamento de veículo.

Campos atuais:

- `perfilGenero`;
- `perfilOcupacao`;
- `perfilContaLuzTitular`;
- `perfilTemCartaoCredito`;
- `perfilTemVeiculo`;
- `perfilVeiculoQuitado`, obrigatório apenas quando o cliente possui veículo.

### Regras de aptidão existentes no utilitário

`avaliarAptidaoModalidades` retorna objetos agrupados em `aptas`, `possiveis`, `oportunidades` e `bloqueadas`.

| Modalidade | Regra atual no utilitário |
| --- | --- |
| Conta de luz | Apta quando a conta está no nome do cliente |
| Consignado CLT | Apto quando a ocupação é `clt` |
| Consignado INSS | Apto para aposentado, pensionista ou beneficiário INSS |
| Garantia de veículo | Apta quando o cliente informa que possui veículo |
| PIX parcelado | Apto quando o cliente informa que possui cartão de crédito |
| FGTS | Sempre aparece como possível |
| Proteção veicular | Oportunidade quando o cliente possui veículo |

Limites atuais:

- O avaliador ainda não é consumido pelos orquestradores nem por uma tela de resultado.
- `perfilVeiculoQuitado` é capturado, mas ainda não altera o resultado do avaliador.
- A regra atual de FGTS ainda não consulta CPF válido, idade, saldo, saque-aniversário ou autorização.
- Essas regras são indicativas e precisam acompanhar os contratos reais das instituições parceiras.
- Há três contratos de dados ainda incompatíveis: `genero` geral usa códigos numéricos em string, o perfil usa valores semânticos e `tipoOcupacao` do CredLuz usa outro conjunto numérico. Não misturar esses campos sem uma conversão explícita.

### Planejado

A direção de produto é reutilizar o cadastro de perfil nas modalidades adequadas, evitar perguntas repetidas e, ao final, continuar o fluxo original enquanto outras opções compatíveis podem ser sugeridas.

Uma integração só está completa quando o componente, o schema, a ordem do fluxo, a interpretação das respostas e a UI de resultado estão conectados. A mera existência de `FormCadastroPerfil` não significa que o cadastro único esteja concluído.

## Linguagem de negócio

- Preferir `aptidão`, `indicação` ou `opção disponível`.
- Não usar `aprovado` antes da análise real da instituição parceira.
- Fazer perguntas curtas e diretas.
- Não repetir respostas já coletadas, exceto quando houver exigência de confirmação.
- Quando a regra do parceiro ainda estiver pendente, não bloquear o cliente com uma conclusão definitiva.
- Manter nomes de campos estáveis entre modalidades.

## Como adicionar ou alterar um step

1. Criar ou editar o componente do step.
2. Manter toda a copy do step no mesmo arquivo e exportar `STEP_INFO`.
3. Criar ou ajustar o schema na pasta `schema`.
4. Importar `Component`, `schema` e `STEP_INFO` no orquestrador da modalidade.
5. Inserir o registro na posição correta de `FLOW_STEPS`. No CredLuz, alinhar também `SCHEMAS`, a fase correspondente, a renderização por número, os limites entre fases e todos os desvios de próximo/voltar.
6. Conferir `onNext`, `backStep`, branches opcionais e preservação de `formData`.
7. Garantir que o primeiro step marque `0%` e o último `100%`, ou que cada fase faça isso quando houver mais de uma régua.
8. Não criar estados, setters ou arrays separados para título e descrição.
9. Executar `npm run typecheck`, lint direcionado e `npm run build`.
10. Testar visualmente a rota em desktop e mobile, incluindo avançar, voltar, erro de validação, último step e todos os resultados de API/branch condicional.
