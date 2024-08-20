import { useState, Suspense, lazy } from "react"
import styles from "../../../styles/Home.module.css"
import Image from "next/image"
import LogoB from "../../../public/img/LOGO_FULL_BRANCO.png"
import { Poppins } from 'next/font/google'
import { FormProvider, useForm } from "react-hook-form"
import { cadastroSchema, cepSchema, dadosPessoaisSchema } from "schema/schemaCredLuz"
import { zodResolver } from "@hookform/resolvers/zod";
import tw from 'tailwind-styled-components';

const mainFontFamily = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const BtnSend = tw.button`
    text-white 
    border-2 
    text-sm
    bg-blue-500
    border-blue-500
    tracking-tighter 
    p-2 
    px-2 
    lg:px-5 
    rounded-md 
    hover:bg-blue-600 
    hover:text-white
    hover:scale-105
    active:scale-90 
    duration-300    
`
const BtnBack = tw.button`
    text-white 
    border-2 
    text-sm
    bg-red-500
    border-red-500
    tracking-tighter 
    p-2 
    px-2 
    lg:px-5 
    rounded-md 
    hover:bg-red-600 
    hover:text-white
    hover:scale-105
    active:scale-90 
    duration-300    
`
const schemas = [cadastroSchema, cepSchema, dadosPessoaisSchema];

const Step1 = lazy(() => import('../../../components/CREDLUZ/FORM/FormCadastro'))
const Step2 = lazy(() => import('../../../components/CREDLUZ/FORM/FormCep'))
const Step3 = lazy(() => import('../../../components/CREDLUZ/FORM/FormDadosPessoais'))

export default function Cadastro() {

    const [step, setStep] = useState(0);

    const methods = useForm({
        resolver: zodResolver(schemas[step]),
        mode: 'all',
    })

    const nextStep = () => {
        methods.trigger().then((isValid) => {
            console.log('Validation status:', isValid);
            if (isValid) {
                setStep((prev) => Math.min(prev + 1, schemas.length - 1));
            }
        });
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    const onSubmit = (data) => {
        console.log('DADOS FINAL', data)
    }


    return (
            <div className={mainFontFamily.className}>
                <main className="bg-slate-50">
                    <div className="grid grid-cols-1 lg:grid-cols-6 h-[100vh]">
                        
                        <div className="m-2 h-24 lg:h-[97.5vh] col-span-3 bgForm rounded-xl">
                            <div className="p-16 flex justify-start">
                                <Image src={LogoB} width={150} alt='' />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-3 lg:max-w-3xl lg:px-20 mt-8">

                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        {step === 0 && <Step1 />}
                                        {step === 1 && <Step2 />}
                                        {step === 2 && <Step3 />}
                                    </Suspense>

                                    <div className="flex mt-4">
                                        {step == 0 &&
                                            <div className="w-full">
                                                <BtnSend className="w-1/2"  type="button" onClick={nextStep}>Avançar </BtnSend>
                                            </div>
                                        }

                                        {step == 1 &&
                                            <div className="w-full flex gap-5">
                                                <BtnBack className="w-full" type="button" onClick={prevStep}>Back</BtnBack>
                                                <BtnSend className="w-full" type="button" onClick={nextStep}>Avançar </BtnSend>
                                            </div>
                                        }

                                        {step == 2 &&
                                            <div className="w-full flex gap-5">
                                                <BtnBack className="w-full" type="button" onClick={prevStep}>Back</BtnBack>
                                                <BtnSend className="w-full" type="submit">Enviar para análise</BtnSend>
                                            </div>
                                        }

                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    </div>
                </main>
            </div>
    );
}
