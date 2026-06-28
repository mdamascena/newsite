# Contexto de IA - Valoreal

Este documento orienta futuras IAs e desenvolvedores sobre o produto, os formularios e a evolucao desejada do cadastro unico da Valoreal.

## Visao do negocio

A Valoreal e uma fintech/correspondente bancario que oferece varias modalidades de credito de instituicoes financeiras parceiras. A experiencia desejada e permitir que o cliente faca um unico cadastro e, a partir dos dados informados, a Valoreal avalie quais modalidades ele pode tentar ou para quais ele tem aptidao.

Aptidao significa uma pre-aprovacao ou indicativo de que o cliente possui perfil minimo para seguir naquela modalidade. Nao deve ser comunicada como garantia de aprovacao final.

## Modalidades

- Emprestimo na conta de luz: depende, no minimo, de a conta de energia estar em nome do cliente ou de regra especifica da parceira.
- Antecipacao do FGTS: depende de CPF, dados pessoais, saldo/saque-aniversario/autorizacao conforme regras do parceiro.
- Consignado INSS: depende de perfil de beneficiario, aposentado, pensionista ou BPC/LOAS, conforme regras do parceiro.
- Consignado CLT: depende de vinculo empregaticio CLT e elegibilidade junto ao parceiro.
- Emprestimo com garantia de veiculo: depende de o cliente possuir veiculo, dados do veiculo e regra sobre quitacao/alienacao.
- PIX parcelado: usa o limite do cartao de credito como forma de credito/parcelamento; depende de o cliente possuir cartao e limite disponivel.
- Protecao veicular: produto futuro. O perfil com veiculo tambem deve ajudar a identificar oportunidade para esse produto.

## Estrutura atual observada

O projeto usa Next.js/React com formularios baseados em `react-hook-form` e validacao `yup`.

Pontos importantes:

- `components/geral/form/FormCadastro.jsx` e o formulario comum principal. Ele cria a conta do cliente e captura CPF, nome, data de nascimento, telefone, e-mail, senha e aceites.
- `context/FormContext.jsx` guarda os dados do fluxo em memoria via `formData` e `atualizarForm`.
- Cada modalidade tem um `form/index.jsx` proprio, com controle de `step`, array de `schemas`, textos do progresso e renderizacao condicional dos componentes.
- `components/geral/form/BaseForm.jsx` renderiza a pagina de formulario com area lateral, titulo, descricao e grafico de progresso.
- `components/geral/ChartForm.jsx` mostra o progresso por steps principais.
- `components/geral/form/FormIdentificacao.jsx` hoje captura genero.
- `components/credluz/form/FormTipoOcupacao.jsx` hoje captura ocupacao dentro do fluxo de conta de luz, mas ocupacao deveria ser reaproveitada no perfil geral.

## Objetivo do Cadastro de Perfil

Criar um step unico chamado `Cadastro de perfil`, reutilizavel por todas as modalidades, com substeps internos. Ele deve capturar respostas simples que direcionam quais modalidades o cliente pode tentar.

Esse step deve ser extremamente facil de responder: uma pergunta por tela/substep, opcoes grandes, linguagem direta e progresso interno visivel.

## Perguntas do perfil

Campos recomendados:

- `perfilTemVeiculo`: pergunta se o cliente possui carro, moto ou outro veiculo.
- `perfilVeiculoQuitado`: se possui veiculo, perguntar se o veiculo esta quitado. Esta pergunta deve aparecer apenas quando `perfilTemVeiculo` for verdadeiro.
- `perfilContaLuzTitular`: pergunta se a conta de luz esta no nome do cliente.
- `perfilTemCartaoCredito`: pergunta se o cliente possui cartao de credito.
- `perfilOcupacao`: pergunta qual e a ocupacao atual do cliente.
- `perfilGenero`: pergunta o genero do cliente, preferencialmente reaproveitando a logica atual de `FormIdentificacao`.

Ocupacoes recomendadas:

- CLT/assalariado
- Aposentado
- Pensionista
- Beneficiario INSS/BPC/LOAS
- Servidor publico
- Autonomo/profissional liberal/empresario
- Militar
- Desempregado/outro

## Regras iniciais de aptidao

Estas regras sao indicativas e devem ser ajustadas conforme regras das instituicoes parceiras:

- Conta de luz: apto se `perfilContaLuzTitular = sim`.
- Consignado CLT: apto se `perfilOcupacao = CLT/assalariado`.
- Consignado INSS: apto se `perfilOcupacao` for aposentado, pensionista ou beneficiario INSS/BPC/LOAS.
- Garantia de veiculo: apto se `perfilTemVeiculo = sim`. Se `perfilVeiculoQuitado = sim`, sinalizar maior chance; se nao, seguir para analise especifica, pois a regra pode variar.
- PIX parcelado: apto se `perfilTemCartaoCredito = sim`.
- FGTS: nao deve depender apenas das perguntas do perfil. Pode ser oferecido como tentativa geral quando o cliente tiver CPF valido e idade minima, mas a aptidao real depende de saldo, saque-aniversario e autorizacao.
- Protecao veicular: oportunidade se `perfilTemVeiculo = sim`, independentemente da modalidade de credito.

## Comportamento recomendado do step

O step principal no grafico externo deve aparecer como `Cadastro de perfil`.

Dentro dele, mostrar um indicador interno:

- Texto curto: `Pergunta 2 de 6`.
- Barra fina de progresso interno.
- Opcionalmente, chips com as modalidades liberadas ate o momento.

Cada substep deve:

- Mostrar uma unica pergunta.
- Usar botoes/cards de resposta com icone.
- Avancar automaticamente apos a escolha quando isso for confortavel.
- Ter botao voltar para corrigir respostas.
- Salvar a resposta no `FormContext` a cada substep ou no submit final do step.

Fluxo sugerido:

1. Genero
2. Ocupacao
3. Conta de luz em seu nome?
4. Tem cartao de credito?
5. Tem veiculo?
6. Se tem veiculo: o veiculo esta quitado?
7. Resultado resumido: mostrar modalidades indicadas e continuar para a modalidade escolhida/original.

Observacao: se o cliente veio de uma landing page de modalidade especifica, apos o perfil ele deve continuar no fluxo especifico daquela modalidade, mas a UI pode sugerir outras opcoes compatveis.

## Implementacao recomendada

Criar componentes e utilitarios comuns:

- `components/geral/form/FormCadastroPerfil.jsx`: step unico com substeps internos.
- `schema/schemaPerfil.jsx`: schema yup do perfil financeiro.
- `lib/avaliarAptidaoModalidades.js`: funcao pura que recebe `formData` e retorna modalidades aptas, possiveis e pendentes.

Contrato sugerido de `FormCadastroPerfil`:

```jsx
export default function FormCadastroPerfil({ onNext, backStep }) {
  // usa useFormContext()
  // usa useFormData()
  // controla subStep internamente
}
```

Saida recomendada de aptidao:

```js
{
  aptas: ["conta_luz", "pix_parcelado"],
  possiveis: ["fgts"],
  oportunidades: ["protecao_veicular"],
  bloqueadas: [
    { modalidade: "consignado_clt", motivo: "Cliente nao informou vinculo CLT" }
  ]
}
```

Para integrar em um fluxo existente:

1. Importar `perfilSchema`.
2. Inserir `perfilSchema` no array `schemas` logo apos `cadastroSchema`.
3. Importar `FormCadastroPerfil`.
4. Renderizar `step === 2 && <StepCadastroPerfil ... />`.
5. Ajustar os indices dos steps seguintes.
6. Atualizar o array visual de progresso para incluir `Cadastro de perfil`.

## Cuidado de UX e comunicacao

- Usar `aptidao`, `indicacao` ou `opcao disponivel`; evitar prometer `aprovado` antes da analise real.
- Explicar pouco e perguntar direto.
- Nao repetir perguntas ja respondidas no perfil dentro da modalidade, exceto quando a instituicao parceira exigir confirmacao.
- Permitir que o cliente continue mesmo quando uma modalidade nao for ideal, quando houver regra pendente de parceiro.
- Guardar as respostas em nomes de campo estaveis para evitar divergencia entre modalidades.

## Decisao recomendada

O melhor caminho e transformar `Genero` e `Tipo de ocupacao` em partes do novo `Cadastro de perfil`, e deixar os formularios especificos apenas com perguntas realmente exclusivas da modalidade.

Isso reduz atrito, evita duplicidade e permite que a Valoreal apresente uma esteira unica de analise com varias oportunidades de credito para o mesmo cadastro.
