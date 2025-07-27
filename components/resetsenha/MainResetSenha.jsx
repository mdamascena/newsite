import Image from 'next/image';
import Link from 'next/link';
import logoBranco from '../../public/img/LOGO_FULL_BRANCO.png';
import { BtnHelp } from './styles';
import { useState } from 'react';
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import FormSenha from './form/FormSenha';
import Loading from '../geral/section/Loading';
import Sucess from '../../components/resetsenha/result/ResetSucess';
import Failed from '../../components/resetsenha/result/ResetFailed';

const WP = 'https://bit.ly/wa-plancredi-api';
const TEL = 'tel:8008789853';

export default function MainResetSenha() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

        // Função para submissão do formulário
        const handleResetPassword = (data) => {
        // Ativa loading
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            // Simula retorno aleatório (substituir por API depois)
            const isSuccess = Math.random() > 0.5;

            if (isSuccess) {
                setSuccess(true);
                setTimeout(() => {
                // Aqui você pode redirecionar para login
                console.log('Redirecionar para login ou fechar modal');
                }, 3000);
            } else {
                setError(true);
                setTimeout(() => setError(false), 3000);
            }
        }, 2000);
    };

    return (

        <main className="relative">
            
            <div className="bgMainPrincipal h-[50vh]">
                <div className="flex justify-center lg:p-10 p-6 pt-10 lg:pt-12">
                    <Link href="/" passHref className="lg:w-44 w-36 items-center flex lg:mx-auto col-span-3 lg:col-span-2 hover:scale-110 hover:-rotate-6 duration-300 ease-in">
                        <Image src={logoBranco} alt="" />
                    </Link>
                </div>
            </div>

            <div className="absolute left-0 right-0 top-0 lg:bottom-16 bottom-28 flex items-center justify-center">
                
                <div className="bg-white rounded-md shadow-lg p-5 lg:p-8 w-[90%] lg:w-[530px]">
                    
                    {!success && !error && (
                        <FormSenha onSubmit={handleResetPassword} />
                    )}

                    {loading && (
                        <Loading show={loading} />
                    )}

                    {success && <Sucess show={success} />}
                    {error && <Failed show={error} />}
                    
                </div>

            </div>
        
            <div className="h-[50vh] bg-slate-100 flex flex-col justify-end">
                
                <div className="mb-5">
                    <div className="text-slate-400 text-center p-5">
                        <h2 className="font-semibold tracking-tighter text-3xl">
                            Precisa de ajuda?
                        </h2>

                        <p className="tracking-tight font-light lg:text-lg text-sm">
                            Fale com um dos nossos canais de atendimento
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:gap-4 gap-2">
                        <Link className="place-self-end" href={WP} passHref target="_blank">
                            <BtnHelp>
                                <BsWhatsapp className="text-xl mr-2" />
                                WhatsApp
                            </BtnHelp>
                        </Link>

                        <Link className="place-self-star" href={TEL} passHref target="_blank">
                            <BtnHelp>
                                <BsTelephone className="text-xl mr-2" />
                                0800-878-9853
                            </BtnHelp>
                        </Link>
                    </div>

                    <div className="text-slate-400 text-center pt-5 pb-1 px-5 tracking-tight font-light">
                        <p>Funcionamos de segunda a sexta-feira, das 9h às 18h exceto nos feriados</p>
                    </div>
                </div>

            </div>

        </main>

    );
}
