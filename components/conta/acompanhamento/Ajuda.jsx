import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/ui/selectFC";

const WP = "https://bit.ly/wa-plancredi-api";
const TEL = "tel:8008789853";

const canais = [
  {
    titulo: "WhatsApp",
    descricao: "Fale com a equipe pelo canal digital.",
    detalhe: "Atendimento online",
    href: WP,
    icon: MessageCircle,
    tone: "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200",
  },
  {
    titulo: "0800",
    descricao: "Fale gratuitamente com nossos especialistas.",
    detalhe: "0800 878 9853",
    href: TEL,
    icon: Phone,
    tone: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200",
  },
  {
    titulo: "Fale conosco",
    descricao: "Envie uma mensagem com o assunto da sua solicitação.",
    detalhe: "Resposta por e-mail",
    href: "#form-ajuda",
    icon: Mail,
    tone: "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
  },
];

export default function Ajuda({ onNavigate }) {
  const [assunto, setAssunto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-6">
      <header className="flex items-start gap-3">
        <button
          type="button"
          aria-label="Voltar para inicio"
          onClick={() => onNavigate("home")}
          className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">Ajuda</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">Como podemos ajudar?</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Escolha um canal ou envie uma mensagem para o suporte.</p>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {canais.map((canal) => {
          const Icon = canal.icon;
          const isExternal = canal.href.startsWith("http");

          return (
            <Link
              key={canal.titulo}
              href={canal.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/30"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${canal.tone}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{canal.titulo}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{canal.descricao}</p>
              <p className="mt-4 text-sm font-semibold text-blue-700 dark:text-blue-300">{canal.detalhe}</p>
            </Link>
          );
        })}
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">
                <Headphones className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-bold text-slate-950 dark:text-white">Central de atendimento</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Segunda a sexta-feira, das 9h as 18h, exceto feriados.</p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200">
                <Clock3 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-bold text-slate-950 dark:text-white">Retorno organizado</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Use o formulário para assuntos de contrato, cancelamento, quitação, dúvidas ou reclamações.</p>
              </div>
            </div>
          </article>
        </aside>

        <article id="form-ajuda" className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Fale conosco</p>
            <h2 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">Envie sua mensagem</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3">
            <Select value={assunto} onValueChange={setAssunto}>
              <SelectTrigger className="h-11 bg-slate-50 text-slate-600 focus:ring-blue-500 dark:bg-slate-950 dark:text-slate-200">
                <SelectValue placeholder="Escolha o assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione o assunto</SelectLabel>
                  <SelectItem value="quitacao">Quitação</SelectItem>
                  <SelectItem value="cancelamento">Cancelamento</SelectItem>
                  <SelectItem value="contrato">Cópia de contrato</SelectItem>
                  <SelectItem value="reclamacao">Dúvidas/Reclamações</SelectItem>
                  <SelectItem value="outros">Outros assuntos</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="grid gap-3 md:grid-cols-2">
              <Input className="h-11 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-blue-500 dark:bg-slate-950" placeholder="Seu nome completo" />
              <Input className="h-11 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-blue-500 dark:bg-slate-950" type="email" placeholder="Seu e-mail" />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <Input className="h-11 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-blue-500 dark:bg-slate-950" placeholder="CPF ou protocolo" />
              <Input className="h-11 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-blue-500 dark:bg-slate-950" placeholder="Telefone para contato" />
            </div>

            <Textarea className="min-h-32 bg-slate-50 placeholder:text-slate-400 focus-visible:ring-blue-500 dark:bg-slate-950" placeholder="Escreva aqui sua mensagem" />

            <button
              type="submit"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar mensagem
            </button>
          </form>
        </article>
      </section>
    </div>
  );
}
