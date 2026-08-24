# Design e interface

Última revisão: 15 de agosto de 2026.

Este documento registra a linguagem visual atual e as decisões de UX que devem orientar novas telas. Ele descreve um sistema distribuído; hoje não existe um único pacote que concentre todos os tokens e componentes de design.

## Base visual atual

- Fonte principal: Poppins, carregada em `styles/globals.css`.
- Tema ativo: claro, forçado em `pages/_app.jsx`.
- Cor institucional predominante: azul profundo, com gradientes próximos de `#0009bb` e `#00004b`.
- Ações principais: classes azuis, atualmente `bg-blue-700` no botão compartilhado.
- Acento recorrente fora dos formulários: amarelo.
- Superfícies de formulário: fundo `slate-100`, cards brancos, textos auxiliares em `slate-400` e destaque em azul.
- Bordas arredondadas, sombra leve e estados de hover/active com escala são recorrentes.

As fontes do sistema visual estão distribuídas em:

- `styles/globals.css`, para tokens CSS, fonte, backgrounds e classes de layout;
- `tailwind.config.js`, para tema Tailwind;
- `components/ui`, para primitivos;
- `components/geral/style/index.jsx`, para opções e botões estilizados;
- `components/geral/button`, para ações de formulário;
- `components/<modalidade>/styles`, para exceções específicas de produto.

Antes de criar um novo componente visual, conferir se uma dessas camadas já resolve o caso.

## Layout compartilhado dos formulários

`components/geral/form/BaseForm.jsx` define a moldura de todas as rotas de cadastro.

### Desktop (`lg` ou maior)

- Grid de duas colunas com altura mínima da viewport.
- Coluna esquerda com card institucional `bgForm`, logo, ação de voltar, copy do step e progresso.
- Coluna esquerda sticky durante a rolagem.
- Coluna direita centraliza o step ativo e aplica espaçamento lateral.

### Mobile

- Grid de uma coluna.
- A área institucional fica no topo.
- O título e a descrição laterais ficam ocultos.
- A régua mostra apenas o label correspondente ao percentual ativo.
- O step ocupa a área abaixo com padding horizontal reduzido.

O conteúdo dos steps usa três classes compartilhadas de `styles/globals.css`:

- `container-form-head`, para título e introdução internos;
- `container-form-body`, para campos e opções;
- `container-form-footer`, para voltar e continuar.

Não duplicar essas dimensões em cada formulário sem uma necessidade específica comprovada.

## Hierarquia de copy dos steps

A hierarquia atual possui cinco níveis:

1. `STEP_INFO.sectionTitle`: nome da fase na régua.
2. `STEP_INFO.title` e `STEP_INFO.description`: copy contextual exibida na coluna esquerda do `BaseForm` em desktop.
3. `STEP_INFO.progressLabel`: nome curto do item de progresso.
4. Título e descrição internos do JSX: instrução operacional próxima aos campos.
5. Em steps compostos, como o cadastro de perfil, título e descrição da pergunta atual.

A copy lateral pode ser mais contextual ou emocional, enquanto a copy interna deve dizer objetivamente o que preencher. Elas não precisam ser idênticas, mas não devem se contradizer.

Regras vigentes:

- Manter a copy externa em `STEP_INFO`, no mesmo arquivo do step.
- Manter a copy interna junto do JSX do step.
- Não mover textos para a página, para o orquestrador ou para um arquivo de configuração.
- Steps reutilizáveis usam os mesmos textos em todas as modalidades.
- Usar um título curto e uma descrição de uma frase.
- O `progressLabel` deve ser curto o suficiente para a régua lateral.
- `sectionTitle` deve representar a fase da jornada, não a pergunta específica.
- Preferir linguagem direta, humana e sem jargão bancário desnecessário.
- Não comunicar pré-análise como aprovação final.

O contrato técnico completo está em [Formulários e regras](./formularios-e-regras.md).

## Componentes de ação

### Formulários

- Ação principal: `components/geral/button/BtnBlueNext.jsx`.
- Ação secundária/voltar: `components/geral/button/BtnBlueBack.jsx`.
- `BtnBlueNext` recebe customização pontual em `className`.
- `BtnBlueBack` recebe customização pontual em `classN`; esse nome diferente é o contrato atual.
- Informar `tipo="button"` quando a ação não deve submeter o formulário.
- Usar `tipo="submit"` somente para a ação que confirma o step.

### Modais

- Modais gerais ficam em `components/geral/modal`.
- Usar `BtnBlueNext` para a ação principal.
- Usar `BtnBlueBack` para voltar ou fechar.
- Evitar `Button` direto de `components/lib/nextui-compat` quando os botões gerais atendem ao caso.
- Em ações de modal que não submetem formulário, sempre usar `tipo="button"`.

### Escolhas

- `OptLabel` atende opções baseadas em radio/label.
- `OptBnt` atende escolhas por botão.
- O estado selecionado usa fundo azul, texto branco e ícone com contraste invertido.
- Cards de opção devem ter uma área clicável confortável, feedback de foco/hover e texto curto.

### Progresso

- `components/ui/progress.jsx` é o primitivo da barra.
- `components/geral/ChartForm.jsx` renderiza fase, labels e percentual do fluxo externo.
- Um step com substeps, como `FormCadastroPerfil`, pode usar uma segunda barra interna, desde que fique claro que ela representa perguntas dentro daquele step.

## Cadastro de perfil

O padrão implementado em `FormCadastroPerfil` é:

- uma pergunta por substep;
- opções grandes em cards;
- contador `Pergunta X de Y`;
- barra de progresso interna;
- avanço automático quando a escolha é suficiente e previsível;
- botão continuar para os casos em que a confirmação explícita é necessária;
- botão voltar que primeiro navega entre substeps e só depois retorna ao fluxo externo.

Quando a pergunta sobre veículo recebe `sim`, aparece a pergunta condicional sobre quitação. O número total de perguntas e o progresso interno devem acompanhar essa condição.

## Responsividade e interação

- Começar pela experiência mobile e usar os breakpoints Tailwind existentes, principalmente `lg`.
- Validar textos longos nas duas colunas e na régua mobile.
- Não depender apenas de cor para explicar erro, seleção ou progresso.
- Preservar labels acessíveis em inputs e nomes claros em ações.
- Manter foco de teclado visível ao criar novos controles.
- Usar animação para orientar a transição, não para atrasar o preenchimento.
- O projeto usa Framer Motion e rolagem suave; qualquer nova animação deve respeitar a preferência de movimento reduzido.
- Evitar adicionar uma nova biblioteca visual quando um componente local ou primitivo existente puder ser estendido.

## Desvios atuais a considerar

- Os tokens semânticos existem em CSS/Tailwind, mas muitos formulários ainda usam cores `blue-*` e valores hexadecimais diretamente.
- Há versões duplicadas de estilos de opção nas pastas de CLT e CredLuz, além de `components/geral/style/index.jsx`.
- Alguns modais antigos ainda usam `Button` diretamente da camada HeroUI; a regra dos botões gerais é o padrão para código novo.
- O voltar do `BaseForm` é hoje um ícone clicável, não um elemento `button` semântico.
- A preferência de movimento reduzido desativa o scroll suave global, mas ainda não governa todas as animações Framer Motion.
- Algumas copies do cadastro de perfil permanecem sem acentuação. Ao tocar nesses textos, corrigir a escrita sem alterar os valores técnicos salvos.
- Existem usos antigos que passam `type` a `BtnBlueNext`, embora o contrato atual do componente seja `tipo`. Conferir o consumidor ao alterar botões.

## Checklist de revisão visual

Antes de concluir uma mudança de formulário, conferir:

1. título e descrição externos vindos do `STEP_INFO` correto;
2. título e instrução internos próximos aos campos;
3. primeiro e último percentuais da régua;
4. label atual no desktop e no mobile;
5. alinhamento das áreas head, body e footer;
6. estados normal, hover, foco, selecionado, desabilitado e erro;
7. botões com o `type` correto;
8. avanço e retorno sem salto inesperado;
9. layout em largura mobile e desktop;
10. linguagem sem promessa indevida de aprovação.
