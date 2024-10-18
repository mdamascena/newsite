import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from "../../../context/FormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema } from '../../../schema/schemaCadastro';

const Step1 = dynamic(() => import('../../GERAL/FORM/FormCadastro'));

const schemas = [cadastroSchema];

export function FormFgts({ setProgressChange, setTitulo, setDescricao, setStepCurrent}) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const credLuzSteps = [
        {key: "Registrar conta", thresholds : 0},
    ];

    const credLuzTitle = [
        "Vamos começar!",
    ];

    const credLuzDescription = [
        "Preencha seus dados iniciais para criarmos a sua conta",
    ];

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        setProgressChange(((step - 1) / (schemas.length)) * 100);
        setTitulo(credLuzTitle[step - 1]);
        setDescricao(credLuzDescription[step - 1]);
        setStepCurrent(credLuzSteps)
    }, [step, setProgressChange, setTitulo, setDescricao, setStepCurrent, methods, formData]);

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
        </FormProvider>
    )
}