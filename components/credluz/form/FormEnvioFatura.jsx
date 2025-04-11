import { useFormContext } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { IoIosArrowBack } from "react-icons/io";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { useEffect } from "react";

export default function FormEnvioFatura({ onNext, backStep }) {

    const { register, control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    useEffect(() => {
        console.log("FormData", formData);
    }, [])

    return (
        <>
            <span>STEP ENVIO DE FATURA</span>

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