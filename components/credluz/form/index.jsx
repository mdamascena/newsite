import { useState, useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { respostaSchema, resumoSchema, tipoOcupacaoSchema, titularCiaSchema, companhiaEnergiaSchema, simulacaoSchema, dadosBancariosSchema, envioRgSchema, envioFaturaSchema, finalizadoSchema } from '../../../schema/schemaCredLuz';
import { cadastroSchema, identificacaoSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { useFormData } from '../../../context/FormContext';
import { CIAE_ID_STORAGE_KEY, getCompanhiasEnergiaPorCidade } from '../../../services/servicesEnd/apiCompanhiaEnergia';
import { toastErrorColored } from 'shared/toastUtils/toastValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import dynamic from 'next/dynamic';

const StepCadastro = dynamic(() => import('../../geral/form/FormCadastro'));
const StepIdentificacao = dynamic(() => import('../../geral/form/FormIdentificacao'));
const StepTipoOcupacao = dynamic(() => import('./FormTipoOcupacao'));
const StepTitutularCia = dynamic(() => import('./FormTitularCia'));
const StepEndereco = dynamic(() => import('../../geral/form/FormEndereco'));
const StepCompanhiaEnergia = dynamic(() => import('./FormCompanhiaEnergia'));
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
    titularCiaSchema,
    identificacaoSchema,
    tipoOcupacaoSchema,
    enderecoSchema,
    companhiaEnergiaSchema,
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
    const [companhiasEnergia, setCompanhiasEnergia] = useState([]);
    const { formData, atualizarForm } = useFormData();
    const exibirStepCompanhia = companhiasEnergia.length > 1;

    const titleChartCadastro = useMemo(() => ["Preenchimento de proposta",], []);

    const titleChartEnvioDocumento = useMemo(() => ["Envio de documentos",], []);

    const cadastroSteps = useMemo(() => {
        const steps = [
            { key: "Registrar conta" },
            { key: "Titular da fatura" },
            { key: "Identificação" },
            { key: "Perfil ocupacional" },
            { key: "Contato e localidade" },
        ];

        if (exibirStepCompanhia) {
            steps.push({ key: "Companhia de energia" });
        }

        steps.push(
            { key: "Confirmação dos dados" },
            { key: "Resposta da solicitação" }
        );

        return steps.map((item, index) => ({
            ...item,
            thresholds: Math.round((index / (steps.length - 1)) * 100),
        }));
    }, [exibirStepCompanhia]);

    const envioDocumentoSteps = useMemo(() => [
        { key: "Simulação", thresholds: 0 },
        { key: "Dados bancários", thresholds: 25 },
        { key: "Envio de identidade", thresholds: 50 },
        { key: "Envio da fatura de energia", thresholds: 75 },
        { key: "Finalizado", thresholds: 100 },
    ], []);

    const cadastroLuzTitle = useMemo(() => [
        "Vamos começar!",
        "Quem paga a luz?",
        "Um pouco mais sobre você",
        "O que você faz da vida?",
        "Onde você está no mapa?",
        "Qual é a sua companhia?",
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
        "É você que manda apagar a luz para não vir caro? Conta pra gente!",
        "Aqui queremos conhecer um pouquinho mais sobre você. Simples, né?",
        "Como é sua oculpação, se trabalha, se é aposentado. Estamos curiosos!",
        "Queremos saber onde mora e como falamos com você",
        "Confirme qual companhia fornece energia para sua residência",
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
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: formData
    })

    useEffect(() => {
        if (step < 9) {
            const cadastroStepIndex = !exibirStepCompanhia && step > 6 ? step - 2 : step - 1;

            setTitleChart(titleChartCadastro);
            setProgressChange(Math.round((cadastroStepIndex / (cadastroSteps.length - 1)) * 100));
            setTitleText(cadastroLuzTitle[step - 1]);
            setDescriptionText(cadastroLuzDescription[step - 1]);
            setStepCurrent(cadastroSteps)

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setTitleChart(titleChartEnvioDocumento);
            setProgressChange(0);
            setProgressChange(Math.round(((step - 9) / (envioDocumentoSteps.length - 1)) * 100));
            setTitleText(envioDocLuzTitle[step - 9]);
            setDescriptionText(envioDocLuzDescription[step - 9]);
            setStepCurrent(envioDocumentoSteps)
        
        }}, [step, 
            setTitleChart, 
            setProgressChange, 
            setTitleText, 
            setDescriptionText, 
            setStepCurrent, 
            cadastroLuzTitle, 
            cadastroLuzDescription, 
            cadastroSteps, 
            exibirStepCompanhia,
            envioDocLuzDescription, 
            envioDocLuzTitle,
            envioDocumentoSteps,
            titleChartCadastro,
            titleChartEnvioDocumento
            ]
        );

    const nextStep = (data) => {
        if (data) {
            atualizarForm(data)
        }
        setStep((prevStep) => Math.min(prevStep + 1, schemas.length));
    };

    const prevStep = () => {
        setStep((prevStep) => {
            if (prevStep === 7 && !exibirStepCompanhia) {
                return 5;
            }

            return Math.max(prevStep - 1, 1);
        });
    };

    const salvarCompanhia = (companhia) => {
        const dadosCompanhia = {
            ciaeId: String(companhia.ciaeId),
            ciaeDescricao: companhia.ciaeDescricao,
        };

        atualizarForm(dadosCompanhia);
        methods.setValue("ciaeId", dadosCompanhia.ciaeId);
        methods.setValue("ciaeDescricao", dadosCompanhia.ciaeDescricao);
        window.localStorage.setItem(CIAE_ID_STORAGE_KEY, dadosCompanhia.ciaeId);
    };

    const handleEnderecoNext = async (endereco) => {
        setCompanhiasEnergia([]);
        atualizarForm({
            ...endereco,
            ciaeId: "",
            ciaeDescricao: "",
        });
        methods.setValue("ciaeId", "");
        methods.setValue("ciaeDescricao", "");
        window.localStorage.removeItem(CIAE_ID_STORAGE_KEY);

        try {
            const companhias = await getCompanhiasEnergiaPorCidade({
                cidadeIbgeId: endereco.cidadeIbgeId,
                cidade: endereco.cidadeCep || endereco.cidade,
            });

            if (companhias.length === 0) {
                toastErrorColored("Não encontramos uma companhia de energia para a cidade informada.");
                return;
            }

            setCompanhiasEnergia(companhias);

            if (companhias.length === 1) {
                salvarCompanhia(companhias[0]);
                setStep(7);
                return;
            }

            setStep(6);
        } catch (error) {
            console.error("Erro ao consultar companhias de energia:", error);
            toastErrorColored("Não foi possível consultar as companhias de energia. Tente novamente.");
        }
    };

    const handleCompanhiaNext = (companhia) => {
        salvarCompanhia(companhia);
        setStep(7);
    };

    return (
        <FormProvider {...methods}>
            {step === 1 && <StepCadastro onNext={nextStep} />}
            {step === 2 && <StepTitutularCia onNext={nextStep} backStep={prevStep} />}
            {step === 3 && <StepIdentificacao onNext={nextStep} backStep={prevStep} />}
            {step === 4 && <StepTipoOcupacao onNext={nextStep} backStep={prevStep} />}
            {step === 5 && <StepEndereco onNext={handleEnderecoNext} backStep={prevStep} />}
            {step === 6 && <StepCompanhiaEnergia companhias={companhiasEnergia} onNext={handleCompanhiaNext} backStep={prevStep} />}
            {step === 7 && <StepResumo onNext={nextStep} backStep={prevStep} />}
            {step === 8 && <PropostaAprovada onNext={nextStep} title={"Parabéns!"} subTitle={"Sua proposta foi Pré-Aprovada"} text={"Para ficar por dentro de mais atualizações, acesse sua conta!"} />}

            {/* ENVIO DE DADOS E DOCUMENTOS*/}

            {step === 9 && <StepSimulacao onNext={nextStep} />}
            {step === 10 && <StepDadosBancarios onNext={nextStep} backStep={prevStep} />}
            {step === 11 && <StepEnvioRg onNext={nextStep} backStep={prevStep} />}
            {step === 12 && <StepEnvioFatura onNext={nextStep} backStep={prevStep} />}
            {step === 13 && <StepFinalizado />}
        </FormProvider>
    )
}
