import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { cadastroSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { pagamentoPix, identificacaoSchema, adesaoSchema, autorizacaoSchema } from '../../../schema/schemaFgts';
import { yupResolver } from '@hookform/resolvers/yup';

const Step1 = dynamic(() => import('../../geral/form/FormCadastro'))
const Step2 = dynamic(() => import('./FormIdentificacao'))
const Step3 = dynamic(() => import('./FormAdesao'))
const Step4 = dynamic(() => import('./FormAutorizacao'))
const Step5 = dynamic(() => import('../../geral/form/FormEndereco'))
const Step6 = dynamic(() => import('./FormPagamento'));

const schemas = [cadastroSchema, identificacaoSchema, adesaoSchema, autorizacaoSchema, enderecoSchema, pagamentoPix ];

export function FormFgts({ setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const fgtsSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 20},
        {key: "Adesão", thresholds: 40},
        {key: "Autorização", thresholds: 60},
        {key: "Cadastrar Endereço", thresholds: 80},
        {key: "Confirmação dos dados", thresholds: 100},
    ], []);
    
    const fgtsTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "Onde você está no mapa?",
        "Olha o Pix aí!",
        "Está tudo correto?",
        "Está tudo correto?",
    ], []);

    const fgtsDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Queremos saber onde mora e como falamos com você",
        "Queremos saber onde depositar seu crédito",
        "Confira se todos os dados estão corretos antes de prosseguir",
        "Confira se todos os dados estão corretos antes de prosseguir",
    ], []);

    const methods = useForm({   
        resolver: yupResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        setProgressChange(Math.round(((step - 1) / (schemas.length - 1)) * 100));
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
            {step === 4 && <Step4 onNext={nextStep} backStep={prevStep} />}
            {step === 5 && <Step5 onNext={nextStep} backStep={prevStep} />}
            {step === 6 && <Step6 onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    )
}