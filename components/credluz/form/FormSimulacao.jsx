import { useFormContext, Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { motion } from "framer-motion";
import { container } from "shared/motionUtils/motionTransation";
import BtnNext from "../../geral/button/BtnBlueNext";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"

export default function FormSimulacao({ onNext }) {

    const { register, control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm } = useFormData();

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className="grid grid-cols-6 xl:px-7"
            >

                <div className="container-form-head">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Valores Pré-aprovados
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Selecione o valor e as parcelas para continuar.
                    </p>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-form-body">
                        <div className="col-span-6">
                            <Controller
                                name="valorLimite"
                                control={control}
                                render={({ field }) => (
                                    <Select className="placeholder:text-slate-400" 
                                        {...field}
                                        onValueChange={(value) => field.onChange(value)}>
                                        <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.valorLimite ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
                                            <SelectValue placeholder="Informe o valor desejado" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup className="text-slate-400">
                                                <SelectLabel>Selecione o valor</SelectLabel>
                                                <SelectItem value="0">1200,00</SelectItem>
                                                <SelectItem value="1">1100,00</SelectItem>
                                                <SelectItem value="2">1000,00</SelectItem>
                                                <SelectItem value="3">900,00</SelectItem>
                                                <SelectItem value="4">800,00</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.valorLimite && <p className="text-red-500 text-xs mt-1">{errors.valorLimite.message}</p>}
                        </div>

                        <div className="col-span-6">
                            <Controller
                                name="prazo"
                                control={control}
                                render={({ field }) => (
                                    <Select className="placeholder:text-slate-400" 
                                        {...field}
                                        onValueChange={(value) => field.onChange(value)}>
                                        <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.prazo ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
                                            <SelectValue placeholder="Informe as parcelas" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup className="text-slate-400">
                                                <SelectLabel>Selecione as parcelas</SelectLabel>
                                                <SelectItem value="0">12x de 184,00</SelectItem>
                                                <SelectItem value="1">11x de 188,94</SelectItem>
                                                <SelectItem value="2">10x de 192,09</SelectItem>
                                                <SelectItem value="3">9x 190,20</SelectItem>
                                                <SelectItem value="4">8x 200,28</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.prazo && <p className="text-red-500 text-xs mt-1">{errors.prazo.message}</p>}
                        </div>
                    </div>
                </form>

                <div className="container-form-footer">
                    <div className="col-span-8">
                        <BtnNext event={handleSubmit(onSubmit)} nome="Avançar" type="submit" />
                    </div>
                </div>
            </motion.div >


        </>

    )
}