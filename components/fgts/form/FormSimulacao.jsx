import { useFormContext, Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { useHookFormMask } from "use-mask-input"
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation";
import { motion } from "framer-motion";
import { container, item } from "shared/motionUtils/motionTransation";
import { OptLabel } from "components/geral/style";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { useEffect } from "react";

export default function FormSimulacao({ onNext, backStep }) {
    const { register, control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    
    return (
        <div className="lg:min-h-[100vh]">

            <ToastContainer />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                >

                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Dados para o envio do crédito
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Agora só precisamos da sua chave Pix para prosseguir
                    </p>
                </div>

                <form className="container-form-body lg:pt-20" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        

                        
                    </div>
                </form>

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
