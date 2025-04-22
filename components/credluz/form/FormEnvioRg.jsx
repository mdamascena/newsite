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
    const { setValue, getValues, handleSubmit, register, formState: { errors } } = useFormContext();
    const { formData, atualizarForm } = useFormData();
    
    const [rgFrente, setRgFrente] = useState(getValues("rgFrente") || "");
    const [rgVerso, setRgVerso] = useState(getValues("rgVerso") || "");

    const [previewFrente, setPreviewFrente] = useState("");
    const [previewVerso, setPreviewVerso] = useState("");

    const fileInputRefFrente = useRef(null);
    const fileInputRefVerso = useRef(null);
    
    const handleImageUpload = (event, setPreview, fieldName, setImageState) => {
        const file = event.target.files[0];
        if (!file) return;

        setValue(fieldName, file); // Adiciona o arquivo ao react-hook-form

        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result.split(",")[1];
            setPreview(reader.result);
            setImageState(base64Data);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = (setPreview, fieldName) => {
        setPreview("");
        setValue(fieldName, null);
    };    

    const onSubmit = (data) => {
        const dadosParaEnviar = {
            ...data,
            rgFrente: rgFrente,
            rgVerso: rgVerso
        };
        atualizarForm(dadosParaEnviar);
        onNext();
    };

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
                            {previewFrente ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => removeImage(setPreviewFrente, "rgFrente")} 
                                        style={{height: 25, width: 25}}
                                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                                        <span style={{display: 'flex', position: 'relative', bottom: '4px', left: '5px'}}>x</span>
                                    </button>
                                    <Image style={{height: 200, objectFit: 'contain'}} src={`data:image/png;base64,${rgFrente}`} width={200} height={200} alt="RG Frente" />
                                </div>
                            ) : (
                                <>
                                    <Label style={{width: 200, cursor: 'pointer', display: 'flex', flexDirection: 'column', textAlign: 'center'}} htmlFor="rgFrente">
                                        <Image src={ImgInput} width={200} height={200} alt='RG Frente'/>
                                    </Label>
                                    <Input
                                        style={{ display: "none" }}
                                        id="rgFrente"
                                        type="file"
                                        accept="image/*"
                                        {...register("rgFrente")}
                                        ref={fileInputRefFrente}
                                        onChange={(e) => handleImageUpload(e, setPreviewFrente, "rgFrente", setRgFrente)}
                                    />
                                    {errors.rgFrente && <span style={{color: 'red', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>{errors.rgFrente.message}</span>}
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Envio de RG (Verso)</CardTitle>
                            <CardDescription>Envie uma foto do seu RG</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {previewVerso ? (  
                                <div className="relative">
                                    <button 
                                        onClick={() => removeImage(setPreviewVerso, "rgVerso")} 
                                        style={{height: 25, width: 25}}
                                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                                        <span style={{display: 'flex', position: 'relative', bottom: '4px', left: '5px'}}>x</span>
                                    </button>
                                    <Image style={{height: 200, objectFit: 'contain'}} src={`data:image/png;base64,${rgVerso}`} width={200} height={200} alt="RG Verso" />
                                </div>
                            ) : (
                                <div>
                                    <Label style={{width: 200, cursor: 'pointer', display: 'flex', flexDirection: 'column', textAlign: 'center'}} htmlFor="rgVerso">
                                        <Image src={ImgInput} width={200} height={200} alt='RG Verso' />
                                    </Label>
                                    <Input
                                        style={{ display: "none" }}
                                        id="rgVerso"
                                        type="file"
                                        accept="image/*"
                                        {...register("rgVerso")}
                                        ref={fileInputRefVerso}
                                        onChange={(e) => handleImageUpload(e, setPreviewVerso, "rgVerso", setRgVerso)}
                                    />
                                    {errors.rgVerso && <span style={{color: 'red', display: 'flex', justifyContent: 'center', marginTop: '15px'}}>{errors.rgVerso.message}</span>}
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
                    <BtnNext event={handleSubmit(onSubmit)} nome="Avançar" type="submit" />
                </div>
            </div>
        </>
    );
}
