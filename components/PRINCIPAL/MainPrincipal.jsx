import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import imageOne from "../../public/img/BRASAO_CINZA.png"
import imageTwo from "../../public/img/BRASAO_AZUL.png"
import cel from "../../public/img/valoreal_mobile.png"

export default function MainPrincipal() {
    return (
        <main className="p-8 pt-32 md:px-16 lg:px-32 bgMainPrincipal">
            
            <section className="grid grid-cols-1 md:grid-cols-2 poppins">
                <div className="col-span-1 md:my-16 md:ml-32">
                    
                    <h1 className="text-[2.5rem] md:text-[3.0rem] leading-[3.5rem] font-bold tracking-tight text-white">
                        <span className="text-amber-500">Seu empréstimo ONLINE</span> com múltiplas opções de créditos
                    </h1>
                    
                    <h3 className="text-white mt-8 text-xl">
                        Mais autonomia, muito mais controle e economia de tempo para você. Feito para o seu perfil.
                    </h3>
                    
                    <button className="bg-amber-500 rounded-2xl text-white py-3 px-20 mt-8 hover:bg-amber-600 duration-500">
                        Simule aqui
                    </button>
                </div>

                <div className="m-auto">
                    <Image width={200} height={395} src={cel} alt=''/>
                </div>
            </section>
        </main>
    )
}