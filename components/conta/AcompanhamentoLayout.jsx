import SideBar from "../geral/Sidebar";

export default function AcompanhamentoLayout({ children }) {
  return (
    <div className="md:flex">
      <SideBar />
      <main className="w-full">{children}</main>
    </div>
  );
}
