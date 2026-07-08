import { useState } from "react";
import { ArrowDownToLine, ArrowLeft, CheckCircle2, Clock3, FileSignature, FileText, Search, ShieldCheck } from "lucide-react";
import { contratosRealizados, propostas } from "./acompanhamentoData";
import { getStatusVisual, pendenciaButtonClass } from "./statusVisual";

function RegistroCard({ registro, tipo }) {
  const isContrato = tipo === "contrato";
  const visual = getStatusVisual(registro.tipoStatus);
  const isPendente = registro.tipoStatus === "pendente";

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-4">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
            isContrato
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200"
              : visual.soft
          }`}>
            {isContrato ? <CheckCircle2 className="h-6 w-6" aria-hidden="true" /> : <FileSignature className="h-6 w-6" aria-hidden="true" />}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-slate-950 dark:text-white">{registro.produto}</h2>
              {!isContrato && (
                <span className={`rounded-full px-2 py-1 text-[11px] font-bold ${visual.badge}`}>{visual.nome}</span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{registro.descricao}</p>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{isContrato ? "Contrato" : "Proposta"}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">{registro.id}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Valor</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">{registro.valor}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{isContrato ? "Conclusao" : "Previsao"}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white">{registro.vencimento}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${
            isContrato
              ? "border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              : isPendente
                ? pendenciaButtonClass
                : "bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
          }`}
        >
          {isContrato ? (
            <>
              <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
              Baixar contrato
            </>
          ) : (
            <>
              <FileSignature className="h-4 w-4" aria-hidden="true" />
              {isPendente ? "Resolver pendencia" : "Continuar proposta"}
            </>
          )}
        </button>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>{registro.etapa}</span>
          <span>{registro.progresso}%</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
          <div className={`h-2 rounded-full ${isContrato ? "bg-emerald-500" : visual.progress}`} style={{ width: `${registro.progresso}%` }} />
        </div>
      </div>
    </article>
  );
}

export default function Historico({ onNavigate }) {
  const [abaSelecionada, setAbaSelecionada] = useState("propostas");
  const registros = abaSelecionada === "propostas" ? propostas : contratosRealizados;

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            aria-label="Voltar para inicio"
            onClick={() => onNavigate("home")}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Historico</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">Propostas e contratos</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Proposta e o que ainda nao foi contratado; contrato e o que ja foi realizado.</p>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Buscar historico
        </button>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Propostas abertas</p>
              <strong className="mt-1 block text-2xl text-slate-950 dark:text-white">{propostas.length}</strong>
            </div>
            <Clock3 className="h-6 w-6 text-amber-500" aria-hidden="true" />
          </div>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Contratos realizados</p>
              <strong className="mt-1 block text-2xl text-slate-950 dark:text-white">{contratosRealizados.length}</strong>
            </div>
            <CheckCircle2 className="h-6 w-6 text-emerald-500" aria-hidden="true" />
          </div>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Seguranca</p>
              <strong className="mt-1 block text-lg text-slate-950 dark:text-white">Validacao digital</strong>
            </div>
            <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden="true" />
          </div>
        </article>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid grid-cols-2 gap-2">
          {[
            { id: "propostas", label: "Propostas", count: propostas.length },
            { id: "contratos", label: "Contratos", count: contratosRealizados.length },
          ].map((aba) => (
            <button
              key={aba.id}
              type="button"
              aria-pressed={abaSelecionada === aba.id}
              onClick={() => setAbaSelecionada(aba.id)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                abaSelecionada === aba.id
                  ? "bg-blue-700 text-white shadow-sm dark:bg-blue-500 dark:text-slate-950"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {aba.label} ({aba.count})
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        {registros.length > 0 ? (
          registros.map((registro) => (
            <RegistroCard key={registro.id} registro={registro} tipo={abaSelecionada === "contratos" ? "contrato" : "proposta"} />
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
            <FileText className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" />
            <p className="mt-3 font-semibold text-slate-900 dark:text-white">Nenhum registro por aqui.</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Quando houver novidades, elas aparecem nesta area.</p>
          </div>
        )}
      </section>
    </div>
  );
}
