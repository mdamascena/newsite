import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema } from '../../../schema/schemaCredLuz';
import { cadastroSchema } from '../../../schema/schemaCadastro';
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormDataLuz } from '../../../context/FormContextLuz';
import BaseForm from '../../GERAL/FORM/BaseForm';

const Step1 = dynamic(() => import('../FORM/FormCadastro'));
const Step2 = dynamic(() => import('../FORM/FormTipoOcupacao'));
const Step3 = dynamic(() => import('../FORM/FormGenero'));
const Step4 = dynamic(() => import('../FORM/FormTitularCia'));
const Step5 = dynamic(() => import('../FORM/FormDadosPessoais'))

const schemas = [cadastroSchema, tipoOcupacao, generoSchema, titularCia, dadosPessoaisSchema];

export function FormCredLuz( { setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormDataLuz();

    const credLuzSteps = [
        "Registrar conta",
        "Perfil ocupacional",
        "Gênero",
        "Registro da conta de luz",
        "Contato e localidade",
    ];

    const credLuzTitle = [
        "Vamos começar!",
        "O que você faz da vida?",
        "Um pouco mais sobre você",
        "Quem paga a luz?",
        "Onde você está no mapa?"
    ];

    const credLuzDescription = [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Como é sua oculpação, se trabalha, se é aposentado. Estamos curiosos!",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "É você que manda apagar a luz para não vir caro? Conta pra gente!",
        "Queremos saber onde mora e como falamos com você"
    ];

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    // useEffect(() => {
    //     setProgressChange(((step - 1) / schemas.length) * 100)
    // }, [step, methods, formData, setProgressChange]);

    useEffect(() => {
        setProgressChange(((step - 1) / (schemas.length)) * 100);
        setTitulo(credLuzTitle[step - 1]);
        setDescricao(credLuzDescription[step - 1]);
        setStepCurrent(credLuzSteps[step - 1])
    }, [step, setProgressChange, setTitulo, setDescricao, methods, formData]);

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
            {step === 5 && <Step5 backStep={prevStep} />}
        </FormProvider>
    )
}