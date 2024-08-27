import { useState, Suspense, lazy } from "react"
import Image from "next/image"
import LogoB from "../../../public/img/LOGO_FULL_BRANCO.png"
import { Poppins } from 'next/font/google'
import { FormProvider, useForm } from "react-hook-form"
import { cadastroSchema, cepSchema, dadosPessoaisSchema } from "schema/schemaCredLuz"
import { useRouter } from 'next/router'
import { zodResolver } from "@hookform/resolvers/zod"
import tw from 'tailwind-styled-components'
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import CharLG from "../../../components/CREDLUZ/FORM/ChartForm"
import Btn from '../../../components/GERAL/BUTTON/BtnBlue'


const mainFontFamily = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const BtnSend = tw.button`
    bg-blue-700
    items-center 
    justify-center
    text-white
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-900
    hover:bg-blue-600
    hover:scale-105
    active:scale-90 
    duration-150    
`
const BtnBack = tw.button`
    bg-blue-100
    items-center
    justify-center
    text-blue-500
    w-full
    py-3
    lg:px-5 
    rounded-lg
    active:bg-blue-300
    hover:bg-blue-50
    hover:scale-105
    active:scale-90 
    duration-150    
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

    const { reset, getValues } = methods;

    const nextStep = async () => {
        const isValid = await methods.trigger();
        console.log('Validation status:', isValid);
        if (step === 1) {
            const currentValues = getValues();
            reset({
                ...currentValues,
                cep: '',
                uf: '',
                cidade: ''
            });
        }
        if (isValid) {
            setStep((prev) => Math.min(prev + 1, schemas.length - 1));
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    const onSubmit = (data) => {
        console.log('DADOS FINAL', data)
    }

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }

    return (
        <div className={mainFontFamily.className}>           
            
            <main className="bg-slate-50">

                <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                    <div className="col-span-1 bgForm rounded-2xl lg:!h-[97.5vh] m-2 !sticky top-1">

                        <div className="relative lg:m-14">
                            
                            <div className="flex justify-between items-center px-5 pt-3 lg:px-0 lg:pt-0">
                                <HiOutlineArrowLongLeft className='text-6xl text-white cursor-pointer lg:p-2 w-10 lg:w-20' onClick={handleBack}/>
                                <Image className="w-32 lg:w-40" src={LogoB} width={200} alt='' />
                            </div>

                            <div className="lg:mt-[22vh] text-end">

                                <div className="mr-5 lg:mr-0 mb-5">
                                    <h1 className="text-white font-extralight lg:font-semibold lg:text-3xl text-md ml-2">
                                        Vamos criar a sua conta
                                    </h1>
                                </div>

                                <div className="hidden lg:block">
                                    <p className="text-sm text-white ml-2">
                                        Primeiro passo. Vamos criar o seu login de acesso
                                    </p>
                                </div>

                            </div>
                            
                            <CharLG className='mt-28 justify-end lg:grid hidden'/>

                        </div>

                    </div>

                    <div className="col-span-1 lg:px-28 items-center grid mt-3 px-8">

                        <FormProvider {...methods}>

                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    
                                <Suspense fallback={<div>Loading...</div>}>
                                    {step === 0 && <Step1 />}
                                    {step === 1 && <Step2 />}
                                    {step === 2 && <Step3 />}
                                </Suspense>

                                <div className="flex mt-4 h-[10vh] items-end">
                                    {step == 0 &&
                                        <div className="w-full">
                                            <BtnSend type="button" onClick={nextStep}>Criar conta</BtnSend>
                                        </div>
                                    }

                                    {step == 1 &&
                                        <div className="w-full flex gap-5">
                                            <BtnBack className="" type="button" onClick={prevStep}>Voltar</BtnBack>
                                            <BtnSend className="" type="button" onClick={nextStep}>Avançar</BtnSend>
                                        </div>
                                    }

                                    {step == 2 &&
                                        <div className="w-full flex gap-5">
                                            <BtnBack className="" type="button" onClick={prevStep}>Voltar</BtnBack>
                                            <BtnSend className="" type="submit">Enviar para análise</BtnSend>
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
