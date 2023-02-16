import Image from 'next/image'
import LogoFB from '../../public/img/LOGO_FULL_BRANCO.png'
import {SiInstagram} from "react-icons/si"
import {ImFacebook} from 'react-icons/im'
import {SiTiktok} from 'react-icons/si'
import {MdHeadsetMic} from 'react-icons/md'

export default function Footer(){
    return(

        <footer className="bg-gradient-to-b from-black to-blue-800 saturate-150">
            
            <div className="py-4">
                <h5 className="poppins text-blue-200 lg:p-2 p-4 rounded-lg bg-opacity-20 bg-blue-800 lg:mx-40 mx-8 text-center">
                    Atenção! Não cobramos valores antecipados para liberação de empréstimos.
                </h5>
            </div>

            <h2 className="text-blue-400 poppins lg:mx-40 mx-8 font-bold text-xl">
                NOSSOS CONTATOS
            </h2>
            <hr className="border-4 border-blue-700 border-opacity-20 rounded-full h-2 lg:mx-40 mx-8"/>
            
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-40 mx-8">
                
                <div className="col-span-1 my-5 px-2 text-center mx-4">
                    <h4 className="poppins text-blue-400 mb-5">Central de Atendimento</h4>

                    <div className='flex container justify-center'>
                        <MdHeadsetMic className='text-blue-600 text-3xl mr-1' />
                        <p className="poppins text-white text-2xl cursor-pointer">0800-878-9853</p>
                    </div>
                    
                    <p className="text-center poppins text-white text-[13px] mt-4">
                        Horário de Atendimento de segunda a sexta-feira, das 9h às 18h. Exceção aos feriados.
                    </p>
                </div>
                
                <div className="col-span-1 my-5 mx-4">
                    <h4 className="text-center poppins text-blue-400">
                        Siga-nos nas nossas Redes Sociais
                    </h4>

                    <div className="flex container justify-center my-3">
                        <ImFacebook className='text-white bg-blue-600 hover:bg-blue-800 m-1 text-4xl p-2 rounded-md duration-200 hover:scale-110 cursor-pointer' />
                        <SiInstagram className='text-white bg-blue-600 hover:bg-blue-800 m-1 text-4xl p-2 rounded-md duration-200 hover:scale-110 cursor-pointer'/>
                        <SiTiktok className='text-white bg-blue-600 hover:bg-blue-800 m-1 text-4xl p-2 rounded-md duration-200 hover:scale-110 cursor-pointer' />
                    </div>

                    <p className="text-center poppins text-white text-[13px]">
                        Notícias, dicas, novidades, fotos do nosso time, avaliações e depoimentos dos nossos clientes. Clique e acesse!
                    </p>
                </div>
                
                <div className="col-span-1 my-5 text-center mx-4">
                    <h4 className="poppins text-blue-400">
                        Quer enviar um e-mail?
                    </h4>

                    <div className="bg-blue-600 hover:bg-blue-800 w-44 mx-auto my-3 py-2 rounded-md text-white text-lg cursor-pointer poppins duration-200 hover:scale-105">
                        Clique aqui
                    </div>

                    <p className="poppins text-white text-[13px]">
                        Os e-mails são respondidos sempre em horário comercial, em um prazo de até 48h úteis.
                    </p>
                </div>

            </div>

            <h2 className="text-blue-400 poppins lg:mx-40 mx-8 font-bold text-xl">
                SOBRE NÓS
            </h2>
            <hr className="border-4 border-blue-700 border-opacity-75 rounded-full h-2 lg:mx-40 mx-8"/>

            <div className="lg:mx-40 mx-8 mt-5">
                <Image src={LogoFB} width={140} height={30}/>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2  lg:mx-40 mx-8 gap-6 mt-3">
            
                <div className="col-span-1">
                    <p className="poppins text-[12px] text-justify text-blue-300">
                        O site www.valoreal.com.br pertence e é operado pela empresa VALOREAL INTERMEDIAÇÃO DE NEGOCIOS LTDA-ME (“Valor Real”), 
                        uma sociedade limitada registrada sob o CNPJ: 23.027.657/0001-48 com sede na Estrada Raul Veiga, 360, Sala 305 no 
                        bairro Raul Veiga, cidade São Gonçalo no estado do Rio de Janeiro, CEP: 24.710-480.
                    </p>
                </div>

                <div className="col-span-1">
                    <p className="poppins text-[12px] text-justify text-blue-300">
                        A Valor Real não é uma instituição financeira e não realiza operações de crédito diretamente. Somos um correspondente 
                        bancário da Crefaz Sociedade de Credito Ao Microempreendedor e A Empresa de Pequeno Porte Ltda (“Crefaz Financiamentos e Investimentos”) 
                        registrada sob o CNPJ/MF 18.188.384/0001-83 e possuímos uma plataforma online que facilita o acesso de clientes a produtos e serviços 
                        ofertados por instituições financeiras parceiras. Nos termos do artigo 2º, da Resolução CMN nº 3.954, de 24 de fevereiro de 2011.
                    </p>
                </div>

            </div>
            <div className="bg-black bg-opacity-75 mt-2">
                <p className="text-blue-400 poppins text-[10pt] text-center p-2">
                    ©ValoReal - Todos os direitos reservados - VALOREAL INTERMEDIAÇÃO DE NEGOCIOS LTDA-ME
                </p>
            </div>

        </footer>
    )
}