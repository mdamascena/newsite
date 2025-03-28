import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { IoIosArrowBack } from "react-icons/io";
import { Label } from "components/ui/label";
import { Input } from "components/ui/input";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";

export default function FormEnvioRg({ onNext, backStep }) {
    const { setValue, getValues, register, formState: { errors } } = useFormContext();
    const { formData, atualizarForm } = useFormData();

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    return (
        <>
            <div>
                <Label htmlFor="rgFrente">Foto Frente</Label>
                <Input
                    id="rgFrente"
                    type="file"
                    accept="image/*"
                    {...register("rgFrente")}
                />
                {errors.rgFrente && <span>{errors.rgFrente.message}</span>}
            </div>

            <div>
                <Label htmlFor="rgVerso">Foto Verso</Label>
                <Input
                    id="rgVerso"
                    type="file"
                    accept="image/*"
                    {...register("rgVerso")}
                />
                {errors.rgVerso && <span>{errors.rgVerso.message}</span>}
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
