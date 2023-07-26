import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import imageOne from "../../public/img/BRASAO_CINZA.png"
import imageTwo from "../../public/img/BRASAO_AZUL.png"

export default function MainPrincipal() {
    return (
        <main className="p-8 pt-32 md:px-16 lg:px-32 bgMainPrincipal h-[100vh]">
            <section className="grid grid-cols-1 md:grid-cols-2 poppins">

                <div className="">
                    <h1 className="text-[3.0rem] leading-[3.5rem] font-bold tracking-tight text-white"><span className="text-amber-500">Seu empréstimo ONLINE</span> com múltiplas opções de créditos</h1>
                    <h3 className="text-white mt-8 text-md">Mais autonomia, muito mais controle e economia de tempo para você. Feito para o seu perfil.</h3>
                    <button className="bg-amber-500 rounded-2xl text-white py-3 px-16 mt-4 hover:bg-sky-800 duration-500">Simule aqui</button>
                </div>

                {/*<div className="">
                    <Carousel className=" "
                        autoPlay={'true'}
                        infiniteLoop={'true'}
                        centerMode={'true'}
                        centerSlidePercentage={50}
                        showThumbs={'true'}
                        showStatus={''}
                        showIndicators={''}
                        interval={5000}
                        dynamicHeight={'true'}
                        swipeable={'false'}>

                        <div>
                            <Image width={50} height={50} src={imageOne} alt="Imagem teste" />
                        </div>

                        <div>
                            <Image width={50} height={50} src={imageTwo} alt="Imagem teste2" />
                        </div>
                    </Carousel>
                </div>*/}
            </section>
        </main>
    )
}