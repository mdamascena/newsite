import { useEffect } from "react"
import { useFormData } from "../../../context/FormContext"
import { Controller, useFormContext } from "react-hook-form"
import { FaFemale } from "react-icons/fa"
import { MdOutlineHandyman, MdOutlineMilitaryTech } from "react-icons/md"
import { FaUserTie } from "react-icons/fa6"
import { BsPersonBadgeFill } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { FaMale } from "react-icons/fa"
import { ToastContainer } from "react-toastify"
import { toastErrorColored } from "shared/toastUtils/toastValidation"
import { motion } from 'framer-motion'
import { container, item } from "shared/motionUtils/motionTransation"
import { OptLabel } from "../styles"
import BtnNext from '../../geral/button/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'



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
            toastErrorColored(errors.tipoOcupacao.message)
        }
    }, [errors.tipoOcupacao]);

    return (
        <form className="lg:min-h-[100vh]" onSubmit={handleSubmit(onSubmit)}>
            
            <ToastContainer />
            
            <motion.div 
                initial={'hidden'} 
                animate={'visible'}
                variants={container}
                className='grid grid-cols-6 select-none xl:px-7'
                >
      
                {/*Titulo do step*/}
                <div className="container-form-head">

                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Qual é a sua ocupação?
                        </h1>
                    </div>
                    
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                    Em qual dessas situações você se encaixa atualmente?
                    </p>
                </div>

                {/*Opções do step*/}   
                <div className="container-form-body lg:pt-20">
               
                    <Controller
                        name="tipoOcupacao"
                        
                        control={control}
                        defaultValue=""
                        rules={{ required: "Selecione uma ocupação." }}
                        render={({ field: { onChange, value } }) => (
                                
                            <div value={value} onChange={onChange}>
                                    
                                <div className="grid grid-cols-6 gap-2 items-center">

                                    {/*opção assalariado*/}        
                                    <motion.div className="col-span-3" key="assalariado" variants={item}>
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
                                    <motion.div className="col-span-3" key="servidor" variants={item}>
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
                                    <motion.div className="col-span-3" key="aposentado" variants={item}>
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
                                    <motion.div className="col-span-3" key="pensionista" variants={item}>
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
                                    <motion.div className="col-span-3" key="autonomo" variants={item}>
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
                                    <motion.div className="col-span-3" key="militar" variants={item}>
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
