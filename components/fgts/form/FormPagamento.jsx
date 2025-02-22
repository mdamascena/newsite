import { useFormContext, Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { useHookFormMask } from "use-mask-input"
import { IoIosArrowBack } from "react-icons/io";
import { Input } from "components/ui/input";
import { FaIdCard } from "react-icons/fa";
import { IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import { useEffect } from "react";
import { ToastContainer } from "react-toastify"
import { toastWarningColored } from "shared/toastUtils/toastValidation";
import { motion } from "framer-motion";
import { container, item } from "shared/motionUtils/motionTransation";
import { OptLabel } from "components/geral/style";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";

export default function FormPagamento({ onNext, backStep }) {
    const { register, control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm } = useFormData();
    const registerWithMask = useHookFormMask(register)

    const selectedKey = watch("tipoDeChave");
    const bancoWatch = watch("banco");

    const onSubmit = (data) => {
        console.log(bancoWatch)
        if(!bancoWatch){
            toastWarningColored("Selecione um banco para continuar.")
            return;
        } else {
            atualizarForm(data);
            onNext();
        }
    };

    const pixSelecionado = (keyType) => {
        setValue("tipoDeChave", keyType);

        const data = getValues();

        if(keyType === "CPF"){
            setValue("chaveCpf", data.cpf)
        } else if(keyType === "Celular"){
            setValue("chaveCel", data.celular)
        } else if(keyType === "Email"){
            setValue("chaveEmail", data.email)
        }
    };

    useEffect(() => {
        setValue('banco', '');
    }, []);

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
            
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

                <div  className="container-form-body">
                    <div className="col-span-6 mt-5">
                        <Select className='placeholder:text-slate-400'  {...register('banco')} onValueChange={(value) => setValue('banco', value)} >
                            <SelectTrigger className="bg-slate-200 text-slate-500 focus:ring-1 focus:ring-blue-500">
                                <SelectValue placeholder="Informe seu Banco" />
                            </SelectTrigger>
                                            
                            <SelectContent >
                                <SelectGroup className="text-slate-400">
                                    <SelectLabel>Selecione o Banco</SelectLabel>
                                    <SelectItem value="0">237 - Banco Bradesco</SelectItem>
                                    <SelectItem value="1">341 - Banco Itaú</SelectItem>
                                    <SelectItem value="2">033 - Banco Santander</SelectItem>
                                    <SelectItem value="3">001 - Banco do Brasil</SelectItem>
                                    <SelectItem value="4">104 - Caixa Econômica Federal</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="col-span-6 p-6 border-1 border-slate-300 rounded-xl relative mt-5">

                        <span className="bg-slate-100 text-slate-400 absolute -top-3 px-2 text-sm">
                            Escolha sua chave pix 
                        </span>

                        <Controller
                            name="pix"
                            control={control}
                            defaultValue=""
                            className='col-span-6 grid grid-cols-6 select-none'
                            render={({ field: { onChange, value } }) => (

                                <div value={value} onChange={onChange} className="grid grid-cols-6 col-span-6 gap-3 items-center">

                                    <motion.div className="col-span-2" key="chaveCpf" variants={item} onClick={() => pixSelecionado("CPF")}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="chaveCpf" checked={value === "0"} onChange={() => onChange("0")} />
                                        <OptLabel htmlFor="chaveCpf">
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <FaIdCard className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="">
                                                    CPF
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" key="chaveCel" variants={item} onClick={() => pixSelecionado("Celular")}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="chaveCel" checked={value === "1"} onChange={() => onChange("1")} />
                                        <OptLabel htmlFor="chaveCel">
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <IoPhonePortraitOutline className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="">
                                                    Celular
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" key="chaveEmail" variants={item} onClick={() => pixSelecionado("Email")}>
                                        <input type="radio" className="hidden peer" name='status' value="2" id="chaveEmail" checked={value === "2"} onChange={() => onChange("2")} />
                                        <OptLabel htmlFor="chaveEmail">
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <IoMailOutline className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="">
                                                    Email
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                </div>
                            )}
                        />
                        <>
                            <div className="col-span-6 mt-5">

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
                        </>
                    </div>

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
