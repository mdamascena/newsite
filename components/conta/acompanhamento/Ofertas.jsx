import {
  LuArrowLeft,
  LuBadgePercent,
  LuChevronRight,
  LuSparkles,
  LuTags,
  LuWalletCards,
} from "react-icons/lu";
import { useEffect } from "react";
import { ofertas } from "./acompanhamentoData";

const ofertaIcons = [LuBadgePercent, LuWalletCards, LuTags];

function OfertaCard({ oferta, index, isTarget }) {
  const Icon = ofertaIcons[index % ofertaIcons.length];

  return (
    <article
      id={oferta.id}
      className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition dark:border-slate-800 dark:bg-slate-900 ${
        isTarget ? "ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-50 dark:ring-blue-400 dark:ring-offset-slate-950" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
            {oferta.etiqueta}
          </span>
          <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{oferta.titulo}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{oferta.descricao}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <strong className="text-sm text-slate-950 dark:text-white">{oferta.valor}</strong>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
        >
          Simular oferta
          <LuChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function Ofertas({ onNavigate, targetOfertaId }) {
  useEffect(() => {
    if (!targetOfertaId) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(targetOfertaId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [targetOfertaId]);

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
            <LuArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Ofertas</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">Ofertas disponiveis</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Condicoes disponiveis para novas simulacoes.</p>
          </div>
        </div>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Total de ofertas</p>
            <strong className="mt-1 block text-2xl text-slate-950 dark:text-white">{ofertas.length}</strong>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <LuSparkles className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {ofertas.map((oferta, index) => (
          <OfertaCard key={oferta.id || oferta.titulo} oferta={oferta} index={index} isTarget={targetOfertaId === oferta.id} />
        ))}
      </section>
    </div>
  );
}
