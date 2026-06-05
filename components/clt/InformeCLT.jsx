import { PiUsersThreeLight } from "react-icons/pi";

export default function InformeCLT() {
    return (
        <section className="py-44">
            <div className="container-custom">
                <div className="grid grid-cols-4 gap-3">

                    <div className="col-span-2 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-[url('/img/bg-clt-notebook.jpg')] bg-cover bg-center" />

                        <div className="rounded-2xl h-62 w-full bg-blue-700 overflow-hidden">
                            <PiUsersThreeLight className="text-white text-5xl ml-5 mt-5 rounded-full p-2 bg-white/20" />
                            <p className="text-white text-2xl ml-5 mt-5">+10.000 clientes</p>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-slate-800" />

                        <div className="rounded-2xl h-62 w-full bg-[url('/img/perso_jap.jpg')] bg-cover bg-center" />
                    </div>

                    <div className="col-span-1 rounded-2xl h-full w-full bg-[url('/img/perso_s.png')] bg-cover bg-center" />
                </div>
            </div>
        </section>
    );
}