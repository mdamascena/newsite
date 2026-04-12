import { RiShieldCheckLine } from 'react-icons/ri'
import { IoPodiumOutline, IoWalletOutline } from 'react-icons/io5'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { CardVantMais, DesCardMais, BtnMais } from '../styles'
import { CometCard } from '../../ui/comet-card'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const cards = [
    {
        title: 'Mais Opções',
        description: 'Diversas modalidades de empréstimo ao seu alcance em um só lugar',
        icon: IoWalletOutline,
    },
    {
        title: 'Mais Rápido',
        description: 'A gente faz tudo mais rápido para seu empréstimo ser liberado',
        icon: AiOutlineFieldTime,
    },
    {
        title: 'Mais Ofertas',
        description: 'Os melhores bancos com as melhores ofertas de crédito do mercado',
        icon: IoPodiumOutline,   
    },
    {
        title: 'Mais Seguro',
        description: 'Desde 2015 no mercado. Levando crédito seguro e confiável',
        icon: RiShieldCheckLine,
    },
]

export default function Mais() {
    return (
        <section className='bgMainPrincipal select-none scal'>
            <div className='container-custom py-[10vh] grid'>
                <div className='grid grid-cols-2 content-center items-center'>
                    <div className='col-span-2 lg:col-span-1'>
                        <h1 className='text-blue-600 tracking-tight lg:text-4xl text-3xl'>
                            Aqui vc encontra <span className='text-white lg:text-5xl text-4xl'>muuuuito mais...</span>
                        </h1>
                        <h2 className='text-white text-xs lg:text-base my-4 lg:mr-12'>
                            Rápido, seguro e com as melhores opções,
                            sem complicação.<br/><span className='text-blue-600 font-semibold text-lg'>Fácil, do seu jeito!</span>
                        </h2>
                        <div className='mt-5 justify-center hidden lg:block'>
                            <BtnMais>Solicite agora</BtnMais>
                        </div>
                    </div>

                    <div className='lg:grid lg:col-span-1 col-span-2 justify-center items-end'>
                        {/* <Image src={celulares} width={500} alt=''/> */}
                        <div className='grid grid-cols-2 gap-3 lg:p-3 relative isolate'>
                            {cards.map(({ title, description, icon: Icon, className }) => (
                                <CometCard key={title} className='w-full z-0 hover:z-50' withShadow={false}>
                                    <CardVantMais>
                                        <div className='text-3xl text-white pb-3'>
                                            <Icon />
                                        </div>
                                        <div>
                                            <h1 className='text-white text-xl font-semibold mb-3'>{title}</h1>
                                            <div className='items-center flex'>
                                                <DesCardMais>{description}</DesCardMais>
                                            </div>
                                        </div>
                                    </CardVantMais>
                                </CometCard>
                            ))}
                        </div>

                        <div className='mt-5 justify-center lg:hidden block'>
                            <BtnMais>Solicite agora</BtnMais>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
