import Image from 'next/image'
import { useRouter } from 'next/router'
import { BtnCalc, EmpTitle } from './styles'
import ImgMain from '../../public/img/pers_home1.png'
import SimuladorFGTS from './SimuladorFGTS'
import Vantagens from './VantagensFGTS'
import Regras from './RegrasGeraisFGTS'
import Analise from '../geral/section/Analise'
import TaxaGuru from '../geral/section/TaxaGuru'

export default function MainFGTS() {

    const router = useRouter();
    
    const handleRedirect = () => {
        router.push('saque-aniversario/cadastro');
    }
    
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
                TituloGuru='Não deixe o seu FGTS parado!'
                DescricaoGuru='Utilize o seu saldo e fique tranquilo com suas finanças ou realize seus planos.' 
                DescrisaoProduto='Antecipação do saque FGTS'
                Taxa='1,59%'
                DescrisaoTaxa='A melhor taxa em comparação com outras modalidades de empréstimo para o trabalhador brasileiro.'
            />
            <Analise/>
            <Regras />
        </main>
    )
}