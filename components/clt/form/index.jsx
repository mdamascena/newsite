import { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormData } from '../../../context/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { cadastroSchema, identificacaoSchema, enderecoSchema } from '../../../schema/schemaCadastro';

const StepCadastro = dynamic(() => import('../../geral/form/FormCadastro'));
const StepIdentificacao = dynamic(() => import('../../geral/form/FormIdentificacao'));
const StepEndereco = dynamic(() => import('../../geral/form/FormEndereco'));

const schemas = [cadastroSchema, identificacaoSchema, enderecoSchema];

export function FormCLT({ setTitleChart, setProgressChange, setTitleText, setDescriptionText, setStepCurrent }) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const titleChart = useMemo(() => ["Preenchimento de proposta"], []);

    const steps = useMemo(() => [
        { key: "Registrar conta", thresholds: 0 },
        { key: "Identificação", thresholds: 50 },
        { key: "Endereço", thresholds: 100 },
    ], []);

    const titles = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "Onde você mora?",
    ], []);

    const descriptions = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Informe seus dados de identificação",
        "Agora só precisamos do seu endereço para prosseguir",
    ], []);

    const methods = useForm({
        resolver: yupResolver(schemas[step - 1]),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: formData
    });

    useEffect(() => {
        setTitleChart(titleChart);
        setProgressChange(Math.round(((step - 1) / (schemas.length - 1)) * 100));
        setTitleText(titles[step - 1]);
        setDescriptionText(descriptions[step - 1]);
        setStepCurrent(steps);
    }, [
        step,
        setTitleChart,
        setProgressChange,
        setTitleText,
        setDescriptionText,
        setStepCurrent,
        titleChart,
        titles,
        descriptions,
        steps,
    ]);

    const nextStep = (data) => {
        atualizarForm(data);
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
            {step === 3 && <StepEndereco onNext={nextStep} backStep={prevStep} />}
        </FormProvider>
    );
}
