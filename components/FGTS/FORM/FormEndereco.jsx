import { useFormContext } from "react-hook-form"
import { useFormData } from "../../../context/FormContext"

export default function FormDadosCliente({onNext, backStep}) {

    const { register, control, watch, handleSubmit, formState: { errors }, setValue } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const registerWithMask = useHookFormMask(register);

    return (
        <>

        </>
    )
}