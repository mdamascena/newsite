import {
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleX,
  Clock3,
  FileCheck2,
  History,
  Moon,
  Search,
  Sparkles,
  Sun,
  WalletCards,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { cliente, contratosRealizados, modalidadesCredito, ofertas, propostasEmAnalise } from "./acompanhamentoData";
import { getStatusVisual, pendenciaButtonClass } from "./statusVisual";

const statusBadgeBaseClass = "inline-flex h-7 w-fit shrink-0 items-center gap-1.5 rounded-full border border-black/5 px-3 text-xs font-bold leading-none dark:border-white/10";
const statusBadgeSmallClass = "inline-flex w-fit items-center gap-1.5 rounded-full border border-black/5 px-2.5 py-1 text-[11px] font-bold leading-none dark:border-white/10";
const neutralBadgeClass = "inline-flex h-7 w-fit shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-3 text-xs font-bold leading-none text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300";

// Icones usados para sinalizar cada tipo de status da proposta.
const statusIconMap = {
	analise: Search,
	pendente: CircleAlert,
	recusado: CircleX,
	aguardando: Clock3,
	aprovado: CheckCircle2
};

// Retorna o icone correto para o status atual da proposta.
function getStatusIcon(tipoStatus) {
  	return statusIconMap[tipoStatus] || Clock3;
}

// Converte valores em formato BRL mockado para numero e soma dos cards.
function currencyToNumber(value = "") {
	const normalized = String(value).replace(/[^\d,]/g, "").replace(",", ".");
	return Number(normalized) || 0;
}

// Formata totais monetarios exibidos nos cards de resumo.
function formatCurrency(value) {
  	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL"
  	}).format(value);
}

// Formata datas das etapas no padrao dd/mm/aa.
function formatStepDate(date = "") {
	const [day, month, year] = String(date).split("/");

	if (!day || !month || !year) {
		return date;
	}

	return `${day}/${month}/${year.slice(-2)}`;
}

// Botao de troca entre tema claro e escuro.
function ThemeToggleButton() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<button
			type="button"
			aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
			{isDark ? (
				<Moon className="h-5 w-5" aria-hidden="true" />
			) : (
				<Sun className="h-5 w-5" aria-hidden="true" />
			)}
		</button>
	);
}

// Etapas da analise da proposta.
function PropostaSteps({ etapas = [], visual = getStatusVisual() }) {
	if (!etapas.length) {
		return (
			<div className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
				Etapas ainda nao informadas pelo CRM.
			</div>
		);
	}

	return (
		<ol className="grid gap-3 md:grid-flow-col md:auto-cols-fr">
			{etapas.map((etapa, index) => {
				const isDone = etapa.estado === "done";
				const isCurrent = etapa.estado === "current";
				const hasStepDate = etapa.data && etapa.data !== "A definir";
				const hasStepTime = hasStepDate && etapa.horario && !["A definir", "Proxima etapa", "Final"].includes(etapa.horario);
				const stepDate = hasStepDate ? formatStepDate(etapa.data) : "";
				const desktopDateTime = [stepDate, hasStepTime ? etapa.horario : null].filter(Boolean).join(" • ");
				const titleClass = isDone || isCurrent ? visual.text : "text-slate-400 dark:text-slate-500";

				return (
					<li key={`${etapa.titulo}-${index}`} className="relative">
						{index < etapas.length - 1 && (
							<span className={`absolute left-5 top-10 h-[calc(100%-1.25rem)] w-0.5 md:left-[calc(50%+1.25rem)] md:right-[calc(-50%+1.25rem)] md:top-12 md:h-0.5 md:w-auto ${
								isDone ? visual.line : "bg-slate-200 dark:bg-slate-800"
							}`} aria-hidden="true" />
						)}

						<div className="relative flex gap-3 md:flex-col md:items-center md:text-center">
							<span className="hidden h-4 text-[10px] font-semibold leading-4 text-slate-400 dark:text-slate-500 md:block">
								{hasStepDate ? desktopDateTime : ""}
							</span>
							<span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm ${
								isDone
									? visual.doneStep
									: isCurrent
										? `${visual.currentStep} ring-4`
										: "border-slate-200 bg-white text-slate-400 dark:border-slate-700 dark:bg-slate-900"
							}`}>
								{isDone ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : index + 1}
							</span>

							<div className="min-w-0 pb-5 md:pb-0">
								<h3 className={`text-sm font-bold ${titleClass}`}>{etapa.titulo}</h3>
								{hasStepDate && (
									<p className="mt-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500 md:hidden">
										<span>{desktopDateTime}</span>
									</p>
								)}
							</div>
						</div>
					</li>
				);
			})}
		</ol>
	);
}

// Card Dados da proposta.
function DadosProposta({ proposta }) {
	const [isOpen, setIsOpen] = useState(false);
	const dadosFinanceiros = [
		{ rotulo: "Instituicao financeira", valor: proposta.instituicaoFinanceira || "A definir" },
		{ rotulo: "Taxa de juros", valor: proposta.taxaJuros || "A definir" },
		{ rotulo: "IOF", valor: proposta.iof || "A definir" },
	];
	const dadosOperacao = (proposta.dadosProposta || []).filter((dado) => dado.rotulo !== "Valor solicitado");
	const dados = [...dadosFinanceiros, ...dadosOperacao];

	return (
		<article className="rounded-lg border border-slate-300 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
			<button
				type="button"
				aria-expanded={isOpen}
				onClick={() => setIsOpen((current) => !current)}
				className="flex w-full items-start justify-between gap-4 p-5 text-left md:pointer-events-none md:p-6">

				<span>
					<span className="text-xs font-semibold uppercase tracking-wide text-slate-400">Dados da proposta</span>
					<strong className="mt-2 block text-2xl text-slate-950 dark:text-white">{proposta.valor}</strong>
					<span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Valor solicitado</span>
				</span>
				
				<ChevronDown
					className={`mt-1 h-5 w-5 text-slate-400 transition md:hidden ${isOpen ? "rotate-180" : ""}`}
					aria-hidden="true"
				/>
			</button>

			<div className={`${isOpen ? "block" : "hidden"} border-t border-slate-300 px-5 pb-5 dark:border-slate-800 md:block md:px-6 md:pb-6`}>
				<dl className="divide-y divide-slate-300 dark:divide-slate-800">
					<div className="flex items-center justify-between gap-4 py-3">
						<dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Proposta</dt>
						<dd className="text-right text-sm font-bold text-slate-950 dark:text-white">{proposta.numero}</dd>
					</div>
					{dados.map((dado) => (
						<div key={dado.rotulo} className="flex items-center justify-between gap-4 py-3">
							<dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{dado.rotulo}</dt>
							<dd className="text-right text-sm font-bold text-slate-950 dark:text-white">{dado.valor}</dd>
						</div>
					))}
				</dl>
			</div>
		</article>
	);
}

// Card exibido quando nao existe proposta em analise.
function EmptyProposta({ modalidade, onNavigate }) {
	return (
		<section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
			<div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-950/70">
				<FileCheck2 className="h-9 w-9 text-slate-400" aria-hidden="true" />
				<h2 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
					{modalidade ? "Nada em analise agora" : "Nenhuma proposta em acompanhamento"}
				</h2>
				<p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
					{modalidade
						? "Esta modalidade existe para o cliente, mas o CRM nao retornou nenhuma proposta ativa no momento."
						: "Quando houver uma proposta em analise, as etapas e os dados financeiros aparecem aqui."}
				</p>
				{modalidade && (
					<button
						type="button"
						onClick={() => onNavigate?.("ajuda")}
						className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
					>
						Falar com atendimento
						<ChevronRight className="h-4 w-4" aria-hidden="true" />
					</button>
				)}
			</div>
		</section>
	);
}

// Cards Acompanhamento e Dados da proposta.
function PropostaPrincipal({ modalidade, onNavigate }) {
	if (!modalidade || !modalidade.proposta) {
		return <EmptyProposta modalidade={modalidade} onNavigate={onNavigate} />;
	}

	const proposta = modalidade.proposta;
	const visual = getStatusVisual(proposta.tipoStatus);
	const StatusIcon = getStatusIcon(proposta.tipoStatus);
	const hasPendencia = Boolean(proposta.pendencia);

	return (
		<section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
			{/* Card Acompanhamento */}
			<article className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
				{/* Cabecalho do acompanhamento */}
				<div className="border-b border-slate-300 rounded-t-lg p-5 dark:border-slate-800 sm:p-6">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Acompanhamento</p>
							<h2 className="mt-1 text-2xl font-bold leading-tight text-slate-950 dark:text-white">{proposta.modalidade}</h2>
							<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Proposta {proposta.numero}</p>
						</div>
						<span className={`${statusBadgeBaseClass} ${visual.badge}`}>
							<StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
							{proposta.tipoStatus}
						</span>
					</div>
				</div>

				{/* Fluxo de etapas da proposta */}
				<div className="p-5 sm:p-6">
					<div className="mb-5 flex items-center justify-between gap-3">
						<div>
							{/* <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Etapas da analise</p> */}
							<h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Fluxo da proposta</h3>
						</div>
						<span className={neutralBadgeClass}>
							{proposta.progresso}%
						</span>
					</div>

					<PropostaSteps etapas={proposta.etapas} visual={visual} />
				</div>

				{/* Cards Etapa, Status e Descricao */}
				<div className="grid gap-5 border-t border-slate-100 p-5 dark:border-slate-800 sm:p-6">

					<div className="space-y-4">
						<div className="grid gap-3 sm:grid-cols-2">
							<div className={`rounded-lg p-4 ${visual.panel}`}>
								<p className={`text-xs font-semibold uppercase tracking-wide ${visual.text}`}>Etapa</p>
								<strong className="mt-1 block text-base text-white">{proposta.etapaAtual}</strong>
							</div>
							<div className={`rounded-lg p-3 flex items-center ${visual.soft}`}>
								<div className="flex items-center gap-3">
									<StatusIcon className={`h-7 w-7 ${visual.text}`} aria-hidden="true" />
									<div>
										<p className={`text-xs font-semibold uppercase tracking-wide ${visual.text}`}>Status</p>
										<strong className="mt-1 block text-base text-white">{proposta.status}</strong>
									</div>
								</div>
							</div>
						</div>

						<div className={`rounded-lg border-l-16 p-4 ${visual.description}`}>
							<p className={`text-xs font-semibold uppercase tracking-wide ${visual.text}`}>Descricao do status</p>
							<p className={`mt-2 text-sm leading-relaxed ${visual.descriptionText}`}>{proposta.descricaoStatus}</p>
							{hasPendencia && (
								<button
									type="button"
									onClick={() => onNavigate?.("perfil")}
									className={`mt-4 inline-flex items-center justify-center rounded-lg px-16 py-3 text-sm font-semibold transition ${pendenciaButtonClass}`}>
									Enviar pendencia
								</button>
							)}
						</div>
					</div>
				</div>
			</article>

			{/* Card Dados da proposta */}
			<DadosProposta proposta={proposta} />
		</section>
	);
}

// Estrutura visual dos quatro cards destacados no topo da Home.
function MetricCard({ icon: Icon, label, value, detail }) {
	return (
		<article className="rounded-lg shadow-md bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
			<div className="flex items-start justify-between gap-3">
				<div>
					<p className="text-xs font-semibold uppercase tracking-wide text-blue-500">{label}</p>
					<strong className="mt-2 block text-xl text-slate-400">{value}</strong>
				</div>
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-300">
					<Icon className="h-6 w-6" aria-hidden="true" />
				</span>
			</div>
			<p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{detail}</p>
		</article>
	);
}

// Card Modalidades de credito.
function SeletorPropostas({ modalidades, modalidadeSelecionadaId, onSelect }) {
	if (modalidades.length <= 1) {
		return null;
	}

	return (
		<section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
			<div className="mb-3">
				{/* <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Modalidades de credito</p> */}
				<h2 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Escolha uma proposta para acompanhar</h2>
			</div>

			<div className="-mx-1 overflow-x-auto px-1 pb-1">
				<div className="grid grid-flow-col auto-cols-[minmax(165px,1fr)] gap-3">
					{modalidades.map((modalidade) => {
						const proposta = modalidade.proposta;
						const isActive = modalidadeSelecionadaId === modalidade.id;
						const visual = getStatusVisual(proposta?.tipoStatus);
						const StatusIcon = getStatusIcon(proposta?.tipoStatus);

						return (
							<button
								key={modalidade.id}
								type="button"
								onClick={() => onSelect(modalidade.id)}
								aria-pressed={isActive}
								className={`rounded-lg bg-slate-100 p-3 text-left duration-150 ${
									isActive
										? "border border-slate-400 bg-slate-300 dark:border-blue-400 dark:bg-blue-500/10"
										: "border-slate-200 bg-slate-50 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
									}`
								}>

								<div className="flex flex-col justify-between gap-3">
									<div>
										<p className="text-sm font-bold leading-snug text-slate-950 dark:text-white">{modalidade.nome}</p>
										<p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
											Proposta {proposta.numero}
										</p>
									</div>
									{/* <span className={`${statusBadgeSmallClass} ${visual.badge}`}>
										<StatusIcon className="h-3 w-3" aria-hidden="true" />
										{proposta.status}
									</span> */}
								</div>

							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}

// Menu aberto pelo sino de notificacoes.
function NotificationMenu({ onNavigate, onClose }) {
	const hasOfertas = ofertas.length > 0;

	return (
		<div className="absolute right-0 top-14 z-30 w-[min(20rem,calc(100vw-2rem))] rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
			<div className="px-3 py-2">
				<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Notificacoes</p>
				<h2 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">Atualizacoes recentes</h2>
			</div>

			{hasOfertas ? (
				<div className="space-y-1">
					{ofertas.map((oferta) => (
						<button
							key={oferta.id || oferta.titulo}
							type="button"
							onClick={() => {
								onClose?.();
								onNavigate?.("ofertas", { ofertaId: oferta.id });
							}}
							className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800"
						>
							<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
								<Sparkles className="h-4 w-4" aria-hidden="true" />
							</span>
							<span>
								<span className="block text-sm font-bold text-slate-950 dark:text-white">{oferta.titulo}</span>
								<span className="mt-1 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">{oferta.valor}</span>
							</span>
						</button>
					))}
				</div>
			) : (
				<p className="px-3 py-4 text-sm text-slate-500 dark:text-slate-400">Nenhuma notificacao no momento.</p>
			)}
		</div>
	);
}

export default function Home({ onNavigate }) {
	const modalidadesComProposta = useMemo(() => modalidadesCredito.filter((modalidade) => Boolean(modalidade.proposta)), []);
	const primeiraModalidadeId = modalidadesComProposta[0]?.id || modalidadesCredito[0]?.id || "";
	const [modalidadeSelecionadaId, setModalidadeSelecionadaId] = useState(primeiraModalidadeId);
	const [showNotifications, setShowNotifications] = useState(false);
	const modalidadeSelecionada = modalidadesCredito.find((modalidade) => modalidade.id === modalidadeSelecionadaId) || modalidadesComProposta[0] || modalidadesCredito[0] || null;
	const totalEmAnalise = formatCurrency(propostasEmAnalise.reduce((total, proposta) => total + currencyToNumber(proposta.valor), 0));
	const totalPendencias = propostasEmAnalise.filter((proposta) => proposta.tipoStatus === "pendente" || proposta.pendencia).length;

	useEffect(() => {
		if (!modalidadeSelecionadaId && primeiraModalidadeId) {
			setModalidadeSelecionadaId(primeiraModalidadeId);
		}
	}, [modalidadeSelecionadaId, primeiraModalidadeId]);
	
	return (
		<div className="space-y-6">
			{/* Cabecalho da Home */}
			<header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					{/* <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Area do cliente</p> */}
					<h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">Ola, {cliente.primeiroNome}</h1>
					<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Acompanhe o andamento das propostas e os dados principais da sua conta.</p>
				</div>

				<div className="flex items-center gap-2">
					<div className="relative">
						<button
							type="button"
							aria-label="Abrir notificacoes"
							aria-expanded={showNotifications}
							onClick={() => setShowNotifications((current) => !current)}
							className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
							<Bell className="h-5 w-5" aria-hidden="true" />
							{ofertas.length > 0 && (
								<span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-blue-700 px-1 text-[11px] font-bold leading-none text-white dark:border-slate-900 dark:bg-blue-400 dark:text-slate-950">
									{ofertas.length}
								</span>
							)}
						</button>
						{showNotifications && <NotificationMenu onNavigate={onNavigate} onClose={() => setShowNotifications(false)} />}
					</div>
					<ThemeToggleButton />
				</div>
			</header>

			{/* BLOCO DA IMAGEM: quatro cards do topo da Home */}
			<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{/* Dados das propostas: valor total em analise */}
				<MetricCard
					icon={WalletCards}
					label="Total em analise"
					value={totalEmAnalise}
					detail={`${propostasEmAnalise.length} propostas em acompanhamento`}
				/>
				{/* Dados das propostas: quantidade de propostas abertas */}
				<MetricCard icon={Clock3} label="Propostas abertas" value={propostasEmAnalise.length} detail="Antes da contratacao" />
				{/* Dados das propostas: pendencias do cliente */}
				<MetricCard icon={CircleAlert} label="Pendencias" value={totalPendencias} detail="Acoes que dependem do cliente" />
				{/* Dados das propostas: contratos realizados */}
				<MetricCard icon={History} label="Contratos realizados" value={contratosRealizados.length} detail="Operacoes ja contratadas" />
			</section>

			{/* Card Modalidades de credito */}
			<SeletorPropostas
				modalidades={modalidadesComProposta}
				modalidadeSelecionadaId={modalidadeSelecionada?.id}
				onSelect={setModalidadeSelecionadaId}
			/>

			{/* Cards Acompanhamento e Dados da proposta */}
			<PropostaPrincipal modalidade={modalidadeSelecionada} onNavigate={onNavigate} />
		</div>
	);
}
