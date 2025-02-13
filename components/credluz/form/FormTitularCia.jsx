import { Controller, useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"
import { useFormData } from "../../../context/FormContext"
import { motion, AnimatePresence } from 'framer-motion'
import { RiUserFollowLine, RiUserForbidLine } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import tw from 'tailwind-styled-components'
import BtnNext from '../../geral/button/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'
import { toast, ToastContainer } from "react-toastify"

const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    p-3
    lg:py-4
    items-center 
    justify-center 
    text-slate-400 
    shadow-md
    rounded-md
    cursor-pointer
    duration-100
    hover:ring-2
    hover:ring-blue-500
    hover:bg-blue-100
    hover:text-blue-500
    peer-checked:bg-blue-600 
    peer-checked:text-white
    peer-checked:shadow-nome
    
`  
const container = {
    hidden: {y: 50, opacity: 0 },
    visible: {y: 0, opacity: 1, 
        transition: {delayChildren: 0.3, staggerChildren: 0.2,},
    },
}
  
const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {y: 0, opacity: 1,
        transition: {duration: 0.5, ease:"easeOut"},
    },
}

export default function FormTitularCia({ onNext, backStep }) {

    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();

    function onSubmit(data){
        atualizarForm(data);
        onNext();
    }

    useEffect(() => {
        if(formData.titularCia){
            setValue("titularCia", formData.titularCia)
        }
    }, [formData.titularCia, setValue])

    useEffect(() => {
        if (errors.titularCia) {
            toast.error(errors.titularCia.message, {
                position: "top-right", // Posição do toast
                autoClose: 5000, // Fechar automaticamente em 5 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored",
            });
        }
    }, [errors.titularCia]);
    
    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            
            <ToastContainer />

            <motion.div 
                initial={'hidden'} 
                animate={'visible'} 
                variants={container} 
                className='grid grid-cols-6 select-none xl:px-5'
                >

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="flex items-end relative">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50 ">
                            Titularidade conta de luz
                        </h1>
                    </div>
        
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        A conta de energia da sua residência está registrada no seu nome?
                    </p>
                </div>

                {/*Opções*/}
                <div className="container-form-body">
                    
                    <Controller
                        name="titularCia"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Selecione sua titularidade." }}
                        render={({ field: { onChange, value } }) => (
                            
                            <div value={value} onChange={onChange}>
                                
                                <div className="grid grid-cols-4 gap-3 items-center">
                                    <motion.div className="col-span-2" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="titularCia" checked={value === "0"} onChange={() => onChange("0")}/>
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
                                        <input type="radio" className="hidden peer" name='status' value="1" id="naoTitularCia" checked={value === "1"} onChange={() => onChange("1")}/>
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
                        <BtnBack nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/>  
                    </div>

                    <div className="col-span-5">
                        <BtnNext event={handleSubmit(onSubmit)} nome={'Avançar'} type="submit"/>
                    </div>
                </div>

            </motion.div>

        </form>
    )
}