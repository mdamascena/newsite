import { useEffect } from "react"
import { useFormData } from "../../../context/FormContext"
import { useFormContext, Controller} from "react-hook-form"
import { useDisclosure } from "@nextui-org/react"
import { Input } from "components/ui/input"
import { IoIosFemale, IoIosMale, IoIosArrowBack,IoIosCloseCircleOutline } from "react-icons/io"
import { IoMaleFemaleOutline } from "react-icons/io5"
import { TbMessage2Question } from "react-icons/tb"
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { motion } from 'framer-motion'
import { container, item } from "shared/motionUtils/motionTransation"
import { OptLabel } from "components/geral/style"
import BtnNext from '../../geral/button/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'
import ModalGenero from '../../geral/modal/ModalGenero'

export default function FormIdentificacao({onNext, backStep}) {

    const { control, handleSubmit, register, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
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
            toastErrorColored(errors.genero.message);
        }
    }, [errors.genero]);

    return (

        <form className="lg:min-h-[100vh]" onSubmit={handleSubmit(onSubmit)}>
            
            <ToastContainer/>
            
            <motion.div
                initial={'hidden'} 
                animate={'visible'}
                variants={container} 
                className="grid grid-cols-6 xl:px-7"
                >

                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Identificação
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Informe os dados de idendificação solicitados abaixo:
                    </p>
                </div>

                <div className="container-form-body">

                    <div className="lg:col-span-1 col-span-6">
                        <Input 
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.registroGeral ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder="Número do RG *"
                            {...register('registroGeral')} 
                            />
                        {errors.registroGeral && <p className="text-red-500 text-xs mt-1">{errors.registroGeral.message}</p>}
                    </div>

                    <div className="lg:col-span-5 col-span-6">
                        <Input 
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nomeMae ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder="Nome da mãe *"
                            {...register("nomeMae")}    
                            />
                        {errors.nomeMae && <p className="text-red-500 text-xs mt-1">{errors.nomeMae.message}</p>}
                    </div>


                    <h5 className="col-span-6 lg:mb-2 lg:mt-5 my-2 text-slate-400 font-light lg:text-base text-sm">
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
                                        <div className="col-span-6 flex justify-center">
                                            <IoIosMale className="text-3xl p-1 lg:text-5xl lg:p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="text-sm lg:text-base">
                                                Masculino
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-3" key="feminino" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="1" id="feminino" checked={value === "1"} onChange={() => onChange("1")} />
                                    <OptLabel htmlFor="feminino">
                                        <div className="col-span-6 flex justify-center">
                                            <IoIosFemale className="text-3xl p-1 lg:text-5xl lg:p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="text-sm lg:text-base">
                                                Feminino
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-3" key="outros" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="2" id="outros" checked={value === "2"} onChange={() => onChange("2")} />
                                    <OptLabel htmlFor="outros">
                                        <div className="col-span-6 flex justify-center">
                                            <IoMaleFemaleOutline className="text-3xl p-1 lg:text-5xl lg:p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="text-sm lg:text-base">
                                                Outros
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-3" key="seminformacao" variants={item}>
                                    <input type="radio" className="hidden peer" name='status' value="3" id="seminformacao" checked={value === "3"} onChange={() => onChange("3")} />
                                    <OptLabel htmlFor="seminformacao">
                                        <div className="col-span-6 flex justify-center">
                                            <IoIosCloseCircleOutline className="text-3xl p-1 lg:text-5xl lg:p-2 bg-blue-500 rounded-md text-white"/>
                                        </div>
                                        <div className="col-span-6 text-center">
                                            <p className="text-sm lg:text-base">
                                                Não informar
                                            </p>
                                        </div>
                                    </OptLabel>
                                </motion.div>

                                <motion.div className="col-span-6 mt-2 mx-auto" variants={item}>
                                    <div className="flex text-blue-500 cursor-pointer text-center items-center" onClick={(e) => { e.preventDefault(); onOpen(); }}>
                                        <TbMessage2Question className="text-2xl lg:text-4xl mr-3 p-1 rounded-lg bg-blue-100 text-blue-500"/>
                                        <p className="lg:text-base text-sm">Por que apenas essas opções ?</p>
                                    </div>
                                    <ModalGenero isOpen={isOpen} onOpenChange={onOpenChange}/>
                                </motion.div>
                                
                            </div>
                            
                        )}
                        
                    />
                </div>

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
