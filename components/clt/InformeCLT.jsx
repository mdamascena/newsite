import InformeCLTCarousel from "./InformeCLTCarousel";
import { PiUsersThreeLight } from "react-icons/pi";
import { PiTrendDown } from "react-icons/pi";

export default function InformeCLT() {
    return (
        <section className="pb-44 bg-slate-100">
            <div className="container-custom">
                <div className="lg:grid grid-cols-4 gap-3 hidden">
                    <div className="col-span-2 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-[url('/img/bg-clt-notebook.jpg')] bg-cover bg-center" />

                        <div className="rounded-2xl h-62 w-full bg-blue-700 overflow-hidden">
                            <PiUsersThreeLight className="text-white text-5xl ml-5 my-5 rounded-full p-2 bg-white/20" />
                            <div className="text-white p-5">
                                <p className="text-blue-400 text-2xl mb-2">+ Acessibilidade</p>
                                <p className="font-extralight">
                                    Disponível para qualquer trabalhador CLT, com possibilidade mesmo estando negativado
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 grid gap-y-3">
                        <div className="rounded-2xl h-62 w-full bg-slate-800">
                            <PiTrendDown className="text-white text-5xl ml-5 my-5 rounded-full p-2 bg-white/20" />
                            <div className="text-white p-5">
                                <p className="text-slate-400 text-2xl mb-2">% Menos juros</p>
                                <p className="font-extralight">
                                    Muito mais baixo por ser descontado direto do seu salário
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl h-62 w-full bg-[url('/img/perso_jap.jpg')] bg-cover bg-center" />
                    </div>

                    <div className="col-span-1 rounded-2xl h-full w-full bg-[url('/img/perso_s.png')] bg-cover bg-center" />
                </div>
            </div>

            <InformeCLTCarousel />
        </section>
    );
}
