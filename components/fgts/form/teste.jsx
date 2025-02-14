import { useFormContext } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { useHookFormMask } from "use-mask-input"
import { motion } from "framer-motion";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { IoIosArrowBack } from "react-icons/io";
import { Input } from "components/ui/input";

export default function FormPagamento({ onNext, backStep }) {
    const { register, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm } = useFormData();
    const registerWithMask = useHookFormMask(register)

    const selectedKey = watch("tipoDeChave");

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    const handleKeySelection = (keyType) => {
        setValue("tipoDeChave", keyType);

        const data = getValues();

        if(keyType === "CPF"){
            setValue("chaveCpf", data.cpf)
        } else if(keyType === "Celular"){
            setValue("chaveCel", data.celular)
        } else if(watchChavePix === "Email"){
            setValue("chaveEmail", data.email)
        }
    };

    const container = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2 },
        },
    };

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid grid-cols-6 xl:px-7"
            >
                <div className="container-form-head">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Estamos quase lá!
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Agora só precisamos da sua chave Pix para prosseguir
                    </p>
                </div>

                <div className="container-form-body">
                    {/* Cards de Seleção */}
                    <div className="grid grid-cols-3 gap-4 col-span-6">
                        <div
                            className={`p-4 border-2 rounded-lg cursor-pointer ${selectedKey === "CPF" ? "border-blue-600 bg-blue-50" : "border-slate-300"}`}
                            onClick={() => handleKeySelection("CPF")}
                        >

                            <p className="text-center font-medium text-blue-600">CPF</p>
                        </div>
                        <div
                            className={`p-4 border-2 rounded-lg cursor-pointer ${selectedKey === "Celular" ? "border-blue-600 bg-blue-50" : "border-slate-300"}`}
                            onClick={() => handleKeySelection("Celular")}
                        >
                            <p className="text-center font-medium text-blue-600">Celular</p>
                        </div>
                        <div
                            className={`p-4 border-2 rounded-lg cursor-pointer ${selectedKey === "Email" ? "border-blue-600 bg-blue-50" : "border-slate-300"}`}
                            onClick={() => handleKeySelection("Email")}
                        >
                            <p className="text-center font-medium text-blue-600">Email</p>
                        </div>
                    </div>

                    {/* Campo Condicional Baseado na Seleção */}
                    {selectedKey === "CPF" && (
                        <div className="lg:col-span-6 col-span-1 mt-4">
                            <Input
                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                    errors.chaveCpf ? "border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50" : ""
                                }`}
                                type="text"
                                disabled
                                placeholder="CPF *"
                                {...register("chaveCpf", { required: "Campo obrigatório" })}
                            />
                            {errors.chaveCpf && <p className="text-red-500 text-xs mt-1">{errors.chaveCpf.message}</p>}
                        </div>
                    )}

                    {selectedKey === "Celular" && (
                        <div className="lg:col-span-6 col-span-1 mt-4">
                            <Input
                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                    errors.chaveCel ? "border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50" : ""
                                }`}
                                type="text"
                                placeholder="Celular *"
                                {...registerWithMask("chaveCel", ['99 99999-9999'], { required: "Campo obrigatório" })}
                            />
                            {errors.chaveCel && <p className="text-red-500 text-xs mt-1">{errors.chaveCel.message}</p>}
                        </div>
                    )}

                    {selectedKey === "Email" && (
                        <div className="lg:col-span-6 col-span-1 mt-4">
                            <Input
                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                    errors.chaveEmail ? "border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50" : ""
                                }`}
                                type="text"
                                placeholder="Email *"
                                {...register("chaveEmail", { required: "Campo obrigatório" })}
                            />
                            {errors.chaveEmail && <p className="text-red-500 text-xs mt-1">{errors.chaveEmail.message}</p>}
                        </div>
                    )}
                </div>

                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack nome="Voltar" event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                    </div>

                    <div className="col-span-5">
                        <BtnNext event={handleSubmit(onSubmit)} nome="Avançar" type="submit" />
                    </div>
                </div>
            </motion.div>
        </form>
    );
}
