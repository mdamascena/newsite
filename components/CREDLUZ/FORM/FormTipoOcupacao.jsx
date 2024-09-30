import { Controller, useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import { MdOutlineMilitaryTech } from "react-icons/md"
import { FaFemale } from "react-icons/fa"
import { MdOutlineHandyman } from "react-icons/md"
import { FaUserTie } from "react-icons/fa6"
import { BsPersonBadgeFill } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { FaMale } from "react-icons/fa"
import { motion } from 'framer-motion'
import tw from 'tailwind-styled-components'
import BtnNext from '../../GERAL/BUTTON/BtnBlue'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'
import { Alert, AlertTitle, AlertDescription } from '../../../components/ui/alert';

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

    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext();
    const {atualizarForm, formData} = useFormDataLuz()
    const [showAlert, setShowAlert] = useState(false);


    function onSubmit(data){
        atualizarForm(data)
        console.log(data)
        onNext();
    }

    useEffect(() => {
        if(formData.tipoOcupacao){
            setValue('tipoOcupacao', formData.tipoOcupacao);
        }
    }, [formData.tipoOcupacao, setValue])

    //Alerta de erro de validação
    useEffect(() => {
        if (errors.tipoOcupacao) {
        setShowAlert(true);
        const timeoutId = setTimeout(() => {
            setShowAlert(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
        }
    }, [errors.tipoOcupacao]);

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
                <div className="col-span-6 content-center lg:min-h-[60vh] min-h-[55vh] ">
                    {showAlert && errors.tipoOcupacao && (
                    <Alert className="mb-5 bg-red-100" onClose={() => setShowAlert(false)}>
                        <AlertTitle>Erro</AlertTitle>
                        <AlertDescription>{errors.tipoOcupacao.message}</AlertDescription>
                    </Alert>
                    )}
                        
                    <Controller
                        name="tipoOcupacao"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Selecione uma ocupação." }}
                        render={({ field: { onChange, value } }) => (
                                
                            <div value={value} onValueChange={onChange}>
                                    
                                <div className="grid grid-cols-4 gap-3 items-center">

                                    {/*opção assalariado*/}        
                                    <motion.div className="lg:col-span-2 col-span-4" key="assalariado" variants={item}>
                                        <input type="radio" className="hidden peer" name='status' value="1" id="assalariado" checked={value === "1"} onChange={() => onChange("1")} />
                                        <OptLabel htmlFor="assalariado">
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
                                        <input type="radio" className="hidden peer" name='status' value="2" id="servidor" checked={value === "2"} onChange={() => onChange("2")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="servidor">
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
                                        <input type="radio" className="hidden peer" name='status' value="3" id="aposentado" checked={value === "3"} onChange={() => onChange("3")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="aposentado"> 
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
                                        <input type="radio" className="hidden peer" name='status' value="4" id="pensionista" checked={value === "4"} onChange={() => onChange("4")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="pensionista" >
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
                                        <input type="radio" className="hidden peer" name='status' value="5" id="autonomo" checked={value === "5"} onChange={() => onChange("5")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="autonomo">
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
                                        <input type="radio" className="hidden peer" name='status' value="6" id="militar" checked={value === "6"} onChange={() => onChange("6")} />
                                        <OptLabel className="justify-items-stretch" htmlFor="militar">
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
                        <BtnBack type="button" nome={'Voltar'} event={backStep} icon={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/> 
                    </div>

                    <div className="col-span-5">
                        <BtnNext type="submit" event={handleSubmit(onSubmit)} nome={'Avançar'} />
                    </div>
      
                </div>

            </motion.div>

        </form>
    );
}
