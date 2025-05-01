import { useState, useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { respostaSchema, resumoSchema, tipoOcupacaoSchema, titularCiaSchema, simulacaoSchema, dadosBancariosSchema, envioRgSchema, envioFaturaSchema, finalizadoSchema } from '../../../schema/schemaCredLuz';
import { cadastroSchema, identificacaoSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { useFormData } from '../../../context/FormContext';
import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';

const StepCadastro = dynamic(() => import('../../geral/form/FormCadastro'));
const StepIdentificacao = dynamic(() => import('../../geral/form/FormIdentificacao'));
const StepTipoOcupacao = dynamic(() => import('./FormTipoOcupacao'));
const StepTitutularCia = dynamic(() => import('./FormTitularCia'));
const StepEndereco = dynamic(() => import('../../geral/form/FormEndereco'));
const StepResumo = dynamic(() => import('./ResumoCredLuz'));

const PropostaAprovada = dynamic(() => import('../../geral/PropostaAprovada'));
const PropostaRecusada = dynamic(() => import('../../geral/PropostaRecusada'));
const PropostaAtiva = dynamic(() => import('../../geral/PropostaAtiva'));
const ContratoAtivo = dynamic(() => import('../../geral/ContratoAtivo'));
const ErroApi = dynamic(() => import('../../geral/ErroApi'));

const StepSimulacao = dynamic(() => import('./FormSimulacao'));
const StepEnvioRg = dynamic(() => import('./FormEnvioRg'));
const StepEnvioFatura = dynamic(() => import('./FormEnvioFatura'));
const StepDadosBancarios = dynamic(() => import('./FormDadosBancarios'));
const StepFinalizado = dynamic(() => import('./Finalizado'));

const schemas = [
    cadastroSchema,
    identificacaoSchema,
    tipoOcupacaoSchema,
    titularCiaSchema,
    enderecoSchema,
    resumoSchema,
    respostaSchema,
    simulacaoSchema,
    dadosBancariosSchema,
    envioRgSchema,
    envioFaturaSchema,
    finalizadoSchema
];

export function FormCredLuz({setTitleChart, setProgressChange, setTitleText, setDescriptionText, setStepCurrent }) {

    const [step, setStep] = useState(1);
    const { formData, atualizarForm } = useFormData();

    const titleChartCadastro = useMemo(() => ["Preenchimento de proposta",]);

    const titleChartEnvioDocumento = useMemo(() => ["Envio de documentos",]);

    const cadastroSteps = useMemo(() => [
        { key: "Registrar conta", thresholds: 0 },
        { key: "Identificação", thresholds: 17 },
        { key: "Perfil ocupacional", thresholds: 33 },
        { key: "Titular da fatura", thresholds: 50 },
        { key: "Contato e localidade", thresholds: 67 },
        { key: "Confirmação dos dados", thresholds: 83 },
        { key: "Reposta da solicitação", thresholds: 100 }
    ], []);

    const envioDocumentoSteps = useMemo(() => [
        { key: "Simulação", thresholds: 0 },
        { key: "Dados bancários", thresholds: 25 },
        { key: "Envio de identidade", thresholds: 50 },
        { key: "Envio da fatura de energia", thresholds: 75 },
        { key: "Finalizado", thresholds: 100 },
    ], []);

    const cadastroLuzTitle = useMemo(() => [
        "Vamos começar!",
        "Um pouco mais sobre você",
        "O que você faz da vida?",
        "Quem paga a luz?",
        "Onde você está no mapa?",
        "Está tudo correto?",
        "Resposta da solicitação"
    ], []);

    const envioDocLuzTitle = useMemo(() => [
        "Crédito Liberado",
        "Dados bancários",
        "Identidade",
        "Fatura de energia",
        "Finalizado",
    ], []);

    const cadastroLuzDescription = useMemo(() => [
        "Preencha seus dados iniciais para criarmos a sua conta",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Como é sua oculpação, se trabalha, se é aposentado. Estamos curiosos!",
        "É você que manda apagar a luz para não vir caro? Conta pra gente!",
        "Queremos saber onde mora e como falamos com você",
        "Confira se todos os dados estão corretos antes de prosseguir",
        "Resposta da solicitação"
    ], []);

    const envioDocLuzDescription = useMemo(() => [
        "Escolha o valor e a quantidade de parcelas",
        "Informe seus dados bancários",
        "Envie uma foto do seu documento de identidade",
        "Envie uma foto da sua fatura de energia",
        "Finalizado",
    ], []);

    const methods = useForm({
        resolver: yupResolver(schemas[step - 1]),
        mode: 'onChange',
        defaultValues: formData
    })

    useEffect(() => {
        if (step < 8) {
            setTitleChart(titleChartCadastro);
            setProgressChange(Math.round(((step - 1) / (cadastroSteps.length - 1)) * 100));
            setTitleText(cadastroLuzTitle[step - 1]);
            setDescriptionText(cadastroLuzDescription[step - 1]);
            setStepCurrent(cadastroSteps)

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setTitleChart(titleChartEnvioDocumento);
            setProgressChange(0);
            setProgressChange(Math.round(((step - 8) / (envioDocumentoSteps.length - 1)) * 100));
            setTitleText(envioDocLuzTitle[step - 8]);
            setDescriptionText(envioDocLuzDescription[step - 8]);
            setStepCurrent(envioDocumentoSteps)
        }


    }, [step, setTitleChart, setProgressChange, setTitleText, setDescriptionText, setStepCurrent, cadastroLuzTitle, cadastroLuzDescription, cadastroSteps]);

    const nextStep = (data) => {
        atualizarForm(data)
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    return (
        <FormProvider {...methods}>
            {step === 1 && <StepCadastro onNext={nextStep} />}
            {step === 2 && <StepIdentificacao onNext={nextStep} backStep={prevStep} />}
            {step === 3 && <StepTipoOcupacao onNext={nextStep} backStep={prevStep} />}
            {step === 4 && <StepTitutularCia onNext={nextStep} backStep={prevStep} />}
            {step === 5 && <StepEndereco onNext={nextStep} backStep={prevStep} />}
            {step === 6 && <StepResumo onNext={nextStep} backStep={prevStep} />}
            {step === 7 && <PropostaAprovada onNext={nextStep} title={"Parabéns!"} subTitle={"Sua proposta foi Pré-Aprovada"} text={"Para ficar por dentro de mais atualizações, acesse sua conta!"} />}

            {/* ENVIO DE DADOS E DOCUMENTOS*/}

            {step === 8 && <StepSimulacao onNext={nextStep} />}
            {step === 9 && <StepDadosBancarios onNext={nextStep} backStep={prevStep} />}
            {step === 10 && <StepEnvioRg onNext={nextStep} backStep={prevStep} />}
            {step === 11 && <StepEnvioFatura onNext={nextStep} backStep={prevStep} />}
            {step === 12 && <StepFinalizado />}
        </FormProvider>
    )
}