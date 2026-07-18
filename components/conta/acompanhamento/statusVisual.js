export const STATUS_TIPOS = {
	analise: "analise",
	recusado: "recusado",
	pendente: "pendente",
	aguardando: "aguardando"
};

export const statusVisual = {
  	analise: {
		nome: "Analisando",
		header: "bg-blue-700 text-white dark:bg-blue-600",
		headerText: "text-blue-100",
		badge: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200",
		soft: "bg-blue-400 text-blue-800 dark:bg-blue-500/10 dark:text-blue-200",
		panel: "bg-blue-400 dark:bg-blue-500/10",
		border: "border-blue-600 dark:border-blue-400",
		text: "text-blue-700 dark:text-blue-200",
		ring: "ring-blue-100 dark:ring-blue-400/15",
		progress: "bg-blue-600 dark:bg-blue-400",
		currentStep: "border-blue-600 bg-white text-blue-700 ring-blue-100 dark:border-blue-400 dark:bg-slate-950 dark:text-blue-200 dark:ring-blue-400/15",
		doneStep: "border-blue-600 bg-blue-600 text-white dark:border-blue-400 dark:bg-blue-400 dark:text-slate-950",
		line: "bg-blue-600 dark:bg-blue-400",
		description: "border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10",
		descriptionText: "text-slate-700 dark:text-slate-200"
  	},
  	recusado: {
		nome: "Recusado",
		header: "bg-red-700 text-white dark:bg-red-600",
		headerText: "text-red-100",
		badge: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-200",
		soft: "bg-red-400 text-red-700 dark:bg-red-500/10 dark:text-red-200",
		panel: "bg-red-400 dark:bg-red-500/10",
		border: "border-red-600 dark:border-red-400",
		text: "text-red-700 dark:text-red-200",
		ring: "ring-red-100 dark:ring-red-400/15",
		progress: "bg-red-600 dark:bg-red-400",
		currentStep: "border-red-600 bg-white text-red-700 ring-red-100 dark:border-red-400 dark:bg-slate-950 dark:text-red-200 dark:ring-red-400/15",
		doneStep: "border-red-600 bg-red-600 text-white dark:border-red-400 dark:bg-red-400 dark:text-slate-950",
		line: "bg-red-600 dark:bg-red-400",
		description: "border-red-600 bg-red-50 dark:border-red-400 dark:bg-red-500/10",
		descriptionText: "text-slate-700 dark:text-red-50"
  	},
  	pendente: {
		nome: "Pendente",
		header: "bg-amber-500 text-slate-950 dark:bg-amber-400",
		headerText: "text-amber-950/75 dark:text-amber-950/80",
		badge: "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-200",
		soft: "bg-amber-300 text-amber-700 dark:bg-amber-400/10 dark:text-amber-200",
		panel: "bg-amber-300 dark:bg-amber-400/10",
		border: "border-amber-500 dark:border-amber-300",
		text: "text-amber-700 dark:text-amber-200",
		ring: "ring-amber-100 dark:ring-amber-400/15",
		progress: "bg-amber-500 dark:bg-amber-300",
		currentStep: "border-amber-500 bg-white text-amber-700 ring-amber-100 dark:border-amber-300 dark:bg-slate-950 dark:text-amber-200 dark:ring-amber-400/15",
		doneStep: "border-amber-500 bg-amber-500 text-slate-950 dark:border-amber-300 dark:bg-amber-300",
		line: "bg-amber-500 dark:bg-amber-300",
		description: "border-amber-500 bg-amber-100 dark:border-amber-300 dark:bg-amber-400/10",
		descriptionText: "text-amber-950 dark:text-amber-50"
  	},
  	aguardando: {
		nome: "Aguardando",
		header: "bg-slate-700 text-white dark:bg-slate-900",
		headerText: "text-slate-300",
		badge: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
		soft: "bg-slate-400 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
		panel: "bg-slate-400 dark:bg-slate-800",
		border: "border-slate-500 dark:border-slate-400",
		text: "text-slate-700 dark:text-slate-200",
		ring: "ring-slate-100 dark:ring-slate-500/15",
		progress: "bg-slate-500 dark:bg-slate-400",
		currentStep: "border-slate-500 bg-white text-slate-700 ring-slate-100 dark:border-slate-400 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-500/15",
		doneStep: "border-slate-500 bg-slate-500 text-white dark:border-slate-400 dark:bg-slate-400 dark:text-slate-950",
		line: "bg-slate-500 dark:bg-slate-400",
		description: "border-slate-500 bg-slate-200 dark:border-slate-400 dark:bg-slate-800",
		descriptionText: "text-slate-700 dark:text-slate-200"
  	}
};

export const pendenciaButtonClass = "bg-amber-500 text-amber-900 hover:bg-amber-400 dark:bg-amber-300 dark:text-amber-50 dark:hover:bg-amber-200";

export function getStatusVisual(tipoStatus) {
  	return statusVisual[tipoStatus] || statusVisual.aguardando;
}
