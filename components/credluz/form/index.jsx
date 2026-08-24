import { useState, useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { respostaSchema, resumoSchema, tipoOcupacaoSchema, titularCiaSchema, companhiaEnergiaSchema, simulacaoSchema, dadosBancariosSchema, envioRgSchema, envioFaturaSchema, finalizadoSchema } from '../../../schema/schemaCredLuz';
import { cadastroSchema, identificacaoSchema, enderecoSchema } from '../../../schema/schemaCadastro';
import { useFormData } from '../../../context/FormContext';
import { CIAE_ID_STORAGE_KEY, getCompanhiasEnergiaPorCidade } from '../../../services/servicesEnd/apiCompanhiaEnergia';
import { registrarUsuario } from '../../../services/serviceAuth/apiAddPessoa';
import { toastErrorColored } from 'shared/toastUtils/toastValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import StepCadastro, { STEP_INFO as CADASTRO_STEP_INFO } from '../../geral/form/FormCadastro';
import StepIdentificacao, { STEP_INFO as IDENTIFICACAO_STEP_INFO } from '../../geral/form/FormIdentificacao';
import StepEndereco, { STEP_INFO as ENDERECO_STEP_INFO } from '../../geral/form/FormEndereco';
import StepTipoOcupacao, { STEP_INFO as OCUPACAO_STEP_INFO } from './FormTipoOcupacao';
import StepTitularCia, { STEP_INFO as TITULAR_STEP_INFO } from './FormTitularCia';
import StepCompanhiaEnergia, { STEP_INFO as COMPANHIA_STEP_INFO } from './FormCompanhiaEnergia';
import StepResumo, { STEP_INFO as RESUMO_STEP_INFO } from './ResumoCredLuz';
import PropostaAprovada, { STEP_INFO as PROPOSTA_STEP_INFO } from '../../geral/PropostaAprovada';
import StepSimulacao, { STEP_INFO as SIMULACAO_STEP_INFO } from './FormSimulacao';
import StepEnvioRg, { STEP_INFO as ENVIO_RG_STEP_INFO } from './FormEnvioRg';
import StepEnvioFatura, { STEP_INFO as ENVIO_FATURA_STEP_INFO } from './FormEnvioFatura';
import StepDadosBancarios, { STEP_INFO as DADOS_BANCARIOS_STEP_INFO } from './FormDadosBancarios';
import StepFinalizado, { STEP_INFO as FINALIZADO_STEP_INFO } from './Finalizado';

const SCHEMAS = [
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

const CADASTRO_FLOW = [
    { step: 1, info: CADASTRO_STEP_INFO },
    { step: 2, info: TITULAR_STEP_INFO },
    { step: 3, info: IDENTIFICACAO_STEP_INFO },
    { step: 4, info: OCUPACAO_STEP_INFO },
    { step: 5, info: ENDERECO_STEP_INFO },
    { step: 6, info: COMPANHIA_STEP_INFO, optional: true },
    { step: 7, info: RESUMO_STEP_INFO },
    { step: 8, info: PROPOSTA_STEP_INFO },
];

const DOCUMENTOS_FLOW = [
    { step: 9, info: SIMULACAO_STEP_INFO },
    { step: 10, info: DADOS_BANCARIOS_STEP_INFO },
    { step: 11, info: ENVIO_RG_STEP_INFO },
    { step: 12, info: ENVIO_FATURA_STEP_INFO },
    { step: 13, info: FINALIZADO_STEP_INFO },
];

const getProgress = (index, total) => (
    total <= 1 ? 100 : Math.round((index / (total - 1)) * 100)
);

const getProgressSteps = (flow) => flow.map(({ info }, index) => ({
    key: info.progressLabel,
    thresholds: getProgress(index, flow.length),
}));

const DOCUMENTOS_PROGRESS_STEPS = getProgressSteps(DOCUMENTOS_FLOW);

export function FormCredLuz({ setStepInfo }) {

    const [step, setStep] = useState(1);
    const [companhiasEnergia, setCompanhiasEnergia] = useState([]);
    const { formData, atualizarForm } = useFormData();
    const exibirStepCompanhia = companhiasEnergia.length > 1;

    const cadastroFlow = useMemo(() => {
        return CADASTRO_FLOW.filter(({ optional }) => !optional || exibirStepCompanhia);
    }, [exibirStepCompanhia]);

    const cadastroProgressSteps = useMemo(
        () => getProgressSteps(cadastroFlow),
        [cadastroFlow]
    );

    const methods = useForm({
        resolver: yupResolver(SCHEMAS[step - 1]),
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        defaultValues: formData
    })

    useEffect(() => {
        const flow = step < 9 ? cadastroFlow : DOCUMENTOS_FLOW;
        const progressSteps = step < 9 ? cadastroProgressSteps : DOCUMENTOS_PROGRESS_STEPS;
        const activeIndex = flow.findIndex(({ step: flowStep }) => flowStep === step);

        if (activeIndex === -1) {
            return;
        }

        setStepInfo({
            ...flow[activeIndex].info,
            progress: getProgress(activeIndex, flow.length),
            progressSteps,
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [cadastroFlow, cadastroProgressSteps, setStepInfo, step]);

    const nextStep = (data) => {
        if (data) {
            atualizarForm(data)
        }
        setStep((prevStep) => Math.min(prevStep + 1, SCHEMAS.length));
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

    const handleCriarUsuario = async (dadosCadastro) => {
        const cpfDigits = String(dadosCadastro.cpf || "").replace(/\D/g, "");

        if (formData.usuarioCriadoCpf === cpfDigits) {
            return true;
        }

        const resultado = await registrarUsuario({
            cpf: dadosCadastro.cpf,
            senha: dadosCadastro.senha,
        });

        if (!resultado.success) {
            return false;
        }

        atualizarForm({ usuarioCriadoCpf: cpfDigits });
        return true;
    };

    return (
        <FormProvider {...methods}>
            {step === 1 && <StepCadastro onNext={nextStep} onBeforeNext={handleCriarUsuario} />}
            {step === 2 && <StepTitularCia onNext={nextStep} backStep={prevStep} />}
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
