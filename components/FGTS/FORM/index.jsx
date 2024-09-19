import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormDataFgts } from "../../../context/FormContextFgts";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema } from '../../../schema/schemaCadastro';

const Step1 = dynamic(() => import('../FORM/FormCadastro'));

const schemas = [cadastroSchema];

export function FormFgts({ progressChange }) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormDataFgts();

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        if (step >= 2) {
            methods.reset(formData);
        }
        progressChange(((step - 1) / schemas.length) * 100)
    }, [step, methods, formData, progressChange]);

    return (
        <FormProvider {...methods}>
            {step === 1 && <Step1 />}
        </FormProvider>
    )
}