import { AvatarFallback, Avatar } from "components/ui/avatar.jsx";
import {
  LuArrowLeft,
  LuBadgeCheck,
  LuBanknote,
  LuChevronRight,
  LuSquarePen,
  LuHouse,
  LuKeyRound,
  LuMail,
  LuShieldCheck,
  LuUserRound,
} from "react-icons/lu";
import { acoesPerfil, cliente, dadosPerfil } from "./acompanhamentoData";

function InfoItem({ rotulo, valor }) {
  	return (
      	<div className="rounded-lg border border-slate-200 p-3 dark:border-slate-800">
          	<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{rotulo}</p>
          	<p className="mt-1 wrap-break-word text-sm font-semibold text-slate-900 dark:text-white">{valor}</p>
      	</div>
  	);
}

function ActionItem({ acao, icon: Icon }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30"
    >
		<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">
			<Icon className="h-5 w-5" aria-hidden="true" />
		</span>
      	<span className="min-w-0 flex-1">
			<span className="flex flex-wrap items-center gap-2">
				<span className="font-bold text-slate-950 dark:text-white">{acao.titulo}</span>
				<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{acao.status}</span>
			</span>
        <span className="mt-1 block truncate text-sm text-slate-500 dark:text-slate-400">{acao.descricao}</span>
      </span>
      <LuChevronRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
    </button>
  );
}

export default function Perfil({ onNavigate }) {
  return (
    <div className="space-y-6">
		<header className="flex items-start gap-3">
			<button
				type="button"
				aria-label="Voltar para inicio"
				onClick={() => onNavigate("home")}
				className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
				<LuArrowLeft className="h-5 w-5" aria-hidden="true" />
			</button>
			<div>
				<p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Perfil e dados</p>
					<h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
						Sua conta
					</h1>
				<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Atualize dados para acelerar analises e liberar ofertas mais assertivas.</p>
			</div>
		</header>

		<div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
			
			<aside className="space-y-5">
				<article className="rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
					<Avatar className="mx-auto h-20 w-20 border-4 border-blue-50 dark:border-blue-500/10">
						<AvatarFallback className="bg-blue-100 text-lg font-bold tracking-wider text-blue-800 dark:bg-blue-500/15 dark:text-blue-100">{cliente.iniciais}</AvatarFallback>
					</Avatar>
					
					<h2 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">
						{cliente.nomeCompleto}
					</h2>
					
					<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
						{cliente.cpf}
					</p>

					<div className="mt-6 rounded-lg bg-slate-50 p-4 text-left dark:bg-slate-950">
						<div className="flex items-center justify-between gap-3">
							<p className="text-sm font-semibold text-slate-900 dark:text-white">
								Perfil completo
							</p>
							
							<span className="text-sm font-bold text-blue-700 dark:text-blue-300">
								{cliente.completude}%
							</span>
						</div>

						<div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
							<div className="h-2 rounded-full bg-blue-600 dark:bg-blue-400" style={{ width: `${cliente.completude}%` }} />
						</div>
						
						<p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
							Dados completos diminuem retrabalho na validacao da proposta.
						</p>
					</div>
				</article>

				<article className="rounded-lg border border-emerald-100 bg-emerald-50 p-5 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10">
					<div className="flex items-start gap-3">
						<LuShieldCheck className="mt-0.5 h-5 w-5 text-emerald-700 dark:text-emerald-200" aria-hidden="true" />
						<div>
							<h3 className="font-bold text-emerald-950 dark:text-emerald-100">Conta protegida</h3>
							<p className="mt-1 text-sm leading-relaxed text-emerald-900/75 dark:text-emerald-100/75">Suas informacoes sensiveis aparecem em ambiente autenticado.</p>
						</div>
					</div>
				</article>
			</aside>

			<main className="space-y-5">
				<section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
					<div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Informacoes pessoais</p>
							<h2 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Dados de cadastro</h2>
						</div>

						<button
							type="button"
							className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400">

							<LuSquarePen className="h-4 w-4" aria-hidden="true" />
							Editar dados
						</button>
					</div>
					<div className="grid gap-3 md:grid-cols-2">
						{dadosPerfil.map((item) => (
							<InfoItem key={item.rotulo} rotulo={item.rotulo} valor={item.valor} />
						))}
					</div>
				</section>

				<section>
					<div className="mb-3 flex items-center justify-between gap-3">
						<div>
							<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Atualizacoes rapidas</p>
							<h2 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">O que voce pode gerenciar</h2>
						</div>
						<LuBadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-300" aria-hidden="true" />
					</div>

					<div className="grid gap-3">
						{acoesPerfil.map((acao, index) => {
							const icons = [LuHouse, LuBanknote, LuKeyRound, LuMail];
							const Icon = icons[index] || LuUserRound;

							return <ActionItem key={acao.titulo} acao={acao} icon={Icon} />;
						})}
					</div>
				</section>
			</main>
		</div>
    </div>
  );
}
