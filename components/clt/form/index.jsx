import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormData } from "../../../context/FormContext";
import { cadastroSchema, enderecoSchema, identificacaoSchema } from "../../../schema/schemaCadastro";
import FormCadastro, { STEP_INFO as CADASTRO_STEP_INFO } from "../../geral/form/FormCadastro";
import FormEndereco, { STEP_INFO as ENDERECO_STEP_INFO } from "../../geral/form/FormEndereco";
import FormIdentificacao, { STEP_INFO as IDENTIFICACAO_STEP_INFO } from "../../geral/form/FormIdentificacao";

const FLOW_STEPS = [
    { Component: FormCadastro, schema: cadastroSchema, info: CADASTRO_STEP_INFO },
    { Component: FormIdentificacao, schema: identificacaoSchema, info: IDENTIFICACAO_STEP_INFO },
    { Component: FormEndereco, schema: enderecoSchema, info: ENDERECO_STEP_INFO },
];

const LAST_STEP_INDEX = FLOW_STEPS.length - 1;
const getProgress = (stepIndex) => Math.round((stepIndex / LAST_STEP_INDEX) * 100);
const progressSteps = FLOW_STEPS.map(({ info }, index) => ({
    key: info.progressLabel,
    thresholds: getProgress(index),
}));

export function FormCLT({ setStepInfo }) {
    const [stepIndex, setStepIndex] = useState(0);
    const { formData, atualizarForm } = useFormData();
    const activeStep = FLOW_STEPS[stepIndex];
    const { Component: ActiveStep, schema } = activeStep;
    const progress = getProgress(stepIndex);

    const methods = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        reValidateMode: "onBlur",
        defaultValues: formData,
    });

    useEffect(() => {
        setStepInfo({
            ...activeStep.info,
            progress,
            progressSteps,
        });
    }, [activeStep.info, progress, setStepInfo]);

    const nextStep = (data) => {
        if (data) {
            atualizarForm(data);
        }

        setStepIndex((currentIndex) => Math.min(currentIndex + 1, LAST_STEP_INDEX));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const prevStep = () => {
        setStepIndex((currentIndex) => Math.max(currentIndex - 1, 0));
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <FormProvider {...methods}>
            <ActiveStep onNext={nextStep} backStep={prevStep} />
        </FormProvider>
    );
}
