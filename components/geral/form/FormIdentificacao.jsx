import { useEffect } from "react"
import { useDisclosure } from "@nextui-org/react"
import { Input } from "components/ui/input"
import { useHookFormMask } from "use-mask-input"
import { useFormContext, Controller} from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { motion } from 'framer-motion'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosFemale } from "react-icons/io"
import { IoIosMale } from "react-icons/io"
import { TbMessage2Question } from "react-icons/tb"
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { container, item } from "shared/motionUtils/motionTransation"
import { OptLabel } from "../style"
import ModalGenero from '../modal/ModalGenero'
import BtnBack from '../button/BtnBlueBack'
import BtnNext from '../button/BtnBlueNext' 

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
            toastErrorColored(errors.genero.message)
        }
    }, [errors.genero]);

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

                                <motion.div className="col-span-3" key="outros" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="2" id="outros" checked={value === "2"} onChange={() => onChange("2")} />
                                    <OptLabel htmlFor="outros">
                                        <div className="col-span-6 flex justify-center mb-2">
                                            <IoIosFemale className="text-5xl p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="">
                                                Outros
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
