import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useFormData } from "../../../context/FormContext"
import { Controller, useFormContext } from "react-hook-form"
import { RiUserFollowLine, RiUserForbidLine } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { motion } from 'framer-motion'
import { container, item } from "shared/motionUtils/motionTransation"
import { OptLabel } from "components/geral/style"
import BtnNext from '../../geral/button/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'
import ModalTitularNao from "components/geral/modal/ModalTitularNao"


export default function FormTitularCia({ onNext, backStep }) {

    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const router = useRouter();
    const [showNaoTitularModal, setShowNaoTitularModal] = useState(false);

    function onSubmit(data){
        if(data.titularCia === "1"){
            atualizarForm(data);
            setShowNaoTitularModal(true);
            return;
        }

        atualizarForm(data);
        onNext();
    }

    const handleTitularChange = (value, onChange) => {
        onChange(value);
    }

    const handleCloseNaoTitularModal = () => {
        setShowNaoTitularModal(false);
        router.push("/");
    }

    const handleSimularOutraModalidade = () => {
        setShowNaoTitularModal(false);
        router.push("/cadastro");
    }

    useEffect(() => {
        if(formData.titularCia){
            setValue("titularCia", formData.titularCia)
        }
    }, [formData.titularCia, setValue])

    useEffect(() => {
        if (errors.titularCia) {
            toastErrorColored(errors.titularCia.message);
        }
    }, [errors.titularCia]);
    
    return (
        <form className="lg:min-h-screen" onSubmit={handleSubmit(onSubmit)}>
            
            <ToastContainer />

            <ModalTitularNao
                isOpen={showNaoTitularModal}
                
                onOpenChange={(open) => {
                    if(!open){
                        handleCloseNaoTitularModal();
                        return;
                    }
                    setShowNaoTitularModal(open);
                }}
                
                onClose={handleCloseNaoTitularModal}
                onSimularOutraModalidade={handleSimularOutraModalidade}
            />

            <motion.div 
                initial={'hidden'} 
                animate={'visible'} 
                variants={container} 
                className='grid grid-cols-6 select-none xl:px-5'
                >

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50 ">
                            Titularidade conta de luz
                        </h1>
                    </div>
        
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        A conta de luz da sua casa está registrada no seu nome?
                    </p>
                </div>

                {/*Opções*/}
                <div className="container-form-body lg:pt-20">
                    
                    <Controller
                        name="titularCia"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Selecione sua titularidade." }}
                        render={({ field: { onChange, value } }) => (
                            
                            <div value={value} onChange={onChange}>
                                
                                <div className="grid grid-cols-4 gap-2 items-center">
                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="titularCia" checked={value === "0"} onChange={() => handleTitularChange("0", onChange)}/>
                                        <OptLabel htmlFor="titularCia">
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <RiUserFollowLine className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="">
                                                    <span className="text-blue-400">SIM</span> sou o titular
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="naoTitularCia" checked={value === "1"} onChange={() => handleTitularChange("1", onChange)}/>
                                        <OptLabel htmlFor="naoTitularCia">
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <RiUserForbidLine  className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="">
                                                    <span className="text-blue-400">NÃO</span> sou o titular
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>
                                </div>

                            </div>
                        )}
                    />

                </div>

                {/*Botões*/}
                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack tipo="button" nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/>
                    </div>

                    <div className="col-span-5">
                        <BtnNext nome={'Avançar'} tipo="submit"/>
                    </div>
                </div>

            </motion.div>

        </form>
    )
}
