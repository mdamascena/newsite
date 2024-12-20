import Image from "next/image"
import { BtnCalc } from "./styles"
import cel from "../../public/img/PERSO_LUZ_2.png"
import light from "../../public/img/LAMPADA.png"
import SectioDescrisao from "./Descricao"
import SectioComoFunciona from "./ComoFunciona"
import SectioRegrasGerais from "./RegrasGeais"
import SectioRegioes from "./Regioes"
import SectioAnalise from "../geral/section/Analise"
import {HiCheck} from 'react-icons/hi'
import { useRouter } from 'next/router'

export default function MainPrincipal() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('credluz-fast/cadastro');
    }

  return (
    <main>
        <section className="bgMainPrincipal">
            
            <div className="bgBrasaoFast">
                
                <div className="pb-5 lg:pb-0 pt-20 container-custom">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        <figure className="mx-auto block lg:hidden mt-2">
                            <Image src={light} width={200} height={160} alt="" />
                        </figure>

                        <figure className=" mt-8 hidden lg:flex justify-end">
                            <Image className="" width={490} src={cel} alt="" />
                        </figure>

                        <div className="col-span-1 lg:my-auto select-none">

                            <h1 className="text-[2.5rem] lg:text-[3.8rem] leading-tight lg:leading-[50px] font-semibold tracking-tighter text-center lg:text-left text-yellow-400 saturate-200">
                                Empréstimo
                            </h1>

                            <h2 className="lg:flex items-center text-[1.8rem] lg:text-[2.8rem] leading-tight lg:leading-[50px] font-semibold tracking-tighter text-center lg:text-left text-white">
                                Débito na conta de<div className="text-7xl ml-2 tracking-tighter font-semibold" style={{ textShadow: "0px 0px 20px white" }}>LUZ</div>
                            </h2>

                            <div className="text-white ml-2 lg:ml-0">
                                
                                <div className="leading-5 mt-5 text-md flex items-center">
                                    <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg ">Sem comprovação de renda</span>
                                </div>
                                
                                <div className="leading-5 mt-2 text-md flex items-center">
                                    <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg">Possibilidade para negativados *</span>
                                </div>
                                
                                <div className="leading-5 mt-2 text-md flex items-center">
                                    <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg">Liberação em menos de 24h **</span>
                                </div>
                                
                                <div className="leading-5 mt-2 text-md flex items-center">
                                    <HiCheck className="rounded-lg bg-yellow-100 text-yellow-500 text-2xl"/>
                                    <span className="ml-2 lg:text-lg">Limite de até R$ 3.300,00 *</span>
                                </div>

                            </div>

                            <div className="text-center md:text-left">
                                <BtnCalc onClick={handleRedirect}>Contrate agora</BtnCalc>
                            </div>

                            <div className="text-[12px] text-white mt-5 text-center lg:text-start">
                                <p>Crédito sujeito à análise *</p>
                                <p>Liberações ocorrem em dias úteis **</p>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
        <SectioDescrisao />
        <SectioComoFunciona />
        <SectioRegrasGerais />
        <SectioRegioes />
        <SectioAnalise />
    </main>
  );
}
