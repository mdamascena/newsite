import Image from 'next/image'
import ImgMain from '../../../public/img/pers_home1.png'
import tw from 'tailwind-styled-components'
import SimuladorFGTS from '../SIMULADOR/SimuladorFGTS'
import Vantagens from '../VANTAGENS/VantagensFGTS'
import Regras from '../REGRAS/RegrasGeraisFGTS'
import Analise from '../../GERAL/SECTION/Analise'
import TaxaGuru from '../../GERAL/SECTION/TaxaGuru'
import { useRouter } from 'next/router'

const BtnCalc = tw.button`
    bg-gradient-to-r 
    from-yellow-300 
    to-amber-500 
    text-xl 
    lg:px-32 
    py-3
    px-18
    lg:flex-none
    flex-1
    rounded-xl
    text-white
    mt-8
    shadow-md
    shadow-amber-400/50
    border-b-2 
    border-amber-300
    focus:outline-none
    hover:shadow-md
    hover:bg-gradient-to-r 
    hover:to-amber-500 
    hover:from-yellow-400
    hover:scale-105
    active:scale-90
    duration-150
`

const EmpTitle = tw.h1`
    text-blue-600 
    lg:text-7xl
    text-[48px] 
    text-center 
    lg:text-left 
    font-semibold
    tracking-tighter
`

export default function MainFGTS() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('saque-aniversario/cadastro');
    }
    
    const Desc = 'O Saque-Aniversário FGTS antecipado é fácil, rápido e você não tem dor de cabeça com imprevistos. É uma das melhores opções de crédito sem comprometer sua renda com pagamento de parcelas!'
    const DescT = 'A melhor taxa em comparação com outras modalidades de empréstimo para o trabalhador brasileiro.'
    return (
        <main>
            <div className="bgMainFGTS">
                
                <div className='lg:pt-24 pt-20 grid grid-cols-1 lg:grid-cols-2 container-custom'>
                    <div className='lg:my-auto mb-10 lg:ml-5 select-none'>
                        <EmpTitle>Empréstimo</EmpTitle>
                        <h1 className='text-blue-600 lg:text-5xl text-2xl text-center lg:text-left font-semibold tracking-tighter'>
                            Saque Aniversário <span className='font-semibold tracking-tighter'>FGTS</span>
                        </h1>
                        <p className='text-blue-600 lg:text-xl text-md mt-7 lg:mt-7 lg:pr-36 lg:text-left text-center'>
                            Antecipe seu <b className='text-2xl'>FGTS</b>, até <span className='text-2xl font-bold tracking-tighter'>12 parcelas</span> com a melhor taxa do mercado e sem descontos mensais!
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <BtnCalc onClick={handleRedirect}>Contrate agora</BtnCalc>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <Image width={600} src={ImgMain} alt='' />
                    </div>
                </div>

            </div>

            <SimuladorFGTS />
            <Vantagens />
            <TaxaGuru 
                TituloGuru={'Não deixe o seu FGTS parado!'} 
                DescrisaoGuro={Desc} 
                DescrisaoProduto={'Antecipação do saque FGTS'} 
                Taxa={'1,59%'} 
                DescrisaoTaxa={DescT}
            />
            <Analise/>
            <Regras />
            
        </main>
    )
}