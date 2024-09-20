import { Controller, useFormContext } from "react-hook-form"
import { useState, useEffect } from "react"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import {Accordion, AccordionItem} from "@nextui-org/react"
import { motion, AnimatePresence } from 'framer-motion'
import tw from 'tailwind-styled-components'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'
import { IoIosFemale } from "react-icons/io"
import { IoIosMale } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"
import { TbMessage2Question } from "react-icons/tb"

const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    p-4
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

export default function FormGenero({ onNext, backStep }) {

    const { control, handleSubmit } = useFormContext();
    const { atualizarForm } = useFormDataLuz();

    function onSubmit(data){
        atualizarForm(data);
        onNext();
    }

    const textoGenero = 'Sabemos que existem mais identidades de gênero além de masculino e feminino. No entanto, para fins de preenchimento da proposta, utilizamos o gênero de nascimento. Isso nos ajuda a seguir a forma atual utilizado no processo de análise.' 

    const itemClasses = {
        title: "text-blue-500 text-medium",
        indicator: "text-medium text-blue-500"
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
                <div className="col-span-6 lg:min-h-[20vh] min-h-[10vh] content-end">

                    <div className="flex items-end mb-2 relative">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50">
                            Gênero do seu nascimento!
                        </h1>
                    </div>
        
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Informe seu gênero conforme registrado no nascimento.
                    </p>

                </div>

                {/*Opções*/}
                <div className="col-span-6 content-start lg:content-center pt-10 lg:pt-0 lg:min-h-[60vh] min-h-[55vh]">

                    <Controller
                        name="genero"
                        control={control}
                        defaultValue=""
                        className='grid grid-cols-6 select-none'
                        render={({ field: { onChange, value } }) => (
                            
                            <div value={value} onValueChange={onChange}>

                                <div className="grid grid-cols-4 gap-3 items-center">

                                    <motion.div className="col-span-2" key="masculino" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="0" id="masculino" />
                                        <OptLabel htmlFor="masculino" onClick={() => onChange("0")}>
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <IoIosMale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="font-semibold">
                                                    Masculino
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-2" key="feminino" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="feminino" />
                                        <OptLabel htmlFor="feminino" onClick={() => onChange("1")}>
                                            <div className="col-span-6 flex justify-center mb-2">
                                                <IoIosFemale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                            </div>
                                            <div className="col-span-6 text-center">
                                                <p className="font-semibold">
                                                    Feminino
                                                </p>
                                            </div>
                                        </OptLabel>
                                    </motion.div>

                                    <motion.div className="col-span-4 mt-5" variants={item}>
                                        
                                        <Accordion isCompact itemClasses={itemClasses}>
                                            <AccordionItem 
                                                className="text-slate-400 text-sm" 
                                                key="1" 
                                                aria-label="" 
                                                title="Por que apenas essas opções ?"
                                                startContent={<TbMessage2Question className="text-blue-500 text-2xl" />}
                                                >
                                                <div className="bg-white p-5 rounded-md border-l-4 border-blue-500">
                                                    {textoGenero}
                                                </div>
                                            </AccordionItem>
                                        </Accordion>

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
    )
}