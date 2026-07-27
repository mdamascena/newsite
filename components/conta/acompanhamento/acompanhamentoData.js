import { CURRENT_USER_CPF_STORAGE_KEY, getPessoaPorCpf } from "../../../services/serviceAuth/apiPessoa";

const getCampoPessoa = (pessoa, camelCase, pascalCase) => pessoa?.[camelCase] ?? pessoa?.[pascalCase] ?? "";

const somenteDigitos = (valor) => String(valor || "").replace(/\D/g, "");

const formatarCpf = (valor) => {
	const digitos = somenteDigitos(valor);

	return digitos.length === 11
		? digitos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
		: valor || "Não informado";
};

const formatarData = (valor) => {
	const [ano, mes, dia] = String(valor || "").split("T")[0].split("-");

	return ano && mes && dia ? `${dia}/${mes}/${ano}` : "Não informado";
};

const formatarCelular = (valor) => {
	const digitos = somenteDigitos(valor);

	if (digitos.length === 11) {
		return digitos.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
	}

	return valor || "Não informado";
};

const criarIniciais = (nome) => nome
	.split(/\s+/)
	.filter(Boolean)
	.slice(0, 2)
	.map((parte) => parte[0])
	.join("")
	.toUpperCase() || "--";

export const cliente = {
    primeiroNome: "Thiago",
  	nomeCompleto: "Thiago Bronisio Damascena",
  	iniciais: "TD",
  	cpf: "152.891.967-06",
  	nascimento: "25/06/2001",
  	rg: "31.08.0488.48",
	mae: "Edilene Amorim Bronisio",
	email: "Thiagobronisioo@gmail.com",
	celular: "(21) 96584-6290",
	endereco: "Rua das Palmeiras, 120 - Rio de Janeiro, RJ",
	banco: "Nu Pagamentos S.A.",
	completude: 82,
};

const atualizarClienteComPessoa = (pessoa) => {
	const nomeCompleto = getCampoPessoa(pessoa, "pesNome", "PesNome") || "Não informado";
	const bancoId = getCampoPessoa(pessoa, "pesBanPix", "PesBanPix");
	const bancoDescricao = pessoa?.pesBanPixNavigation?.banDescricao
		?? pessoa?.PesBanPixNavigation?.BanDescricao
		?? (bancoId ? `Banco ID ${bancoId}` : "Não informado");
	const endereco = [
		`${getCampoPessoa(pessoa, "pesEndereco", "PesEndereco")}${getCampoPessoa(pessoa, "pesEnderecoNumero", "PesEnderecoNumero") ? `, ${getCampoPessoa(pessoa, "pesEnderecoNumero", "PesEnderecoNumero")}` : ""}`,
		getCampoPessoa(pessoa, "pesEnderecoBairro", "PesEnderecoBairro"),
		getCampoPessoa(pessoa, "pesCep", "PesCep"),
	].filter(Boolean).join(" - ") || "Não informado";

	const dadosAtualizados = {
		primeiroNome: nomeCompleto.split(/\s+/).filter(Boolean)[0] || "Cliente",
		nomeCompleto,
		iniciais: criarIniciais(nomeCompleto),
		cpf: formatarCpf(getCampoPessoa(pessoa, "pesCpf", "PesCpf")),
		nascimento: formatarData(getCampoPessoa(pessoa, "pesDtnasc", "PesDtnasc")),
		rg: getCampoPessoa(pessoa, "pesNumRg", "PesNumRg") || "Não informado",
		mae: getCampoPessoa(pessoa, "pesNomeMae", "PesNomeMae") || "Não informado",
		email: getCampoPessoa(pessoa, "pesEmail", "PesEmail") || "Não informado",
		celular: formatarCelular(getCampoPessoa(pessoa, "pesTelCelular", "PesTelCelular")),
		endereco,
		banco: bancoDescricao,
	};

	const camposPerfil = [
		dadosAtualizados.nomeCompleto,
		dadosAtualizados.cpf,
		dadosAtualizados.nascimento,
		dadosAtualizados.email,
		dadosAtualizados.celular,
		dadosAtualizados.endereco,
	];

	dadosAtualizados.completude = Math.round(
		(camposPerfil.filter((valor) => valor && valor !== "Não informado").length / camposPerfil.length) * 100
	);

	Object.assign(cliente, dadosAtualizados);
	return cliente;
};

export const carregarClienteAcompanhamento = async () => {
	if (typeof window === "undefined") {
		return { success: false, status: "error", message: "A conta autenticada não está disponível." };
	}

	const cpf = window.localStorage.getItem(CURRENT_USER_CPF_STORAGE_KEY);

	if (!cpf) {
		return { success: false, status: "error", message: "Não foi possível identificar a conta autenticada." };
	}

	const resultado = await getPessoaPorCpf(cpf);

	if (!resultado.success || !resultado.pessoa) {
		return { success: false, status: "error", message: "Não foi possível carregar seus dados de cadastro." };
	}

	return {
		success: true,
		status: "ready",
		cliente: atualizarClienteComPessoa(resultado.pessoa),
	};
};

export const criarDadosPerfil = (clienteAtual = cliente) => [
	{ rotulo: "Nome", valor: clienteAtual.nomeCompleto },
	{ rotulo: "CPF", valor: clienteAtual.cpf },
	{ rotulo: "Nascimento", valor: clienteAtual.nascimento },
	{ rotulo: "RG", valor: clienteAtual.rg },
	{ rotulo: "Nome da mãe", valor: clienteAtual.mae },
	{ rotulo: "E-mail", valor: clienteAtual.email },
	{ rotulo: "Celular", valor: clienteAtual.celular },
	{ rotulo: "Endereço", valor: clienteAtual.endereco },
];

export const criarAcoesPerfil = (clienteAtual = cliente) => [
	{
		titulo: "Endereço",
		descricao: clienteAtual.endereco,
		status: "Atualizado",
	},
	{
		titulo: "Dados bancários",
		descricao: clienteAtual.banco,
		status: "Conferir",
	},
	{
		titulo: "Senha e segurança",
		descricao: "Use sua senha cadastrada para acessar sua conta",
		status: "Ativo",
	},
	{
		titulo: "Privacidade",
		descricao: "Termos, consentimentos e comunicações",
		status: "Ver",
	},
];

export const etapaFoiAlcancada = (etapa) => Boolean(
	String(etapa?.data || "").trim() || String(etapa?.horario || "").trim()
);

export const obterResumoEtapas = (etapas = []) => {
	const etapasOrdenadas = [...etapas]
		.map((etapa, index) => {
			const ordemRecebida = etapa.ordem ?? etapa.Ordem;

			return {
				ordem: Number.isFinite(Number(ordemRecebida)) ? Number(ordemRecebida) : index + 1,
				titulo: etapa.titulo ?? etapa.Titulo ?? "Etapa sem título",
				data: etapa.data ?? etapa.Data ?? "",
				horario: etapa.horario ?? etapa.Horario ?? "",
			};
		})
		.sort((etapaA, etapaB) => etapaA.ordem - etapaB.ordem);
	const etapasAlcancadas = etapasOrdenadas.filter(etapaFoiAlcancada);
	const etapaAtual = etapasAlcancadas.at(-1) || null;

	return {
		etapas: etapasOrdenadas,
		etapaAtual,
		ordemAtual: etapaAtual?.ordem ?? null,
		progresso: etapasOrdenadas.length
			? Math.round((etapasAlcancadas.length / etapasOrdenadas.length) * 100)
			: 0,
	};
};

//Propostas em analise
const modalidadesCreditoBase = [

	//FGTS
	{
		id: "fgts",
		nome: "Saque FGTS",
		descricao: "Antecipacao do saque-aniversario disponivel no FGTS.",
		proposta: {
			id: "012026",
			modalidade: "Saque FGTS",
			status: "Pendente dados de contato",
			tipoStatus: "pendente",
			descricaoStatus: "A analise ja foi iniciada, mas precisamos confirmar os dados de contato antes de liberar a formalizacao. Resolva a pendencia para a proposta seguir no fluxo.",
			valor: "R$ 4.280,00",
			numero: "012026",
			instituicaoFinanceira: "Banco PAN",
			taxaJuros: "1,79% a.m.",
			iof: "R$ 86,40",
			consultor: "Mariana Lopes",
			dadosProposta: [
				{ rotulo: "Valor solicitado", valor: "R$ 4.280,00", destaque: true },
				{ rotulo: "Prazo", valor: "10 parcelas" },
				{ rotulo: "Parcela", valor: "Desconto anual FGTS" },
				{ rotulo: "Saldo devedor", valor: "Nao se aplica" },
			],
			pendencia: {
				titulo: "Confirmar dados de contato",
				descricao: "Precisamos confirmar celular e e-mail para liberar a formalizacao assim que a analise for concluida.",
				cta: "Resolver pendencia",
			},
			etapas: [
				{
					ordem: 1,
					titulo: "Cadastro recebido",
					data: "03/07/2026",
					horario: "09:12",
				},
				{
					ordem: 2,
					titulo: "Consulta em andamento",
					data: "03/07/2026",
					horario: "10:35",
				},
				{
					ordem: 3,
					titulo: "Formalizacao",
					data: "",
					horario: "",
				},
				{
					ordem: 4,
					titulo: "Pagamento",
					data: "",
					horario: "",
				},
			],
			destaque: true,
		},
	},
  
	{
		id: "credluz",
		nome: "CredLuz",
		descricao: "Credito com validacao pela conta de energia.",
		proposta: {
			id: "012027",
			modalidade: "CredLuz",
			status: "Em analise",
			tipoStatus: "analise",
			descricaoStatus: "Estamos verificando se a conta de energia informada atende aos criterios da modalidade e se os dados do titular batem com o cadastro.",
			valor: "R$ 1.850,00",
			numero: "012027",
			instituicaoFinanceira: "Crefaz",
			taxaJuros: "2,49% a.m.",
			iof: "R$ 41,20",
			consultor: "",
			dadosProposta: [
				{ rotulo: "Valor solicitado", valor: "R$ 1.850,00", destaque: true },
				{ rotulo: "Prazo", valor: "18 parcelas" },
				{ rotulo: "Parcela", valor: "R$ 156,40" },
				{ rotulo: "Saldo devedor", valor: "Nao se aplica" },
			],
			pendencia: null,
			etapas: [
				{
					ordem: 1,
					titulo: "Cadastro recebido",
					data: "03/07/2026",
					horario: "11:20",
				},
				{
					ordem: 2,
					titulo: "Titularidade",
					data: "03/07/2026",
					horario: "11:42",
				},
				{
					ordem: 3,
					titulo: "Proposta",
					data: "",
					horario: "",
				},
			],
			destaque: false,
    	},
  	},

	{
		id: "consignado-clt",
		nome: "Consignado CLT",
		descricao: "Credito consignado para trabalhador com vinculo CLT.",
		proposta: {
			id: "012028",
			modalidade: "Consignado CLT",
			status: "Recusado por margem",
			tipoStatus: "recusado",
			descricaoStatus: "A proposta foi recusada porque a margem disponivel retornada na analise nao comporta a parcela simulada. O cliente pode consultar novas condicoes quando houver margem disponivel.",
			valor: "R$ 6.500,00",
			numero: "012028",
			instituicaoFinanceira: "Facta Financeira",
			taxaJuros: "1,92% a.m.",
			iof: "R$ 132,70",
			consultor: "Mariana Lopes",
			dadosProposta: [
				{ rotulo: "Valor solicitado", valor: "R$ 6.500,00", destaque: true },
				{ rotulo: "Prazo", valor: "24 parcelas" },
				{ rotulo: "Parcela", valor: "R$ 398,70" },
				{ rotulo: "Saldo devedor", valor: "Nao se aplica" },
			],
			pendencia: null,
			etapas: [
				{
					ordem: 1,
					titulo: "Cadastro",
					data: "02/07/2026",
					horario: "16:10",
				},
				{
					ordem: 2,
					titulo: "Vinculo CLT",
					data: "03/07/2026",
					horario: "09:05",
				},
				{
					ordem: 3,
					titulo: "Margem",
					data: "03/07/2026",
					horario: "09:48",
				},
				{
					ordem: 4,
					titulo: "Oferta",
					data: "",
					horario: "",
				},
				{
					ordem: 5,
					titulo: "Formalizacao",
					data: "",
					horario: "",
				},
			],
			destaque: false,
		},
  	},

  	{
		id: "consignado-inss",
		nome: "Consignado INSS",
		descricao: "Credito consignado para aposentados e pensionistas.",
		proposta: null,
  	},

  	{
		
		id: "refin-auto",
		nome: "Refin de veiculo",
		descricao: "Credito com garantia de veiculo e quitacao do saldo atual.",
		proposta: {
			id: "012029",
			modalidade: "Refin de veiculo",
			status: "Pendente CRLV",
			tipoStatus: "pendente",
			descricaoStatus: "A analise da garantia precisa do CRLV atualizado para confirmar os dados do veiculo, o saldo devedor e o valor liquido que pode ser liberado.",
			valor: "R$ 18.000,00",
			numero: "012029",
			instituicaoFinanceira: "Santander Financiamentos",
			taxaJuros: "1,49% a.m.",
			iof: "R$ 388,10",
			consultor: "Rafael Costa",
			dadosProposta: [
				{ rotulo: "Valor solicitado", valor: "R$ 18.000,00", destaque: true },
				{ rotulo: "Prazo", valor: "36 parcelas" },
				{ rotulo: "Parcela", valor: "R$ 724,80" },
				{ rotulo: "Saldo devedor", valor: "R$ 9.420,00" },
				{ rotulo: "Liquido estimado", valor: "R$ 8.580,00" },
				{ rotulo: "Bruto da operacao", valor: "R$ 18.000,00" },
			],
			pendencia: {
				titulo: "Enviar documento do veiculo",
				descricao: "Precisamos do CRLV atualizado para concluir a analise da garantia e confirmar o saldo devedor.",
				cta: "Enviar documento",
			},
			etapas: [
				{
					ordem: 1,
					titulo: "Cadastro",
					data: "02/07/2026",
					horario: "14:18",
				},
				{
					ordem: 2,
					titulo: "Vistoria",
					data: "03/07/2026",
					horario: "12:08",
				},
				{
					ordem: 3,
					titulo: "Saldo devedor",
					data: "",
					horario: "",
				},
				{
					ordem: 4,
					titulo: "Oferta",
					data: "",
					horario: "",
				},
				{
					ordem: 5,
					titulo: "Formalizacao",
					data: "",
					horario: "",
				},
				{
					ordem: 6,
					titulo: "Pagamento",
					data: "",
					horario: "",
				},
			],
			destaque: true,
		},
  	},
  
	{
		id: "pix-parcelado",
		nome: "PIX Parcelado",
		descricao: "Credito rapido via PIX, com pagamento parcelado.",
		proposta: {
			id: "012030",
			modalidade: "PIX Parcelado",
			status: "Aguardando autorizacao",
			tipoStatus: "aguardando",
			descricaoStatus: "A proposta esta aguardando a autorizacao do meio de pagamento para confirmar o limite disponivel e liberar a formalizacao do PIX Parcelado.",
			valor: "R$ 2.400,00",
			numero: "012030",
			instituicaoFinanceira: "BMP Money Plus",
			taxaJuros: "3,29% a.m.",
			iof: "R$ 58,90",
			consultor: "Mariana Lopes",
			dadosProposta: [
				{ rotulo: "Valor solicitado", valor: "R$ 2.400,00", destaque: true },
				{ rotulo: "Prazo", valor: "12 parcelas" },
				{ rotulo: "Parcela", valor: "R$ 268,90" },
				{ rotulo: "Saldo devedor", valor: "Nao se aplica" },
			],
			pendencia: null,
			etapas: [
				{
					ordem: 1,
					titulo: "Cadastro recebido",
					data: "01/07/2026",
					horario: "15:32",
				},
				{
					ordem: 2,
					titulo: "Simulacao",
					data: "02/07/2026",
					horario: "09:44",
				},
				{
					ordem: 3,
					titulo: "Validacao do limite",
					data: "03/07/2026",
					horario: "13:12",
				},
				{
					ordem: 4,
					titulo: "Formalizacao",
					data: "",
					horario: "",
				},
				{
					ordem: 5,
					titulo: "PIX",
					data: "",
					horario: "",
				},
			],
			destaque: false,
		},
	},
];

export const modalidadesCredito = modalidadesCreditoBase.map((modalidade) => {
	if (!modalidade.proposta) {
		return modalidade;
	}

	const resumoEtapas = obterResumoEtapas(modalidade.proposta.etapas);

	return {
		...modalidade,
		proposta: {
			...modalidade.proposta,
			etapas: resumoEtapas.etapas,
			etapaAtual: resumoEtapas.etapaAtual?.titulo || "Aguardando início",
			progresso: resumoEtapas.progresso,
		},
	};
});

export const propostasEmAnalise = modalidadesCredito
  	.filter((modalidade) => Boolean(modalidade.proposta))
		.map((modalidade) => ({...modalidade.proposta, modalidade : modalidade.proposta.modalidade || modalidade.nome,}
	)
);

export const propostas = propostasEmAnalise.map((proposta) => ({
	id: proposta.numero,
	produto: proposta.modalidade,
	descricao: proposta.descricaoStatus,
	valor: proposta.valor,
	status: proposta.status,
	etapa: proposta.etapaAtual,
	vencimento: proposta.proximaAcao,
	progresso: proposta.progresso,
	tipoStatus: proposta.tipoStatus,
	destaque: proposta.tipoStatus === "pendente" || Boolean(proposta.pendencia),
}));

export const contratosRealizados = [
  	{
		id: "CTR-8801",
		produto: "Consignado CLT",
		descricao: "Credito contratado",
		valor: "R$ 6.500,00",
		status: "Contrato realizado",
		etapa: "Pagamento concluido",
		vencimento: "Finalizado em 12/06/2026",
		progresso: 100,
		destaque: false,
  	},

  	{
		id: "CTR-7950",
		produto: "Conta digital",
		descricao: "Atualizacao cadastral validada",
		valor: "Sem custo",
		status: "Contrato realizado",
		etapa: "Dados conferidos",
		vencimento: "Finalizado em 21/05/2026",
		progresso: 100,
		destaque: false,
  	},
];

export const ofertas = [
  	{
		id: "credito-com-energia",
		titulo: "Credito com energia",
		descricao: "Oferta pre-validada usando sua fatura como referencia.",
		etiqueta: "Rapido",
		valor: "ate R$ 2.000",
		cor: "blue",
  	},
  	{
		id: "refin-veiculo",
		titulo: "Refin de veiculo",
		descricao: "Simule usando o veiculo para melhorar as condicoes.",
		etiqueta: "Taxa menor",
		valor: "a partir de 1,49%",
		cor: "yellow",
  	},
  	{
		id: "consignado-clt",
		titulo: "Consignado CLT",
		descricao: "Possibilidade de parcelas com desconto em folha.",
		etiqueta: "Novo",
		valor: "analise gratis",
		cor: "green",
  	},
];
