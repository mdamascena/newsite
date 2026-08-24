# Contexto de IA — Valoreal

Última revisão: 15 de agosto de 2026.

Este é o ponto de entrada do contexto técnico e de produto da Valoreal. Ele deve permanecer curto: os detalhes vivem nos documentos temáticos abaixo.

Se houver divergência entre a documentação e o repositório, o código é a fonte de verdade. Depois de confirmar o comportamento no código, corrija o documento temático correspondente.

## Mapa do contexto

| Documento | Assunto | Leia quando for trabalhar em |
| --- | --- | --- |
| [Formulários e regras](./contexto-ia/formularios-e-regras.md) | Steps, `STEP_INFO`, fluxos ativos, validação, APIs do fluxo, perfil e regras de aptidão | Cadastro, modalidade de crédito, ordem de steps, schema ou regra de negócio |
| [Arquitetura](./contexto-ia/arquitetura.md) | Stack, diretórios, responsabilidades, estado, serviços e acompanhamento | Estrutura do projeto, integração de API, dados compartilhados ou criação de módulos |
| [Design e interface](./contexto-ia/design-interface.md) | Layout, componentes visuais, copy, responsividade e interação | UI, UX, textos, estilos, botões, modais ou acessibilidade |

## Como interpretar os documentos

- **Implementado** descreve o que existe no código na data da revisão.
- **Decisão vigente** descreve o padrão que novas alterações devem seguir.
- **Planejado** descreve uma direção de produto ou arquitetura que ainda não está totalmente conectada ao fluxo.

Não transformar uma seção planejada em descrição do estado atual antes de implementar e validar o código.

## Visão do negócio

A Valoreal é uma fintech/correspondente bancário que oferece modalidades de crédito de instituições financeiras parceiras. A experiência desejada é permitir um cadastro único e usar os dados informados para indicar quais modalidades o cliente pode tentar.

`Aptidão`, `indicação` e `opção disponível` significam uma pré-análise ou compatibilidade inicial. Nunca devem ser comunicadas como garantia de aprovação final.

As modalidades hoje consideradas no contexto de produto são:

- empréstimo na conta de luz;
- antecipação do FGTS;
- consignado INSS;
- consignado CLT;
- empréstimo com garantia de veículo;
- PIX parcelado;
- proteção veicular como oportunidade futura.

## Estado atual em poucas linhas

- O site usa Next.js com Pages Router e React.
- Existem sete rotas ativas de cadastro, cada uma montando um orquestrador de formulário.
- A página mantém apenas o estado visual `stepInfo`; o orquestrador controla ordem, validação, navegação, progresso e decisões de fluxo.
- Cada step exporta sua própria constante `STEP_INFO`. Os textos não ficam mais em arrays no `index.jsx`.
- Steps reutilizáveis, como `FormCadastro`, `FormIdentificacao`, `FormEndereco` e `FormCadastroPerfil`, possuem uma única copy compartilhada entre as modalidades que os usam.
- Não existe e não deve ser criado um `flowConfig.js` apenas para guardar textos.
- O cadastro de perfil, seu schema e o avaliador de aptidão existem, mas a integração completa em todas as modalidades ainda é planejada.
- O CredLuz ainda não conclui a jornada de empréstimo no backend: a pré-análise, o envio final de documentos e a criação da proposta permanecem pendentes.

## Regra de manutenção deste contexto

1. Atualize apenas o documento dono do assunto.
2. Crie um link para outro documento em vez de copiar a mesma regra em dois lugares.
3. Registre contratos e responsabilidades duráveis; não copie arquivos inteiros para a documentação.
4. Use nomes e caminhos reais do repositório.
5. Separe claramente o que está implementado do que está planejado.
6. Atualize a data de revisão somente depois de conferir o documento contra o código.
7. Use o histórico do Git como changelog; estes arquivos descrevem o estado e as decisões vigentes, não uma sequência de alterações antigas.
