import { Controller, useFormContext } from "react-hook-form";
import { Label } from "components/ui/label";
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group";
import { useEffect } from 'react';
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"

export default function FormTipoOcupacao({ onNext, backStep }) {

    const { control, watch, setValue } = useFormContext();
    const tipoOcupacaoValue = watch("tipoOcupacao");

    useEffect(() => {
        // Carregar dados do localStorage quando o componente é montado
        const salvarDados = localStorage.getItem('formData');
        if (salvarDados) {
            const parsedData = JSON.parse(salvarDados);
            if (parsedData.tipoOcupacao) {
                setValue("formData", parsedData.tipoOcupacao);
            }
        }
    }, [setValue]);

    useEffect(() => {
        if (tipoOcupacaoValue) {
            localStorage.setItem('formData', JSON.stringify({ tipoOcupacao: tipoOcupacaoValue }));
            onNext()
        }
    }, [tipoOcupacaoValue, onNext])

    return (
        <form>
            <Controller
                name="tipoOcupacao"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value} onValueChange={onChange}>
                        <div className="flex gap-5 mb-5 justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="1" id="assalariado" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "1" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="assalariado"
                                    onClick={() => onChange("1")}
                                >
                                    Assalariado
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="2" id="servidor" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "2" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="servidor"
                                    onClick={() => onChange("2")}
                                >
                                    Servidor
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="3" id="aposentado" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "3" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="aposentado"
                                    onClick={() => onChange("3")}
                                >
                                    Aposentado
                                </Label>
                            </div>
                        </div>

                        <div className="flex gap-5 justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="4" id="pensionista" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "4" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="pensionista"
                                    onClick={() => onChange("4")}
                                >
                                    Pensionista
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="5" id="autonomo" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "5" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="autonomo"
                                    onClick={() => onChange("5")}
                                >
                                    Autônomo
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="6" id="militar" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "6" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="militar"
                                    onClick={() => onChange("6")}
                                >
                                    Militar
                                </Label>
                            </div>
                        </div>
                    </RadioGroup>
                )}
            />

            <div className="mt-5 gap-5 flex align-middle">
                <div>
                    <HiOutlineArrowLongLeft className='text-5xl text-black cursor-pointer' onClick={backStep} />
                </div>

                <div className="w-full">
                    <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed w-full h-12">
                        Começar análise
                    </Button>
                </div>
            </div>
        </form>
    );
}