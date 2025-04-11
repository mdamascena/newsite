import Image from 'next/image'
import Link from 'next/link'
import LogoFB from '../../../public/img/LOGO_FULL_BRANCO.png'
import tw from 'tailwind-styled-components'
import { SiInstagram } from "react-icons/si"
import { ImFacebook } from 'react-icons/im'
import { SiTiktok } from 'react-icons/si'
import { MdHeadsetMic } from 'react-icons/md'

const Rodape = tw.footer`
    bg-gradient-to-b 
    from-black 
    to-blue-800 
    saturate-150
`
const BtnSocial = tw.button`
    text-white 
    bg-blue-600 
    p-2 
    text-xl 
    m-1 
    rounded-md
    hover:bg-blue-500
    active:bg-blue-800
    hover:scale-110
    active:scale-90 
    duration-150
    ease-in
`

export default function Footer() {
    return (

        <Rodape>

            <div className='container-custom pt-6'>
                
                <div className="pb-4">
                    <h5 className="text-blue-200 lg:p-2 p-4 bg-blue-800/20 rounded-lg text-center">
                        Atenção! Não cobramos valores antecipados para liberação de empréstimos.
                    </h5>
                </div>

                <h2 className="text-blue-400 font-semibold text-xl">
                    NOSSOS CONTATOS
                </h2>
                
                <hr className="border border-blue-700 bg-blue-700 border-opacity-20 rounded-full" />

                <div className="grid lg:grid-cols-3 grid-cols-1">

                    <div className="col-span-1 my-5 px-2 text-center mx-4">
                        <h4 className="text-blue-400 mb-5">Central de Atendimento</h4>

                        <div className='flex justify-center'>
                            <MdHeadsetMic className='text-blue-600 text-3xl mr-1' />
                            <p className="text-white text-2xl cursor-pointer">0800-878-9853</p>
                        </div>

                        <p className="text-center text-white text-[13px] mt-4">
                            Horário de atendimento de segunda a sexta-feira, das 9h às 18h. Exceção aos feriados.
                        </p>
                    </div>

                    <div className="col-span-1 my-5 mx-4">
                        
                        <h4 className="text-center text-blue-400">
                            Siga-nos nas nossas Redes Sociais
                        </h4>

                        <div className="flex container justify-center my-3">
                            <BtnSocial><ImFacebook/></BtnSocial>
                            <BtnSocial><SiInstagram/></BtnSocial>
                            <BtnSocial><SiTiktok/></BtnSocial>
                        </div>

                        <p className="text-center text-white text-[13px]">
                            Notícias, dicas, novidades, fotos do nosso time, avaliações e depoimentos dos nossos clientes. Clique e acesse!
                        </p>
                    </div>

                    <div className="col-span-1 my-5 text-center mx-4">
                        
                        <h4 className="text-blue-400">
                            Fale conosco
                        </h4>
                        
                        <Link passHref href="/fale-conosco">
                            <BtnSocial className='w-40 mx-auto my-3 py-2' >
                                Suporte
                            </BtnSocial>
                        </Link>
                
                        <p className="text-white text-[13px]">
                            Respondemos em horário comercial, em um prazo de até 48h úteis.
                        </p>

                    </div>

                </div>

                <h2 className="text-blue-400 font-semibold text-xl">
                    SOBRE NÓS
                </h2>
                
                <hr className="border border-blue-700 border-opacity-75 rounded-full" />

                <div className="mt-5">
                    <Image src={LogoFB} width={140} height={30} alt='' />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">

                    <div className="col-span-1">
                        <p className="text-[12px] text-justify text-blue-300">
                            O site www.valoreal.com.br pertence e é operado pela empresa VALOREAL INTERMEDIAÇÃO DE NEGOCIOS LTDA-ME (“Valor Real”),
                            uma sociedade limitada registrada sob o CNPJ: 23.027.657/0001-48 com sede na Estrada Raul Veiga, 360, Sala 305 no
                            bairro Raul Veiga, cidade São Gonçalo no estado do Rio de Janeiro, CEP: 24.710-480.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <p className="text-[12px] text-justify text-blue-300">
                            A Valor Real não é uma instituição financeira e não realiza operações de crédito diretamente. Somos um correspondente
                            bancário da Crefaz Sociedade de Credito Ao Microempreendedor e A Empresa de Pequeno Porte Ltda (“Crefaz Financiamentos e Investimentos”)
                            registrada sob o CNPJ/MF 18.188.384/0001-83 e possuímos uma plataforma online que facilita o acesso de clientes a produtos e serviços
                            ofertados por instituições financeiras parceiras. Nos termos do artigo 2º, da Resolução CMN nº 3.954, de 24 de fevereiro de 2011.
                        </p>
                    </div>

                </div>
                
            </div>

            <div className="bg-black/75 mt-2">
                <p className="text-blue-400 text-[10pt] text-center p-2">
                    ©ValoReal - Todos os direitos reservados - VALOREAL INTERMEDIAÇÃO DE NEGOCIOS LTDA-ME
                </p>
            </div>         
        </Rodape>
    )
}