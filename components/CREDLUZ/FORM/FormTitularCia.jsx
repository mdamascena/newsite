import { Controller, useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import { motion, AnimatePresence } from 'framer-motion'
import { RiUserFollowLine } from "react-icons/ri"
import { RiUserForbidLine } from "react-icons/ri"
import { IoIosArrowBack } from "react-icons/io"
import tw from 'tailwind-styled-components'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'
import { Alert, AlertTitle, AlertDescription } from '../../../components/ui/alert';

const OptLabel = tw(motion.label)`
    bg-white
    grid
    grid-cols-6
    px-2
    py-4
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

    //Titulos que devem ser redenrizados no form Base
    // useEffect(() => {
    //     setTitulo("Quem paga a luz?");    
    //     setDescricao("É você que manda apagar a luz para não vir caro? Conta pra gente!");
    // }, [setTitulo, setDescricao]);

    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormDataLuz();
    const [showAlert, setShowAlert] = useState(false);

    function onSubmit(data){
        atualizarForm(data);
        onNext();
    }

    useEffect(() => {
        if(formData.titularCia){
            setValue("tipoCia", formData.titularCia)
        }
    }, [formData.titularCia, setValue])

     
    useEffect(() => {
        if (errors.titularCia) {
        setShowAlert(true);
        const timeoutId = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
        }
    }, [errors.titularCia]);

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
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50 ">
                            Titularidade conta de luz
                        </h1>
                    </div>
        
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        A conta de energia da sua residência está registrada no seu nome?
                    </p>
                </div>

                {/*Opções*/}
                <div className="col-span-6 content-start lg:content-center pt-10 lg:pt-0 lg:min-h-[60vh] min-h-[55vh]">
                    {showAlert && errors.titularCia && (
                        <Alert className="mb-5 bg-red-100" onClose={() => setShowAlert(false)}>
                            <AlertTitle>Erro</AlertTitle>
                            <AlertDescription>{errors.titularCia.message}</AlertDescription>
                        </Alert>
                    )}
                    
                    <Controller
                        name="titularCia"
                        control={control}
                        defaultValue=""
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
                                                    <span className="text-blue-400 font-semibold">SIM</span> sou o titular
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
                                                    <span className="text-blue-400 font-semibold">NÃO</span> sou o titular
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
                <div className="grid grid-cols-7 col-span-6 lg:min-h-[20vh] min-h-[10vh] content-center gap-2">
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