import { useState, useEffect, Suspense, lazy } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { cadastroSchema, tipoOcupacao, generoSchema, titularCia, cepSchema, dadosPessoaisSchema } from '../../../schema/schemaCredLuz';
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormDataLuz } from '../../../context/FormContextLuz';

const Step1 = lazy(() => import('../FORM/FormCadastro'));
const Step2 = lazy(() => import('../FORM/FormTipoOcupacao'));
const Step3 = lazy(() => import('../FORM/FormGenero'));
const Step4 = lazy(() => import('../FORM/FormTitularCia'));
const Step5 = lazy(() => import('../FORM/FormEndereco'));
const Step6 = lazy(() => import('../FORM/FormDadosPessoais'))

const schemas = [cadastroSchema, tipoOcupacao, generoSchema, titularCia, cepSchema, dadosPessoaisSchema];

export function FormCredLuz() {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormDataLuz();

    const methods = useForm({
        resolver: zodResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        if (step >= 2) {
            methods.reset(formData);
        }
    }, [step, methods, formData]);

    const nextStep = (data) => {
        console.log(step)
        atualizarForm(data)
        console.log(formData)
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const onSubmit = (data) => {
        atualizarForm(data)
        console.log(formData)
    }

    return (
        <FormProvider {...methods}>
            <Suspense>
                {step === 1 && <Step1 onNext={nextStep} />}
                {step === 2 && <Step2 onNext={nextStep} backStep={prevStep} />}
                {step === 3 && <Step3 onNext={nextStep} backStep={prevStep} />}
                {step === 4 && <Step4 onNext={nextStep} backStep={prevStep} />}
                {step === 5 && <Step5 onNext={nextStep} backStep={prevStep} />}
                {step === 6 && <Step6 onNext={onSubmit} backStep={prevStep} />}
            </Suspense>
        </FormProvider>
    )
}