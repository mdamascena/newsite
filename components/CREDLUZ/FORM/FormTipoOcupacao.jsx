import { Controller, useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"
import { useFormData } from "../../../context/FormContext"
import { FaFemale } from "react-icons/fa"
import { MdOutlineHandyman, MdOutlineMilitaryTech } from "react-icons/md"
import { FaUserTie } from "react-icons/fa6"
import { BsPersonBadgeFill } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { FaMale } from "react-icons/fa"
import { motion } from 'framer-motion'
import tw from 'tailwind-styled-components'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'
import { toast, ToastContainer } from "react-toastify"

const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    p-3
    lg:py-6
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
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {y: 0, opacity: 1,
        transition: {duration: 0.5, ease:"easeOut"},
    },
};

export default function FormTipoOcupacao({onNext, backStep}) {

    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext();
    const {atualizarForm, formData} = useFormData()

    function onSubmit(data){
        atualizarForm(data)
        onNext();
    }

    useEffect(() => {
        if(formData.tipoOcupacao){
            setValue('tipoOcupacao', formData.tipoOcupacao);
        }
    }, [formData.tipoOcupacao, setValue])

    useEffect(() => {
        if (errors.tipoOcupacao) {
            toast.error(errors.tipoOcupacao.message, {
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
    }, [errors.tipoOcupacao]);

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

                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Qual é a sua ocupação?
                        </h1>
                    </div>
                    
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Selecione a opção que melhor corresponde à sua ocupação atual.
                    </p>
                </div>

                {/*Opções do step*/}   
                <div className="container-form-body">
               
                    <Controller
                        name="tipoOcupacao"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Selecione uma ocupação." }}
                        render={({ field: { onChange, value } }) => (
                                
                            <div value={value} onChange={onChange}>
                                    
                                <div className="grid grid-cols-4 gap-3 items-center">

                                    {/*opção assalariado*/}        
                                    <motion.div className="col-span-2" key="assalariado" variants={item}>
                                        <input type="radio" className="hidden peer col-span-2" name='status' value="1" id="assalariado" checked={value === "1"} onChange={() => onChange("1")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="assalariado">
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <BsPersonBadgeFill className="lg:text-5xl text-4xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>

                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Assalariado
                                                </p>
                                                <span className="text-xs font-light ">
                                                    Vínculo CLT
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção servidor*/}
                                    <motion.div className="col-span-2" key="servidor" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="2" id="servidor" checked={value === "2"} onChange={() => onChange("2")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="servidor">
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <FaUserTie className="lg:text-5xl text-4xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Servidor Público
                                                </p>
                                                <span className="text-xs font-light">
                                                    Ativo / inativo
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção aposentado*/}
                                    <motion.div className="col-span-2" key="aposentado" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="3" id="aposentado" checked={value === "3"} onChange={() => onChange("3")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="aposentado"> 
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <FaMale className="lg:text-5xl text-4xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Aposentado
                                                </p>
                                                <span className="text-xs font-light">
                                                    Benefic. INSS / LOAS
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção pensionista*/}
                                    <motion.div className="col-span-2" key="pensionista" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="4" id="pensionista" checked={value === "4"} onChange={() => onChange("4")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="pensionista" >
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <FaFemale className="lg:text-5xl text-4xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Pensionista
                                                </p>
                                                <span className="text-xs font-light">
                                                    Pensão / Pensão INSS
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção autônomo*/}
                                    <motion.div className="col-span-2" key="autonomo" variants={item} exit={{opacity:0}}>
                                        <input type="radio" className="hidden peer" name='status' value="5" id="autonomo" checked={value === "5"} onChange={() => onChange("5")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="autonomo">
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <MdOutlineHandyman className="lg:text-5xl text-4xl p-1 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Autônomo
                                                </p>
                                                <span className="text-xs font-light">
                                                    P. Liberal / Empresário
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção militar*/}
                                    <motion.div className="col-span-2" key="militar" variants={item} exit={{opacity:0}}>
                                        <input type="radio" className="hidden peer" name='status' value="6" id="militar" checked={value === "6"} onChange={() => onChange("6")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="militar">
                                            <div className="col-span-6 lg:col-span-2 mb-1 justify-center lg:justify-start grid">
                                                <MdOutlineMilitaryTech className="lg:text-5xl text-4xl p-1 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 lg:col-span-4 text-center lg:text-start">
                                                <p className="font-semibold text-sm lg:text-medium">
                                                    Militar
                                                </p>
                                                <span className="text-xs font-light">
                                                    Forças Armadas
                                                </span>
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
                        <BtnBack type="button" nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/> 
                    </div>

                    <div className="col-span-5">
                        <BtnNext type="submit" event={handleSubmit(onSubmit)} nome={'Avançar'} />
                    </div>
      
                </div>

            </motion.div>

        </form>
    );
}
