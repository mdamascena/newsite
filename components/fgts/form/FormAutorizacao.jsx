import { useFormContext, Controller } from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { IoIosArrowBack } from "react-icons/io"
import { ToastContainer } from "react-toastify"
import { toastWarningColored } from "shared/toastUtils/toastValidation"
import { motion } from "framer-motion"
import { container, item } from "shared/motionUtils/motionTransation"
import { BiSolidMessageAltCheck, BiSolidMessageAltX } from "react-icons/bi"
import { OptLabel, OptBnt } from "components/geral/style"
import BtnNext from "../../geral/button/BtnBlueNext"
import BtnBack from "../../geral/button/BtnBlueBack"
import { useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import ModalAutorizacaoFGTS from "components/geral/modal/ModalAutorizacaoFGTS"

export default function FormAutorizacao({ onNext, backStep }) {
    
    const { control, handleSubmit, watch, setValue, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [valueCard, setValueCard] = useState('');

    const adesaoWatch = watch("autorizacao");

    useEffect(() => {
        if (errors.adesao) {toastErrorColored(errors.adesao.message);}
    }, [errors.adesao]);

    useEffect(() => {
        if(valueCard === '0') {
            setValue("autorizacao", "0");
            onOpenChange(false);
            onNext();
        } else if(valueCard === 'fechouModal'){
            setValue("autorizacao", "");
            setValueCard('')
        }
    }, [valueCard, setValue, onOpenChange, onNext, getValues]);

    function onSubmit(data){
        if (!adesaoWatch) {
            toastWarningColored("Selecione uma opção.")
            return;
        } 
        atualizarForm(data);
        onNext();
    }

    return (
        <div className="lg:min-h-[100vh]">

            <ToastContainer />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}>

                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Autorização dos bancos
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Para realizar a simulação, precisamos da sua 
                        autorização para que nossa 
                        financeira consulte seu saldo FGTS.
                    </p>
                </div>

                <div className="container-form-body lg:pt-20">

                    <div className="text-slate-400">
                        <p className="mb-8">Libere no app FGTS as instituições parceiras:</p>
                        <ul className="text-blue-500 mb-8 text-sm grid gap-2">
                            <li>➡️ QI SOCIEDADE DE CREDITO DIRETO S.A.</li>
                            <li>➡️ DELCRED SOCIEDADE DE CREDITO DIRETO S.A.</li>
                            <li>➡️ UP.P SOCIEDADE DE EMPRESTIMO ENTRE PESSOAS S.A.</li>
                        </ul>
                    </div>

                    <Controller
                        name="autorizacao"
                        control={control}
                        defaultValue=""
                        rules={{required: "Informe se autorizou os bancos parceiros"}}
                        render={({ field: { onChange, value } }) => (
                                                
                            <div value={value} onChange={onChange}>                       
                                <div className="grid grid-cols-4 gap-2 items-center">

                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="simAutorizacao" checked={value === "0"} onChange={() => onChange("0")}/>
                                            <OptLabel htmlFor="simAutorizacao">
                                                <div className="col-span-6 flex justify-center mb-2">
                                                    <BiSolidMessageAltCheck className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                                </div>
                                                <div className="col-span-6 text-center">
                                                    <p className="">
                                                        <span className="text-blue-400">Sim</span> autorizei
                                                    </p>
                                                </div>
                                            </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="naoAutorizacao" checked={value === "1"} onChange={() => onChange("1")}/>
                                            <OptLabel htmlFor="naoAutorizacao" onClick={() => { onOpen(); }}>
                                                <div className="col-span-6 flex justify-center mb-2">
                                                    <BiSolidMessageAltX  className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                                </div>
                                                <div className="col-span-6 text-center">
                                                    <p className="">
                                                        <span className="text-blue-400">NÃO</span> sei fazer
                                                    </p>
                                                </div>
                                            </OptLabel>
                                            <ModalAutorizacaoFGTS isOpen={isOpen} onOpenChange={onOpenChange} setValueCard={setValueCard} />
                                    </motion.div>

                                </div>
                            </div>
                        )}
                    />

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
        </div>
    );
}
