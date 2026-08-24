import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormCadastro, { STEP_INFO as CADASTRO_STEP_INFO } from '../../geral/form/FormCadastro';
import FormIdentificacao, { STEP_INFO as IDENTIFICACAO_STEP_INFO } from '../../geral/form/FormIdentificacao';
import { useFormData } from '../../../context/FormContext';
import { cadastroSchema, identificacaoSchema } from '../../../schema/schemaCadastro';

const FLOW_STEPS = [
    {
        Component: FormCadastro,
        schema: cadastroSchema,
        info: CADASTRO_STEP_INFO,
    },
    {
        Component: FormIdentificacao,
        schema: identificacaoSchema,
        info: IDENTIFICACAO_STEP_INFO,
    },
];

const progressSteps = FLOW_STEPS.map(({ info }, index) => ({
    key: info.progressLabel,
    thresholds: Math.round((index / (FLOW_STEPS.length - 1)) * 100),
}));

export function FormPrincipal({ setStepInfo }) {
    const [step, setStep] = useState(0);
    const { formData, atualizarForm } = useFormData();
    const activeStep = FLOW_STEPS[step];
    const ActiveStep = activeStep.Component;

    const methods = useForm({
        resolver: yupResolver(activeStep.schema),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: formData,
    });

    useEffect(() => {
        const progress = Math.round((step / (FLOW_STEPS.length - 1)) * 100);

        setStepInfo({
            ...activeStep.info,
            progress,
            progressSteps,
        });
    }, [activeStep.info, setStepInfo, step]);

    const nextStep = (data) => {
        if (data) {
            atualizarForm(data);
        }

        setStep((currentStep) => Math.min(currentStep + 1, FLOW_STEPS.length - 1));
    };

    const prevStep = () => {
        setStep((currentStep) => Math.max(currentStep - 1, 0));
    };

    return (
        <FormProvider {...methods}>
            <ActiveStep onNext={nextStep} backStep={prevStep} />
        </FormProvider>
    );
}
