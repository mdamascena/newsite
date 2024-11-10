import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema, identificacaoSchema } from '../../../schema/schemaCadastro';
import { dadosPessoaisFgts } from '../../../schema/schemaFgts';

const Step1 = dynamic(() => import('../../geral/form/FormCadastro'));
const Step2 = dynamic(() => import('../../geral/form/FormIdentificacao'))
const Step3 = dynamic(() => import('./FormDadosCliente'))

const schemas = [cadastroSchema, identificacaoSchema, dadosPessoaisFgts];

export function FormFgts({ setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const fgtsSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 50},
        {key: "Dados Pessoais", thresholds: 100}
    ], []);
    

    const fgtsTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "Seus dados pessoais"
    ], []);

    const fgtsDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Informe seus dados pessoais"
    ], []);

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        setProgressChange(((step - 1) / (schemas.length)) * 100);
        setTitulo(fgtsTitle[step - 1]);
        setDescricao(fgtsDescription[step - 1]);
        setStepCurrent(fgtsSteps)
    }, [step, setProgressChange, setTitulo, setDescricao, setStepCurrent, fgtsTitle, fgtsDescription, fgtsSteps]);

    const nextStep = (data) => {
        atualizarForm(data)
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    return (
        <FormProvider {...methods}>
            {step === 1 && <Step1 onNext={nextStep}  />}
            {step === 2 && <Step2 onNext={nextStep} backStep={prevStep} />}
            {step === 3 && <Step3 onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    )
}