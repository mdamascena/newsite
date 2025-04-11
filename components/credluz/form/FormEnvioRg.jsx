import { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { IoIosArrowBack } from "react-icons/io";
import { Label } from "components/ui/label";
import { Input } from "components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "components/ui/card";
import Image from "next/image";
import ImgInput from '../../../public/img/imageInput.png'
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";

export default function FormEnvioRg({ onNext, backStep }) {
    const { setValue, getValues, register, formState: { errors } } = useFormContext();
    const { formData, atualizarForm } = useFormData();
    
    const [rgFrente, setRgFrente] = useState(getValues("rgFrente") || "");
    const [rgVerso, setRgVerso] = useState(getValues("rgVerso") || "");
    const fileInputRefFrente = useRef(null);
    const fileInputRefVerso = useRef(null);
    
    const handleImageUpload = (event, setImage, fieldName) => {
        const file = event.target.files[0];
        if (!file) return;

        setValue(fieldName, file); // Adiciona o arquivo ao react-hook-form

        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result.split(",")[1];
            setImage(base64Data);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = (setImage, fieldName) => {
        setImage("");
        setValue(fieldName, null);
    };

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    useEffect(() => {console.log(formData, "formData")}, [])

    return (
        <>
            <div className="gap-2 flex justify-center">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Envio de RG (Frente)</CardTitle>
                            <CardDescription>Envie uma foto do seu RG</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {rgFrente ? (
                                <div className="relative">
                                    <button onClick={() => removeImage(setRgFrente, "rgFrente")} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">X</button>
                                    <img src={`data:image/png;base64,${rgFrente}`} alt="RG Frente" className="w-40 h-40" />
                                </div>
                            ) : (
                                <>
                                    <Label className="content-notFot" htmlFor="rgFrente">Foto Frente
                                        <img src='../../../public/img/imageInput.png' alt='' className="label-foto" />
                                    </Label>
                                    <Input
                                        style={{ display: "none" }}
                                        id="rgFrente"
                                        type="file"
                                        accept="image/*"
                                        {...register("rgFrente")}
                                        ref={fileInputRefFrente}
                                        onChange={(e) => handleImageUpload(e, setRgFrente, "rgFrente")}
                                    />
                                    {errors.rgFrente && <span>{errors.rgFrente.message}</span>}
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Envio de RG (Verso)</CardTitle>
                            <CardDescription>Envie uma foto do verso do seu RG</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {rgVerso ? (
                                <div className="relative">
                                    <button onClick={() => removeImage(setRgVerso, "rgVerso")} className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">X</button>
                                    <img src={`data:image/png;base64,${rgVerso}`} alt="RG Verso" className="w-40 h-40" />
                                </div>
                            ) : (
                                <div>
                                    <Label htmlFor="rgVerso">Foto Verso
                                        <img width={200} src='../../../public/img/imageInput.png' alt='' />
                                    </Label>
                                    <Input
                                        style={{ display: "none" }}
                                        id="rgVerso"
                                        type="file"
                                        accept="image/*"
                                        {...register("rgVerso")}
                                        ref={fileInputRefVerso}
                                        onChange={(e) => handleImageUpload(e, setRgVerso, "rgVerso")}
                                    />
                                    {errors.rgVerso && <span>{errors.rgVerso.message}</span>}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="container-form-footer">
                <div className="col-span-2">
                    <BtnBack nome="Voltar" event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                </div>
                <div className="col-span-5">
                    <BtnNext event={onSubmit} nome="Avançar" type="submit" />
                </div>
            </div>
        </>
    );
}
