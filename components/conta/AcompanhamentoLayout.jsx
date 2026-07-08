import SideBar from "../geral/Sidebar";

export default function AcompanhamentoLayout({ children, activeView, onViewChange }) {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 md:flex">
      	<SideBar activeView={activeView} onViewChange={onViewChange} />
		<main className="w-full pb-24 md:pb-0">
			<div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
				{children}
			</div>
		</main>
    </div>
  );
}
