import { Controller, useFormContext } from "react-hook-form";
import { Label } from "components/ui/label";
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group";
import { useEffect } from 'react';
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"
import { useFormDataLuz } from "../../../context/FormContextLuz";
import { motion, AnimatePresence } from 'framer-motion';

export default function FormTipoOcupacao({ onNext, backStep }) {

    const { control, handleSubmit } = useFormContext()
    const { atualizarForm } = useFormDataLuz()

    function onSubmit(data){
        atualizarForm(data)
        onNext();
    }

    return (
        <form className="overflow-hidden" onSubmit={handleSubmit(onSubmit)}>

            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>

                <div className='h-full lg:h-[97.5vh] grid grid-cols-6 select-none'>

                    <div className="col-span-6 content-start lg:mt-8 mt-2 mb-8">
                        <h1 className="text-slate-400 text-lg">
                            Selecione a sua ocupação
                        </h1>
                    </div>
                    
                    <div className="col-span-6 content-center min-h-[60vh]">
                        <Controller
                            name="tipoOcupacao"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value } }) => (
                                
                                <RadioGroup value={value} onValueChange={onChange}>

                                    <div className="grid grid-cols-4 lg:grid-cols-3 gap-2">

                                        <RadioGroupItem className="hidden" name='status' value="1" id="assalariado" />
                                        <Label className="col-span-4 flex lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 shadow-md 
                                        hover:text-blue-400 rounded-md cursor-pointer bg-white"
                                            htmlFor="assalariado"
                                            onClick={() => onChange("1")}
                                            >
                                                Assalariado
                                        </Label>
                        
                                        <RadioGroupItem className="hidden" value="2" id="servidor" />
                                        <Label className="col-span-4 lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 text-center flex py-4 px-8 border rounded-lg cursor-pointer 
                                            has-[:checked]:bg-blue-200 has-[:checked]:text-white border-blue-500 bg-white"
                                                htmlFor="servidor"
                                                onClick={() => onChange("2")}
                                            >
                                            Servidor
                                        </Label>
                                        
                                        <RadioGroupItem className="hidden" value="3" id="aposentado" />
                                        <Label className={`col-span-4 lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                        ${value === "3" ? "text-black border-blue-500" : "bg-white"}`}
                                            htmlFor="aposentado"
                                            onClick={() => onChange("3")}
                                            >
                                            Aposentado
                                        </Label>
                                        
                                        <RadioGroupItem className="hidden" value="4" id="pensionista" />
                                        <Label className={`col-span-4 lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                        ${value === "4" ? "text-black border-blue-500" : "bg-white"}`}
                                            htmlFor="pensionista"
                                            onClick={() => onChange("4")}
                                            >
                                            Pensionista
                                        </Label>
                                        
                                        <RadioGroupItem className="hidden" value="5" id="autonomo" />
                                        <Label className={`col-span-4 lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                        ${value === "5" ? "text-black border-blue-500" : "bg-white"}`}
                                            htmlFor="autonomo"
                                            onClick={() => onChange("5")}
                                            >
                                            Autônomo
                                        </Label>
                                        
                                        <RadioGroupItem className="hidden" value="6" id="militar" />
                                        <Label className={`col-span-4 lg:col-span-1 lg:h-24 h-16 items-center justify-center text-slate-400 text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                        ${value === "6" ? "text-black border-blue-500" : "bg-white"}`}
                                            htmlFor="militar"
                                            onClick={() => onChange("6")}
                                            >
                                            Militar
                                        </Label>

                                    </div>
                                    
                                </RadioGroup>
                            )}
                        />
                    </div>

                    <div className="col-span-6 content-end lg:mb-8 mt-8 grid grid-cols-6 items-center">
                        <div className="col-span-1">
                            <HiOutlineArrowLongLeft className='text-5xl text-black cursor-pointer' onClick={backStep} />
                        </div>

                        <div className="col-span-5">
                            <Button type="submit" className="w-full bg-blue-500 text-white rounded" >
                                Avançar
                            </Button>
                        </div>
                    </div>

                </div>

            </motion.div>
    
        </form>
    );
}
