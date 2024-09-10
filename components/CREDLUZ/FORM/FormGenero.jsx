import { Controller, useFormContext } from "react-hook-form";
import { Label } from "components/ui/label"
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"
import { useFormDataLuz } from "../../../context/FormContextLuz";

export default function FormGenero({ onNext, backStep }) {

    const { control, handleSubmit } = useFormContext();
    const { atualizarForm } = useFormDataLuz();

    function onSubmit(data){
        atualizarForm(data);
        onNext();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="genero" // Nome do campo no formulário
                control={control}
                defaultValue="" // Valor padrão
                render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value} onValueChange={onChange}>
                        <div className="flex gap-5 mb-5 justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="0" id="masculino" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "0" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="masculino"
                                    onClick={() => onChange("0")}
                                >
                                    Masculino
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="1" id="feminino" />
                                <Label
                                    className={`w-40 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "1" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="feminino"
                                    onClick={() => onChange("1")}
                                >
                                    Feminino
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
                    <Button type="submit" className=" w-full h-12">
                        Avançar
                    </Button>
                </div>
            </div>
        </form>
    )
}