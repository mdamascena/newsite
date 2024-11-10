import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema, identificacaoSchema } from '../../../schema/schemaCadastro';

const Step1 = dynamic(() => import('../../geral/FORM/FormCadastro'));
const Step2 = dynamic(() => import('../../geral/FORM/FormIdentificacao'))

const schemas = [cadastroSchema, identificacaoSchema];

export function FormBoleto({ setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const cpSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 50},
    ], []);
    

    const cpTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
    ], []);

    const cpDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
    ], []);

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        setProgressChange(((step - 1) / (schemas.length)) * 100);
        setTitulo(cpTitle[step - 1]);
        setDescricao(cpDescription[step - 1]);
        setStepCurrent(cpSteps)
    }, [step, setProgressChange, setTitulo, setDescricao, setStepCurrent, cpTitle, cpDescription, cpSteps]);

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
        </FormProvider>
    )
}