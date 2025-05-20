import { useFormContext, Controller } from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { IoIosArrowBack } from "react-icons/io"
import { ToastContainer } from "react-toastify"
import { motion } from "framer-motion"
import { container, item } from "shared/motionUtils/motionTransation"
import { BiSolidMessageAltCheck, BiSolidMessageAltX } from "react-icons/bi"
import { OptLabel } from "components/geral/style"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import BtnNext from "../../geral/button/BtnBlueNext"
import BtnBack from "../../geral/button/BtnBlueBack"
import ModalAdesaoFGTS from '../../geral/modal/ModalAdesaoFGTS'

export default function FormAdesao({ onNext, backStep }) {
    
    const { control, handleSubmit, watch, setValue, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm } = useFormData();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [valueCard, setValueCard] = useState('');

    useEffect(() => {
        if (errors.adesao) {
            toastErrorColored(errors.adesao.message);
        }
    }, [errors.adesao]);

    useEffect(() => {
        if(valueCard === '0') {
            setValue("adesao", "0");
            onOpenChange(false);
            onNext();
        } else if(valueCard === 'fechouModal'){
            setValue("adesao", "");
            setValueCard('')
        }
    }, [valueCard, setValue, onOpenChange, onNext, getValues]);

    function onSubmit(data){
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
                            Adeção Saque-Aniversário
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Antes de continuar, você deve aderir ao saque-aniversário do FGTS.
                    </p>
                </div>

                <div className="container-form-body lg:pt-20">

                    <Controller
                        name="adesao"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Informe se aderiu ao saque aniversário" }}
                        render={({ field: { onChange, value } }) => (
                                                
                            <div value={value} onChange={onChange}>                       
                                <div className="grid grid-cols-4 gap-2 items-center">

                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="simAdesao" checked={value === "0"} onChange={() => onChange("0")}/>
                                            <OptLabel htmlFor="simAdesao">
                                                <div className="col-span-6 flex justify-center mb-2">
                                                    <BiSolidMessageAltCheck className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                                </div>
                                                <div className="col-span-6 text-center">
                                                    <p className="">
                                                        <span className="text-blue-400">SIM</span> fiz a adesão
                                                    </p>
                                                </div>
                                            </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="naoAdesao" checked={value === "1"} onChange={() => onChange("1")}/>
                                            <OptLabel htmlFor="naoAdesao" onClick={() => { onOpen(); }}>
                                                <div className="col-span-6 flex justify-center mb-2">
                                                    <BiSolidMessageAltX  className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                                </div>
                                                <div className="col-span-6 text-center">
                                                    <p className="">
                                                        <span className="text-blue-400">NÃO</span> sei fazer
                                                    </p>
                                                </div>
                                            </OptLabel>
                                            <ModalAdesaoFGTS isOpen={isOpen} onOpenChange={onOpenChange} setValueCard={setValueCard} />
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
