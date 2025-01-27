import { useEffect } from "react"
import {useDisclosure} from "@nextui-org/react"
import tw from 'tailwind-styled-components'
import { Input } from "components/ui/input"
import { useHookFormMask } from "use-mask-input"
import { useFormContext, Controller} from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { motion, AnimatePresence } from 'framer-motion'
import BtnNext from '../button/BtnBlueNext'
import BtnBack from '../button/BtnBlueBack'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosFemale } from "react-icons/io"
import { IoIosMale } from "react-icons/io"
import { TbMessage2Question } from "react-icons/tb"
import { toast, ToastContainer } from "react-toastify"
import ModalGenero from '../modal/ModalGenero'


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
export default function FormIdentificacao({onNext, backStep}) {

    const { control, handleSubmit, register, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const registerWithMask = useHookFormMask(register);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const onSubmit = (data) => {
        atualizarForm(data)
        onNext();
    }

    useEffect(() => {
        if(formData.genero){
            setValue('genero', formData.genero);
        }
    }, [formData.genero, setValue])

    useEffect(() => {
        if (errors.genero) {
            toast.error(errors.genero.message, {
                position: "top-right",
                autoClose: 5000,
                type: "error",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme:"colored",
                progress: undefined,
                
            });
        }
    }, [errors.genero]);

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
    }

    const itemClasses = {
        title: "text-blue-500 text-medium",
        indicator: "text-medium text-blue-500"
    }

    return (

        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            
            <ToastContainer/>
            
            <motion.div
                initial={'hidden'} 
                animate={'visible'}
                variants={container} 
                className="grid grid-cols-6 xl:px-7"
                >

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Dados pessoais
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Informe sua identificação conforme registrado no nascimento.
                    </p>
                </div>

                {/*Form do step*/}
                <div className="container-form-body">
                    
                    <div className="lg:col-span-4 col-span-6">
                        <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nome ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder="Seu nome completo? *"
                            pattern="[a-zA-Z\s]*" 
                            {...register('nome')} 
                        />
                        {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
                    </div>
                    
                    <div className="lg:col-span-2 col-span-6">
                        <Input 
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.dataNascimento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder="Nascimento *"
                            {...registerWithMask("dataNascimento", ['99/99/9999'])}
                        />
                        {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message}</p>}
                    </div>

                    <h5 className="col-span-6 lg:mb-2 lg:mt-5 my-2 text-slate-400 font-light lg:text-md text-sm">
                        Selecione seu gênero de nascimento
                    </h5>

                    <Controller
                        name="genero"
                        control={control}
                        defaultValue=""
                        className='col-span-6 grid grid-cols-6 select-none'
                        render={({ field: { onChange, value } }) => (
                                
                            <div value={value} onChange={onChange} className="grid grid-cols-6 col-span-6 gap-3 items-center">
                                    
                                <motion.div className="col-span-3" key="masculino" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="0" id="masculino" checked={value === "0"} onChange={() => onChange("0")} />
                                    <OptLabel htmlFor="masculino">
                                        <div className="col-span-6 flex justify-center mb-2">
                                            <IoIosMale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="">
                                                Masculino
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-3" key="feminino" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="1" id="feminino" checked={value === "1"} onChange={() => onChange("1")} />
                                    <OptLabel htmlFor="feminino">
                                        <div className="col-span-6 flex justify-center mb-2">
                                            <IoIosFemale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="">
                                                Feminino
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-6 lg:mt-5 mt-5 mx-auto" variants={item}>
                                    <div className="flex text-blue-500 cursor-pointer text-center items-center" onClick={(e) => { e.preventDefault(); onOpen(); }}>
                                        <TbMessage2Question className="text-4xl mr-3 p-1 rounded-lg bg-blue-100 text-blue-500"/>
                                        <p>Por que apenas essas opções ?</p>
                                    </div>
                                    <ModalGenero isOpen={isOpen} onOpenChange={onOpenChange}/>
                                </motion.div>
                                
                            </div>
                            
                        )}
                        
                    />
                </div>

                {/*Botão do step*/}
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
