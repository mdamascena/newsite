import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema } from '../../../schema/schemaCredLuz';
import { cadastroSchema } from '../../../schema/schemaCadastro';
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormDataLuz } from '../../../context/FormContextLuz';

const Step1 = dynamic(() => import('../FORM/FormCadastro'));
const Step2 = dynamic(() => import('../FORM/FormTipoOcupacao'));
const Step3 = dynamic(() => import('../FORM/FormGenero'));
const Step4 = dynamic(() => import('../FORM/FormTitularCia'));
const Step5 = dynamic(() => import('../FORM/FormDadosPessoais'))

const schemas = [cadastroSchema, tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema];

export function FormCredLuz( { progressChange, setTitulo, setDescricao }) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormDataLuz();

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
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
            {step === 1 && <Step1 onNext={nextStep} setTitulo={setTitulo} setDescricao={setDescricao} />}
            {step === 2 && <Step2 onNext={nextStep} backStep={prevStep} setTitulo={setTitulo} setDescricao={setDescricao} />}
            {step === 3 && <Step3 onNext={nextStep} backStep={prevStep} setTitulo={setTitulo} setDescricao={setDescricao} />}
            {step === 4 && <Step4 onNext={nextStep} backStep={prevStep} setTitulo={setTitulo} setDescricao={setDescricao} />}
            {step === 5 && <Step5 backStep={prevStep} setTitulo={setTitulo} setDescricao={setDescricao} />}
        </FormProvider>
    )
}