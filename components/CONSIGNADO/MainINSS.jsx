import Image from 'next/image'
import ImgMain from '../../public/img/modelo_main_inss3.png'
import { BtnCalc, Card, EmpTitle } from './styles'
import Condicoes from './CondicoesINSS'
import TaxaGuru from '../geral/section/TaxaGuru'
import { LuCheckCircle } from "react-icons/lu"
import { useRouter } from 'next/router'

export default function MainFGTS() {

    const router = useRouter();
    const handleRedirect = () => {
        router.push('consignado-inss/cadastro');
    }

    return (
        <main>
            <div className="bgMainFGTS">
                
                <div className='lg:pt-20 pt-20 grid grid-cols-1 lg:grid-cols-2 container-custom'>

                    <div className='lg:my-auto mb-10'>
                        <div className='my-5 gap-2 lg:gap-4 justify-center lg:justify-start hidden lg:flex'>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                Aposentado
                            </Card>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                Pensionista
                            </Card>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                LOAS/BPC
                            </Card>
                        </div>

                        <div className=''>
                            <EmpTitle>Empréstimo</EmpTitle>
                            <h1 className='text-blue-600 lg:text-5xl text-4xl text-center lg:text-left font-semibold tracking-tighter'>
                                Consignado <span className='font-semibold tracking-tighter'>INSS</span>
                            </h1>
                        </div>
                        
                        <div className='my-5 gap-1 lg:gap-4 justify-center lg:justify-start lg:hidden flex'>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                Aposentado
                            </Card>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                Pensionista
                            </Card>
                            <Card>
                                <LuCheckCircle className='mr-2'/>
                                LOAS/BPC
                            </Card>
                        </div>

                        <p className='text-blue-500 lg:text-xl text-md lg:mt-7 lg:text-left lg:pr-20 text-center'>
                            Mais agilidade, mais tranquilidade, mais crédito com limite que atende às suas necessidades. 
                        </p>

                        <div className='flex justify-center lg:justify-start'>
                            <BtnCalc onClick={handleRedirect}>Contrate agora</BtnCalc>
                        </div>

                    </div>
                    <div className='-mb-1 flex lg:mt-6'>
                        <Image width={580} src={ImgMain} alt='' />
                    </div>

                </div>
            </div>
            <div className='container-custom'>
                <Condicoes />
            </div>
            <TaxaGuru 
                TituloGuru={'Equilibre as sua contas e viva a tranquilidade'} 
                DescrisaoGuro={'As melhores taxas de juros para aposentados e pensionistas do INSS, BPC/LOAS'} 
                DescrisaoProduto={'Empréstimo Consignado'} 
                Taxa={'1,50%'} 
                DescrisaoTaxa={'A melhor taxa entre empréstimos para aposentados e pensionistas INSS, BPC/LOAS.'}
            />
            
        </main>
    )
}