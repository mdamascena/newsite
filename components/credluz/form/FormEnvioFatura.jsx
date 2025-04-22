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

export default function FormEnvioFatura({ onNext, backStep }) {

    const { setValue, getValues, handleSubmit, register, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();

    const [fatura, setFatura] = useState(getValues("fatura") || "");
    const [previewFatura, setPreviewFatura] = useState("");
    const fileInputRefFrente = useRef(null);

    const handleImageUpload = (event, setPreview, fieldName, setImageState) => {
        const file = event.target.files[0];
        if (!file) return;

        setValue(fieldName, file);

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
            fatura: fatura,
        };
        atualizarForm(dadosParaEnviar);
        onNext();
    };

    return (
        <>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Envio fatura de energia</CardTitle>
                        <CardDescription>Envie uma foto</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {previewFatura ? (
                            <div className="relative">
                                <button
                                    onClick={() => removeImage(setPreviewFatura, "fatura")}
                                    style={{ height: 25, width: 25 }}
                                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                                    <span style={{ display: 'flex', position: 'relative', bottom: '4px', left: '5px' }}>x</span>
                                </button>
                                <Image style={{ height: 200, objectFit: 'contain' }} src={`data:image/png;base64,${fatura}`} width={200} height={200} alt="RG Frente" />
                            </div>
                        ) : (
                            <>
                                <Label style={{ width: 200, cursor: 'pointer', display: 'flex', flexDirection: 'column', textAlign: 'center' }} htmlFor="fatura">
                                    <Image src={ImgInput} width={200} height={200} alt='RG Frente' />
                                </Label>
                                <Input
                                    style={{ display: "none" }}
                                    id="fatura"
                                    type="file"
                                    accept="image/*"
                                    {...register("fatura")}
                                    ref={fileInputRefFrente}
                                    onChange={(e) => handleImageUpload(e, setPreviewFatura, "fatura", setFatura)}
                                />
                                {errors.fatura && <span style={{ color: 'red', display: 'flex', justifyContent: 'center', marginTop: '15px' }}>{errors.fatura.message}</span>}
                            </>
                        )}
                    </CardContent>
                </Card>
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
    )
}