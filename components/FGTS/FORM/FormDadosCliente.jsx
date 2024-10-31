import { useState } from "react";
import { useHookFormMask } from "use-mask-input"
import { useFormContext } from "react-hook-form"
import { Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "components/ui/select"
import { Input } from "components/ui/input"
import { motion } from 'framer-motion'
import BtnNext from '../../GERAL/BUTTON/BtnBlueNext'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'
import { IoIosArrowBack } from "react-icons/io"

export default function FormDadosCliente({onNext, backStep}) {

    const { register, control, watch, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const registerWithMask = useHookFormMask(register);
    
    const container = {
        hidden: {y: 50, opacity: 0 },
        visible: {y: 0, opacity: 1, 
            transition: {delayChildren: 0.3, staggerChildren: 0.2,},
        },
    };

    const onSubmit = (data) => {
        atualizarForm(data)
        onNext();
    }

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>
            <motion.div
                initial={'hidden'} 
                animate={'visible'}
                variants={container} 
                className="grid grid-cols-6 xl:px-7"
                >
            
            <div className="container-form-head">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Seus dados
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Envie seus dados !
                    </p>
            </div>

            <div className="grid-cols-6 container-form-body">
                <div className="col-span-6">
                    <Controller
                        name="estadoCivil"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Estado Civil" />
                            </SelectTrigger>
                            
                            <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Selecione...</SelectLabel>
                                <SelectItem value="1">Solteiro(a)</SelectItem>
                                <SelectItem value="2">Casado(a)</SelectItem>
                                <SelectItem value="3">Divorciado(a)</SelectItem>
                                <SelectItem value="4">Viúvo(a)</SelectItem>
                                <SelectItem value="5">Separado(a)</SelectItem>
                                <SelectItem value="6">União estável</SelectItem>
                            </SelectGroup>
                            </SelectContent>
                        </Select>
                        )}
                    />
                </div>

                <div className="col-span-6 grid grid-cols-6 gap-2.5">
                        <div className="lg:col-span-3 col-span-6">
                            <Input 
                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.registroGeral ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="text"
                                placeholder="RG *"
                                {...registerWithMask('registroGeral', ['999999999'])} 
                            />
                            {errors.registroGeral && <p className="text-red-500 text-xs mt-1">{errors.registroGeral.message}</p>}
                        </div>

                        <div className="lg:col-span-3 col-span-6 relative">
                            <Input 
                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.nomeMae ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="text"
                                placeholder="Nome da mãe *"
                                {...register("nomeMae")}
                            />
                            {errors.nomeMae && <p className="text-red-500 text-xs mt-1">{errors.nomeMae.message}</p>}
                        </div>
                    </div>
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