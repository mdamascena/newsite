import { useState, useEffect, lazy } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { cadastroSchema, tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema } from '../../../schema/schemaCredLuz';
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormDataLuz } from '../../../context/FormContextLuz';

const Step1 = dynamic(() => import('../FORM/FormCadastro'), {ssr: false});
const Step2 = dynamic(() => import('../FORM/FormTipoOcupacao'), {ssr: false});
const Step3 = dynamic(() => import('../FORM/FormGenero'), {ssr: false});
const Step4 = dynamic(() => import('../FORM/FormTitularCia'), {ssr: false});
const Step5 = dynamic(() => import('../FORM/FormDadosPessoais'), {ssr: false})

const schemas = [cadastroSchema, tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema];

export function FormCredLuz({progressChange}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormDataLuz();

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        if (step >= 2) {
            methods.reset(formData);
        }
        progressChange(((step - 1) / schemas.length) * 100)
    }, [step, methods, formData, progressChange]);

    const nextStep = (data) => {
        atualizarForm(data)
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    return (
        <FormProvider {...methods}>
                {step === 1 && <Step1 onNext={nextStep} />}
                {step === 2 && <Step2 onNext={nextStep} backStep={prevStep} />}
                {step === 3 && <Step3 onNext={nextStep} backStep={prevStep} />}
                {step === 4 && <Step4 onNext={nextStep} backStep={prevStep} />}
                {step === 5 && <Step5 onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    )
}