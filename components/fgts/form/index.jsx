import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { cadastroSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { pagamentoPix, identificacaoSchema, adesaoSchema, autorizacaoSchema } from '../../../schema/schemaFgts';
import { yupResolver } from '@hookform/resolvers/yup';

const StepCadastro = dynamic(() => import('../../geral/form/FormCadastro'))
const StepIdentificacao = dynamic(() => import('./FormIdentificacao'))
const StepAdesao = dynamic(() => import('./FormAdesao'))
const StepAutorizacao = dynamic(() => import('./FormAutorizacao'))
const StepSimulacao = dynamic(() => import('./FormSimulacao'))
const StepEndereco = dynamic(() => import('../../geral/form/FormEndereco'))
const StepPagamento = dynamic(() => import('./FormPagamento'));

const schemas = [cadastroSchema, identificacaoSchema, adesaoSchema, autorizacaoSchema, null, enderecoSchema, pagamentoPix ];

export function FormFgts({ setTitleChart, setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const titleChartCadastro = useMemo(() => ["Preenchimento de proposta"], []);

    const fgtsSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 17},
        {key: "Adesão", thresholds: 30},
        {key: "Autorização", thresholds: 40},
        {key: "Simulação", thresholds: 60},
        {key: "Cadastrar Endereço", thresholds: 80},
        {key: "Confirmação dos dados", thresholds: 100},
    ], []);
    
    const fgtsTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "Adesão ao saque aniversário",
        "Limite de credito",
        "Onde você está no mapa?",
        "Está tudo correto?",
        "Olha o Pix aí!",
    ], []);

    const fgtsDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Já aderiu ao saque aniversário?",
        "Queremos saber onde você mora",
        "Confira se todos os dados estão corretos antes de prosseguir",
        "Queremos saber onde depositar seu crédito",
        "Queremos saber onde depositar seu crédito",
    ], []);

    const methods = useForm({   
        resolver: schemas[step - 1] ? yupResolver(schemas[step - 1]) : undefined,
        mode: 'onSubmit',
        defaultValues: formData
    });

    useEffect(() => {
        setTitleChart(titleChartCadastro);
        setProgressChange(Math.round(((step - 1) / (schemas.length - 1)) * 100));
        setTitulo(fgtsTitle[step - 1]);
        setDescricao(fgtsDescription[step - 1]);
        setStepCurrent(fgtsSteps)
    }, [step, setTitleChart, setProgressChange, setTitulo, setDescricao, setStepCurrent, fgtsTitle, fgtsDescription, fgtsSteps, titleChartCadastro]);

    const nextStep = (data) => {
        atualizarForm(data)
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <FormProvider {...methods}>
            {step === 1 && <StepCadastro onNext={nextStep} />}
            {step === 2 && <StepIdentificacao onNext={nextStep} backStep={prevStep} />}
            {step === 3 && <StepAdesao onNext={nextStep} backStep={prevStep} />}
            {step === 4 && <StepAutorizacao onNext={nextStep} backStep={prevStep} />}
            {step === 5 && <StepSimulacao onNext={nextStep} backStep={prevStep} />}
            {step === 6 && <StepPagamento onNext={nextStep} backStep={prevStep} />}
            {step === 7 && <StepEndereco onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    )
}