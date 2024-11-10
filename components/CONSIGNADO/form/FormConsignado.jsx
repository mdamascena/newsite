import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema, identificacaoSchema } from '../../../schema/schemaCadastro';

const Step1 = dynamic(() => import('../../geral/FORM/FormCadastro'));
const Step2 = dynamic(() => import('../../geral/FORM/FormIdentificacao'))

const schemas = [cadastroSchema, identificacaoSchema];

export function FormConsignado({ setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const ConsignadoSteps = useMemo(() => [
        {key: "Registrar conta", thresholds : 0},
        {key: "Identificação", thresholds : 100},
    ], []);
    

    const ConsignadoTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
    ], []);

    const ConsignadoDescription = useMemo(() => [
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
        setTitulo(ConsignadoTitle[step - 1]);
        setDescricao(ConsignadoDescription[step - 1]);
        setStepCurrent(ConsignadoSteps)
    }, [step, setProgressChange, setTitulo, setDescricao, setStepCurrent, ConsignadoTitle, ConsignadoDescription, ConsignadoSteps]);

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