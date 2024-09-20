import { Controller, useFormContext } from "react-hook-form"
import { useState } from "react"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import { MdOutlineMilitaryTech } from "react-icons/md"
import { FaFemale } from "react-icons/fa"
import { MdOutlineHandyman } from "react-icons/md"
import { FaUserTie } from "react-icons/fa6"
import { BsPersonBadgeFill } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { FaMale } from "react-icons/fa"
import { motion, AnimatePresence } from 'framer-motion'
import tw from 'tailwind-styled-components'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'

const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    lg:h-24 
    h-16
    px-3
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

    const {control, handleSubmit} = useFormContext()
    const {atualizarForm} = useFormDataLuz()
    const [btnAtivo, setBtnAtivo] = useState (true)

    function onSubmit(data){
        atualizarForm(data)
        onNext();
    }

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>

            <motion.div 
                initial={'hidden'} 
                animate={'visible'}
                variants={container}
                className='grid grid-cols-6 select-none xl:px-5'
                >
                
                {/*Titulo do step*/}
                <div className="col-span-6 lg:min-h-[20vh] min-h-[10vh] lg:content-end content-center">

                    <div className="flex items-end mb-2 relative">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50 ">
                            Qual é a sua ocupação?
                        </h1>
                    </div>
                    
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Selecione a opção que melhor corresponde à sua ocupação atual.
                    </p>
                </div>

                {/*Opções do step*/}   
                <div className="col-span-6 content-center lg:min-h-[60vh] min-h-[55vh]">
                        
                    <Controller
                        name="tipoOcupacao"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                                
                            <div value={value} onChange={onChange}>
                                    
                                <div className="grid grid-cols-4 gap-3 items-center">

                                    {/*opção assalariado*/}        
                                    <motion.div className="lg:col-span-2 col-span-4" key="assalariado" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="assalariado" />
                                        <OptLabel htmlFor="assalariado" onClick={() => onChange("1")}>
                                            <div className="col-span-2">
                                                <BsPersonBadgeFill className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>

                                            <div className="col-span-4">
                                                <p className="font-semibold">
                                                    Assalariado
                                                </p>
                                                <span className="text-xs font-light">
                                                    Vínculo CLT
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção servidor*/}
                                    <motion.div className="lg:col-span-2 col-span-4" key="servidor" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="2" id="servidor" />
                                        <OptLabel className="justify-items-stretch" htmlFor="servidor" onClick={() => onChange("2")}>
                                            <div className="col-span-2">
                                                <FaUserTie className="text-5xl p-3 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="font-semibold">
                                                    Servidor Público
                                                </p>
                                                <span className="text-xs font-light">
                                                    Ativo ou inativo
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção aposentado*/}
                                    <motion.div className="lg:col-span-2 col-span-4" key="aposentado" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="3" id="aposentado" />
                                        <OptLabel className="justify-items-stretch" htmlFor="aposentado" onClick={() => onChange("3")}> 
                                            <div className="col-span-2">
                                                <FaMale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="font-semibold">
                                                    Aposentado
                                                </p>
                                                <span className="text-xs font-light">
                                                    Benefício INSS / LOAS
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção pensionista*/}
                                    <motion.div className="lg:col-span-2 col-span-4" key="pensionista" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="4" id="pensionista" />
                                        <OptLabel className="justify-items-stretch" htmlFor="pensionista" onClick={() => onChange("4")}>
                                            <div className="col-span-2">
                                                <FaFemale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="font-semibold">
                                                    Pensionista
                                                </p>
                                                <span className="text-xs font-light">
                                                    Pensão / Pensão INSS
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção autônomo*/}
                                    <motion.div className="lg:col-span-2 col-span-4" key="autonomo" variants={item} exit={{opacity:0}}>
                                        <input type="radio" className="hidden peer" name='status' value="5" id="autonomo" />
                                        <OptLabel className="justify-items-stretch" htmlFor="autonomo" onClick={() => onChange("5")}>
                                            <div className="col-span-2">
                                                <MdOutlineHandyman className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="font-semibold">
                                                    Autônomo
                                                </p>
                                                <span className="text-xs font-light">
                                                    Prof. liberal / Empresário
                                                </span>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    {/*opção militar*/}
                                    <motion.div className="lg:col-span-2 col-span-4" key="militar" variants={item} exit={{opacity:0}}>
                                        <input type="radio" className="hidden peer" name='status' value="6" id="militar" />
                                        <OptLabel className="justify-items-stretch" htmlFor="militar" onClick={() => onChange("6")}>
                                            <div className="col-span-2">
                                                <MdOutlineMilitaryTech className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-4">
                                                <p className="font-semibold">
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
                <div className="grid grid-cols-7 col-span-6 lg:min-h-[20vh] min-h-[10vh] content-center gap-2">

                    <div className="col-span-2">
                        <BtnBack nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/> 
                    </div>

                    <div className="col-span-5">
                        <BtnNext nome={'Avançar'} type="submit"/>
                    </div>
      
                </div>

            </motion.div>

        </form>
    );
}
