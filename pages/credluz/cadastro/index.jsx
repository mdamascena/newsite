import { useState, useEffect, Suspense, lazy } from "react"
import Image from "next/image"
import LogoB from "../../../public/img/LOGO_FULL_BRANCO.png"
import { Poppins } from 'next/font/google'
import { FormProvider, useForm } from "react-hook-form"
import { useRouter } from 'next/router'
import { zodResolver } from "@hookform/resolvers/zod"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import CharLG from "../../../components/CREDLUZ/FORM/ChartForm"
import { cadastroSchema, cepSchema, dadosPessoaisSchema, generoSchema, tipoOcupacao, titularCia } from "../../../schema/schemaCredLuz"
import { FormProviderLuz, useFormDataLuz } from "../../../context/FormContextLuz"


const mainFontFamily = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const Step1 = lazy(() => import('../../../components/CREDLUZ/FORM/FormCadastro'));
const Step2 = lazy(() => import('../../../components/CREDLUZ/FORM/FormTipoOcupacao'));
const Step3 = lazy(() => import('../../../components/CREDLUZ/FORM/FormGenero'));
const Step4 = lazy(() => import('../../../components/CREDLUZ/FORM/FormTitularCia'));
const Step5 = lazy(() => import('../../../components/CREDLUZ/FORM/FormCep'));
const Step6 = lazy(() => import('../../../components/CREDLUZ/FORM/FormDadosPessoais'));

const schemas = [cadastroSchema, tipoOcupacao, generoSchema, titularCia, cepSchema, dadosPessoaisSchema];

export default function Cadastro() {

    const [step, setStep] = useState(1);

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange'
    })

    useEffect(() => {
        console.log("Current Step:", step);
    }, [step]);

    useEffect(() => {
        if (step > 2) {
            methods.reset(); // Resetar o formulário quando o passo muda
        }
    }, [step, methods]);

    const nextStep = () => {
        console.log('Avançando para o proximo passo')
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const onSubmit = (data) => {
        console.log('DADOS FINAL', data)
        onNext();
    }

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }

    return (
        <FormProviderLuz className={mainFontFamily.className}>

            <main className="bg-slate-50">

                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="col-span-1 bgForm rounded-2xl lg:!h-[97.5vh] m-2 !sticky top-1">
                        <div className="relative lg:m-14">
                            <div className="flex justify-between items-center px-5 pt-3 lg:px-0 lg:pt-0">
                                <HiOutlineArrowLongLeft className='text-6xl text-white cursor-pointer lg:p-2 w-10 lg:w-20' onClick={handleBack} />
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
                            <CharLG className='mt-28 justify-end lg:grid hidden' />
                        </div>
                    </div>

                    <div className="col-span-1 lg:px-28 items-center grid mt-3 px-8">
                        <FormProvider {...methods}>
                            <Suspense>
                                {step === 1 && <Step1 onNext={nextStep} />}
                                {step === 2 && <Step2 onNext={nextStep} backStep={prevStep} />}
                                {step === 3 && <Step3 onNext={nextStep} backStep={prevStep} />}
                                {step === 4 && <Step4 onNext={nextStep} backStep={prevStep} />}
                                {step === 5 && <Step5 onNext={nextStep} backStep={prevStep} />}
                                {step === 6 && <Step6 onNext={onSubmit} backStep={prevStep} />}
                            </Suspense>
                        </FormProvider>
                    </div>

                </div>

            </main>

        </FormProviderLuz>
    );
}
