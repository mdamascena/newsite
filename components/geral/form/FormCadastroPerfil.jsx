import { useEffect, useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { motion } from "framer-motion";
import { FaBolt, FaCar, FaCheckCircle, FaCreditCard, FaRegCircle, FaUserTie } from "react-icons/fa";
import { FaPerson, FaPersonDress } from "react-icons/fa6";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdOutlineHandyman, MdOutlineMilitaryTech } from "react-icons/md";
import { IoIosArrowBack, IoIosCloseCircleOutline, IoIosFemale, IoIosMale } from "react-icons/io";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { TbMessage2Question } from "react-icons/tb";
import { Progress } from "components/ui/progress";
import { useDisclosure } from "components/lib/nextui-compat";
import { useFormData } from "../../../context/FormContext";
import { container, item } from "shared/motionUtils/motionTransation";
import { toastErrorColored } from "shared/toastUtils/toastValidation";
import { ToastContainer } from "react-toastify";
import BtnBack from "../button/BtnBlueBack";
import BtnNext from "../button/BtnBlueNext";
import { OptLabel } from "../style";
import ModalGenero from "../modal/ModalGenero";

const perguntasBase = [
    {
        field: "perfilGenero",
        title: "Como voce se identifica?",
        description: "Essa informacao ajuda a manter seu cadastro completo.",
        options: [
            { value: "masculino", label: "Masculino", icon: FaPerson },
            { value: "feminino", label: "Feminino", icon: FaPersonDress },
            { value: "outros", label: "Outros", icon: IoMaleFemaleOutline },
            { value: "nao_informar", label: "Nao informar", icon: FaRegCircle },
        ],
    },
    {
        field: "perfilOcupacao",
        title: "Qual e sua ocupacao hoje?",
        description: "Com isso ja conseguimos indicar as linhas de credito mais provaveis.",
        options: [
            { value: "clt", label: "CLT", detail: "Carteira assinada", icon: BsPersonBadgeFill },
            { value: "aposentado", label: "Aposentado", detail: "Beneficio INSS", icon: FaPerson },
            { value: "pensionista", label: "Pensionista", detail: "Pensao INSS", icon: FaPersonDress },
            { value: "beneficiario_inss", label: "BPC/LOAS", detail: "Beneficio INSS", icon: FaUserTie },
            { value: "servidor_publico", label: "Servidor", detail: "Publico ativo/inativo", icon: FaUserTie },
            { value: "autonomo", label: "Autonomo", detail: "Profissional liberal", icon: MdOutlineHandyman },
            { value: "militar", label: "Militar", detail: "Forcas Armadas", icon: MdOutlineMilitaryTech },
            { value: "outro", label: "Outro", detail: "Outra situacao", icon: FaRegCircle },
        ],
    },
    {
        field: "perfilContaLuzTitular",
        title: "A conta de luz esta no seu nome?",
        description: "Essa resposta ajuda a avaliar credito com debito na conta de energia.",
        options: [
            { value: "sim", label: "Sim", detail: "Esta no meu nome", icon: FaBolt },
            { value: "nao", label: "Nao", detail: "Esta em outro nome", icon: FaRegCircle },
        ],
    },
    {
        field: "perfilTemCartaoCredito",
        title: "Voce tem cartao de credito?",
        description: "O PIX parcelado usa o limite do cartao como alternativa de credito.",
        options: [
            { value: "sim", label: "Sim", detail: "Tenho cartao", icon: FaCreditCard },
            { value: "nao", label: "Nao", detail: "Nao tenho cartao", icon: FaRegCircle },
        ],
    },
    {
        field: "perfilTemVeiculo",
        title: "Voce possui veiculo?",
        description: "Pode ser carro, moto ou outro veiculo em seu nome.",
        options: [
            { value: "sim", label: "Sim", detail: "Tenho veiculo", icon: FaCar },
            { value: "nao", label: "Nao", detail: "Nao tenho veiculo", icon: FaRegCircle },
        ],
    },
];

const perguntaVeiculoQuitado = {
    field: "perfilVeiculoQuitado",
    title: "Seu veiculo esta quitado?",
    description: "Veiculo quitado costuma aumentar as possibilidades de analise.",
    options: [
        { value: "sim", label: "Sim", detail: "Esta quitado", icon: FaCheckCircle },
        { value: "nao", label: "Nao", detail: "Ainda estou pagando", icon: FaCar },
    ],
};

function OptionCard({ option, selected, onSelect }) {
    const Icon = option.icon;

    return (
        <motion.button
            type="button"
            variants={item}
            onClick={() => onSelect(option.value)}
            className={`col-span-3 grid min-h-29 grid-cols-6 items-center rounded-md bg-white p-3 text-left text-slate-400 shadow-md duration-200 hover:bg-blue-100 hover:text-blue-500 hover:ring-2 hover:ring-blue-500 ${
                selected ? "bg-blue-600 text-white shadow-nome ring-2 ring-blue-600 hover:bg-blue-600 hover:text-white" : ""
            }`}
        >
            <div className="col-span-6 flex justify-center lg:col-span-2 lg:justify-start">
                <Icon className={`rounded-md p-2 text-5xl ${selected ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`} />
            </div>
            <div className="col-span-6 text-center lg:col-span-4 lg:text-start">
                <p className="text-sm font-semibold lg:text-base">{option.label}</p>
                {option.detail && <span className="text-xs font-light">{option.detail}</span>}
            </div>
        </motion.button>
    );
}

export default function FormCadastroPerfil({ onNext, backStep }) {
    const { control, handleSubmit, setValue, trigger, watch, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const [subStep, setSubStep] = useState(0);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const temVeiculo = watch("perfilTemVeiculo") || formData.perfilTemVeiculo;

    const perguntas = useMemo(() => {
        if (temVeiculo === "sim") {
            return [...perguntasBase, perguntaVeiculoQuitado];
        }

        return perguntasBase;
    }, [temVeiculo]);

    const perguntaAtual = perguntas[subStep];
    const progress = Math.round(((subStep + 1) / perguntas.length) * 100);
    const isLastQuestion = subStep === perguntas.length - 1;

    useEffect(() => {
        perguntasBase.forEach((pergunta) => {
            if (formData[pergunta.field]) {
                setValue(pergunta.field, formData[pergunta.field]);
            }
        });

        if (formData.perfilVeiculoQuitado) {
            setValue("perfilVeiculoQuitado", formData.perfilVeiculoQuitado);
        }
    }, [formData, setValue]);

    useEffect(() => {
        const erroAtual = errors[perguntaAtual?.field];

        if (erroAtual) {
            toastErrorColored(erroAtual.message);
        }
    }, [errors, perguntaAtual]);

    const handleSelect = (field, value) => {
        const nextValues = { [field]: value };

        if (field === "perfilTemVeiculo" && value === "nao") {
            nextValues.perfilVeiculoQuitado = "";
            setValue("perfilVeiculoQuitado", "");
        }

        Object.entries(nextValues).forEach(([key, fieldValue]) => {
            setValue(key, fieldValue, { shouldDirty: true, shouldValidate: true });
        });

        atualizarForm(nextValues);

        if (field === "perfilTemVeiculo" && value === "sim") {
            setSubStep((prev) => prev + 1);
            return;
        }

        if (field === "perfilTemVeiculo" && value === "nao") {
            return;
        }

        if (!isLastQuestion) {
            setSubStep((prev) => prev + 1);
        }
    };

    const handleNextQuestion = async () => {
        const isValid = await trigger(perguntaAtual.field);

        if (!isValid) {
            toastErrorColored("Selecione uma opcao para continuar");
            return;
        }

        if (!isLastQuestion) {
            setSubStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (subStep > 0) {
            setSubStep((prev) => prev - 1);
            return;
        }

        backStep();
    };

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext(data);
    };

    return (
        <form className="lg:min-h-screen" onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid grid-cols-6 select-none xl:px-7">

                <div className="container-form-head">
                    <div className="col-span-6 flex items-end justify-between gap-3">
                        <h1 className="text-xl font-semibold tracking-tight text-blue-600">
                            Cadastro de perfil
                        </h1>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                            Pergunta {subStep + 1} de {perguntas.length}
                        </span>
                    </div>
                    <p className="col-span-6 text-sm font-light text-slate-400 lg:text-base">
                        Responda rapidinho para indicarmos as melhores opcoes para voce.
                    </p>
                    <div className="col-span-6 mt-2">
                        <Progress className="bg-blue-100" value={progress} />
                    </div>
                </div>

                <div className="container-form-body lg:pt-12">
                    <motion.div variants={item} className="col-span-6 mb-3">
                        <h2 className="text-lg font-semibold tracking-tight text-slate-700">
                            {perguntaAtual.title}
                        </h2>
                        <p className="mt-1 text-sm font-light text-slate-400">
                            {perguntaAtual.description}
                        </p>
                    </motion.div>

                    <Controller
                        name={perguntaAtual.field}
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => {
                            if (perguntaAtual.field === "perfilGenero") {
                                const selecionarGenero = (nextValue) => {
                                    onChange(nextValue);
                                    handleSelect(perguntaAtual.field, nextValue);
                                };

                                return (
                                    <div value={value} onChange={onChange} className="grid grid-cols-6 col-span-6 gap-2 items-center">
                                        
                                        <motion.div className="col-span-3" key="perfil-masculino" variants={item}>
                                            
                                            <input type="radio" className="hidden peer" name="perfilGenero" value="masculino" id="perfil-masculino" checked={value === "masculino"} onChange={() => selecionarGenero("masculino")} />
                                            <OptLabel className="grid lg:grid-cols-1 grid-cols-3" htmlFor="perfil-masculino">
                                                <div className="col-span-3 flex justify-center mb-1">
                                                    <IoIosMale className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                                </div>
                                                <div className="col-span-3 text-center">
                                                    <p className="">
                                                        Masculino
                                                    </p>
                                                </div>
                                            </OptLabel>
                                            
                                        </motion.div>

                                        <motion.div className="col-span-3" key="perfil-feminino" variants={item}>
                                            <input type="radio" className="hidden peer" name="perfilGenero" value="feminino" id="perfil-feminino" checked={value === "feminino"} onChange={() => selecionarGenero("feminino")} />
                                            <OptLabel className="grid lg:grid-cols-1 grid-cols-3" htmlFor="perfil-feminino">
                                                <div className="col-span-3 flex justify-center mb-1">
                                                    <IoIosFemale className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                                </div>
                                                <div className="col-span-3 text-center">
                                                    <p className="">
                                                        Feminino
                                                    </p>
                                                </div>
                                            </OptLabel>
                                        </motion.div>

                                        <motion.div className="col-span-3" key="perfil-outros" variants={item}>
                                            <input type="radio" className="hidden peer" name="perfilGenero" value="outros" id="perfil-outros" checked={value === "outros"} onChange={() => selecionarGenero("outros")} />
                                            <OptLabel className="grid lg:grid-cols-1 grid-cols-3" htmlFor="perfil-outros">
                                                <div className="col-span-3 flex justify-center mb-1">
                                                    <IoMaleFemaleOutline className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                                </div>
                                                <div className="col-span-3 text-center">
                                                    <p className="">
                                                        Outros
                                                    </p>
                                                </div>
                                            </OptLabel>
                                        </motion.div>

                                        <motion.div className="col-span-3" key="perfil-nao-informar" variants={item}>
                                            <input type="radio" className="hidden peer" name="perfilGenero" value="nao_informar" id="perfil-nao-informar" checked={value === "nao_informar"} onChange={() => selecionarGenero("nao_informar")} />
                                            <OptLabel className="grid lg:grid-cols-1 grid-cols-3" htmlFor="perfil-nao-informar">
                                                <div className="col-span-3 flex justify-center mb-1">
                                                    <IoIosCloseCircleOutline className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                                </div>
                                                <div className="col-span-3 text-center">
                                                    <p className="">
                                                        Não informar
                                                    </p>
                                                </div>
                                            </OptLabel>
                                        </motion.div>

                                        <motion.div className="col-span-6 mx-auto mt-2" variants={item}>
                                            <div className="flex text-blue-500 cursor-pointer text-center items-center" onClick={(e) => { e.preventDefault(); onOpen(); }}>
                                                <TbMessage2Question className="text-4xl mr-3 p-1 rounded-lg bg-blue-100 text-blue-500" />
                                                <p>Por que apenas essas opções ?</p>
                                            </div>
                                            <ModalGenero isOpen={isOpen} onOpenChange={onOpenChange} />
                                        </motion.div>
                                    </div>
                                );
                            }

                            return (
                                <div className="col-span-6 grid grid-cols-6 gap-2">
                                    {perguntaAtual.options.map((option) => (
                                        <OptionCard
                                            key={option.value}
                                            option={option}
                                            selected={value === option.value}
                                            onSelect={(nextValue) => handleSelect(perguntaAtual.field, nextValue)}
                                        />
                                    ))}
                                </div>
                            );
                        }}
                    />

                </div>

                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack
                            tipo="button"
                            nome="Voltar"
                            event={handleBack}
                            iconLeft={<IoIosArrowBack className="mr-1 lg:mr-3" />}
                        />
                    </div>

                    <div className="col-span-5">
                        <BtnNext
                            tipo={isLastQuestion ? "submit" : "button"}
                            nome={isLastQuestion ? "Concluir perfil" : "Continuar"}
                            event={isLastQuestion ? handleSubmit(onSubmit) : handleNextQuestion}
                        />
                    </div>
                </div>
            </motion.div>
        </form>
    );
}
