import Image from "next/image"
import moeda from '../../../public/img/dinheiro.gif'
import veloz from '../../../public/img/velocimetro.gif'
import debito from '../../../public/img/flutuacao.gif'
import parcela from '../../../public/img/amar.gif'
import tw from 'tailwind-styled-components'

const Card = tw.div`
    col-span-1 
    p-5 rounded-xl 
    bg-white 
    shadow
    duration-200 
    hover:scale-110
`

export default function Descricao(){
    return(
        <section className="bg-slate-100 poppins text-slate-400 px-8 lg:px-40 py-16 select-none">
            
            <div className="mb-10 lg:mb-16">
                
                <h2 className="font-semibold tracking-tighter text-center mb-6 md:mb-12 text-3xl md:text-4xl">
                    Peça o seu empréstimo agora mesmo
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 text-6xl tracking-tighter text-center mb-5 lg:mb-0 mt-10">
                        É PRA VC!
                    </div>

                    <div className="col-span-2 lg:text-xl">
                        <p className="mb-5">
                            Crédito de fácil acesso, não precisa comprovar renda, basta 
                            ser o titular da conta de energia da sua residência. 
                            As parcelas são debitadas direto na sua conta de luz.
                        </p>
                        <p>
                            No mesmo dia você já fica sabendo se o seu crédito foi pré-aprovado. 
                            Você escolhe, até R$1.500,00 e ainda pode parcelar em até 22 vezes.
                        </p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 text-center gap-2 lg:gap-5">

                <Card>
                    <div className="flex justify-center">
                        <Image src={moeda} width={70} height={70} alt=""/>
                    </div>
                    
                    <h5 className="font-semibold text-xl text-cyan-400 mb-5">
                        Crédito Fácil
                    </h5>

                    <p className="text-sm leading-tight">
                        Não precisa comprovar renda! Basta ser o titular da conta de energia da sua residência. Simples assim!
                    </p>
                </Card>

                <Card>
                    <div className="flex justify-center">
                        <Image src={veloz} width={70} height={70} alt=""/>
                    </div>
                    
                    <h5 className="font-semibold text-xl text-cyan-400 mb-5">
                        Rápido
                    </h5>

                    <p className="text-sm leading-tight">
                        Em até 24 horas, você já fica sabendo sobre a sua aprovação do seu pedido. O dinheiro é depositado em sua conta bancária.
                    </p>
                </Card>

                <Card>
                    <div className="flex justify-center">
                        <Image src={debito} width={70} height={70} alt=""/>
                    </div>
                    
                    <h5 className="font-semibold text-xl text-cyan-400 mb-5">
                        Débito Automático
                    </h5>
                    <p className="text-sm leading-tight">
                        O débito é feito direto em sua conta de luz. Tudo muito bem explicado impresso em sua conta, mês a mês!
                    </p>
                </Card>

                <Card>
                    <div className="flex justify-center">
                        <Image src={parcela} width={70} height={70} alt=""/>
                    </div>
                    
                    <h5 className="font-semibold text-xl text-cyan-400 mb-5">
                        Sem Aperto
                    </h5>
                    <p className="text-sm leading-tight">
                        Limite de até R$ 1.500,00 parcelado em até 22 vezes com parcelas fixas. Sem susto!
                    </p>
                </Card>
                
            </div>

            <div className="text-[12px] mt-8">
                <ul className="">
                    <li className="mb-2">* Crédito destinado a pessoa física, de qualquer perfil econômico que possua conta ativa em uma concessionária de distribuição de energia elétrica conveniada.</li>
                    <li className="mb-2">* Tempo estimado de analise, podendo superar o tempo acima. </li>
                    <li>* Crédito sujeito a análise.</li>
                </ul>
            </div>
            
        </section>
    )
}