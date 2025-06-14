import SideBar from "../../../components/geral/Sidebar"

export default function Acompanhamento({ children }) {
    return (
    <div className="md:flex">
        <SideBar />
        <main className="w-full">
            {children}
        </main>
    </div>
  )
}
