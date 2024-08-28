import { Controller, useFormContext } from "react-hook-form";
import { useEffect } from "react";
import { Label } from "components/ui/label"
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group"
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"

export default function FormTitularCia({ onNext, backStep }) {

    const { control, watch } = useFormContext();
    const titularCia = watch("titularCia")

    useEffect(() => {
        if (titularCia) {
            onNext();
        }
        localStorage.setItem('teste', titularCia)
    }, [titularCia, onNext]);


    return (
        <div>
            <Controller
                name="titularCia"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value} onValueChange={onChange}>
                        <div className="flex gap-5 mb-5 justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="0" id="titularCia" />
                                <Label
                                    className={`w-50 h-24 items-center justify-center text-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "0" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="titularCia"
                                    onClick={() => onChange("0")}
                                >
                                    Sou titular da conta
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <RadioGroupItem className="hidden" value="1" id="naoTitularCia" />
                                <Label
                                    className={`w-50 h-24 items-center justify-center flex py-4 px-8 border border-slate-200 rounded-lg cursor-pointer 
                                    ${value === "1" ? "text-black border-blue-500" : "bg-white text-black"}`}
                                    htmlFor="naoTitularCia"
                                    onClick={() => onChange("1")}
                                >
                                    Não sou titular da conta
                                </Label>
                            </div>
                        </div>
                    </RadioGroup>
                )}
            />

            <div className=" gap-5 flex align-middle">
                <div>
                    <HiOutlineArrowLongLeft className='text-5xl text-black cursor-pointer' onClick={backStep} />
                </div>

                <div className="w-full">
                    <Button disabled className="bg-gray-300 text-gray-500 cursor-not-allowed w-full h-12">
                        Começar análise
                    </Button>
                </div>
            </div>
        </div>
    )
}