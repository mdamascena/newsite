import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { tipoOcupacao, titularCia, resumo } from '../../../schema/schemaCredLuz';
import { cadastroSchema, identificacaoSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { useFormData } from '../../../context/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';

const Step1 = dynamic(() => import('../../geral/form/FormCadastro'));
const Step2 = dynamic(() => import('../../geral/form/FormIdentificacao'));
const Step3 = dynamic(() => import('./FormTipoOcupacao'));
const Step4 = dynamic(() => import('./FormTitularCia'));
const Step5 = dynamic(() => import('../../geral/form/FormEndereco'));
const Step6 = dynamic(() => import('./ResumoCredLuz'));

const schemas = [cadastroSchema, identificacaoSchema, tipoOcupacao, titularCia, enderecoSchema, resumo];

export function FormCredLuz( { setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const credLuzSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 20},
        {key: "Perfil ocupacional", thresholds : 40},
        {key: "Titular da fatura", thresholds : 60},
        {key: "Contato e localidade", thresholds : 80},
        {key: "Confirmação dos dados", thresholds: 90}
    ], []);

    const credLuzTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "O que você faz da vida?",
        "Quem paga a luz?",
        "Onde você está no mapa?",
        "Está tudo correto?"
    ], []);

    const credLuzDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Como é sua oculpação, se trabalha, se é aposentado. Estamos curiosos!",
        "É você que manda apagar a luz para não vir caro? Conta pra gente!",
        "Queremos saber onde mora e como falamos com você",
        "Confira se todos os dados estão corretos antes de prosseguir"
    ], []);

    const methods = useForm({
        resolver: yupResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        setProgressChange(((step - 1) / (schemas.length)) * 100);
        setTitulo(credLuzTitle[step - 1]);
        setDescricao(credLuzDescription[step - 1]);
        setStepCurrent(credLuzSteps)

        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, [step, setProgressChange, setTitulo, setDescricao, setStepCurrent, credLuzTitle, credLuzDescription, credLuzSteps ]);

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
            {step === 6 && <Step6 onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    )
}