import { useFormContext, Controller } from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "components/ui/select"
import { Input } from "components/ui/input";
import { useEffect } from "react";
import BtnNext from '../../geral/BUTTON/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'
import { IoIosArrowBack } from "react-icons/io"

export default function FormPagamento({ onNext, backStep }) {

    const { register, control, watch, handleSubmit, getValues, formState: { errors }, setValue } = useFormContext();
    const { atualizarForm, formData } = useFormData();

    const watchChavePix = watch("tipoDeChave");

    useEffect(() => {
        setValue("chaveCpf", "");
        setValue("chaveCel", "");
        setValue("chaveEmail", "");

        const data = getValues();

        if(watchChavePix === "1"){
            setValue("chaveCpf", data.cpf)
        } else if(watchChavePix === "2"){
            setValue("chaveCel", data.celular)
        } else if(watchChavePix === "3"){
            setValue("chaveEmail", data.email)
        }
    }, [watchChavePix])

    const onSubmit = (data) => {
        atualizarForm(data)
        onNext();
    }
    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>

            <div className="container-form-head">
                <div className="flex items-end">
                    <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                        Estamos quase lá!
                    </h1>
                </div>
                <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                    Agora só precisamos do sua chave pix para prosseguir
                </p>
            </div>
            <div className="container-form-body">
                <div className="grid grid-cols-1 col-span-6 gap-3 items-center">
                    <Controller
                        name="banco"
                        control={control}
                        defaultValue="" // Valor padrão vazio
                        render={({ field }) => (
                            <Select
                                onValueChange={(value) => { field.onChange(value); }}
                                value={field.value}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Banco disponiveis" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione o banco...</SelectLabel>
                                        <SelectItem value="1">BANCO TESTE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
                <div className="grid grid-cols-1 col-span-6 gap-3 items-center">
                    <Controller
                        name="tipoDeChave"
                        control={control}
                        defaultValue="" // Valor padrão vazio
                        render={({ field }) => (
                            <Select
                                onValueChange={(value) => { field.onChange(value); }}
                                value={field.value}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Tipo de Chave" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Selecione a chave PIX...</SelectLabel>
                                        <SelectItem value="1">CPF</SelectItem>
                                        <SelectItem value="2">Celular</SelectItem>
                                        <SelectItem value="3">Email</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                {watchChavePix === "1" && (
                    <div className="lg:col-span-6 col-span-1">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.chaveCpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder="CPF *"
                            disabled 
                            {...register("chaveCpf")}
                        />
                        {errors.chaveCpf && <p className="text-red-500 text-xs mt-1">{errors.chaveCpf.message}</p>}
                    </div>
                )}

                
                {watchChavePix === "2" && (
                    <div className="lg:col-span-6 col-span-1">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.chaveCel ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder="Celular *"
                            {...register("chaveCel")}
                        />
                        {errors.chaveCel && <p className="text-red-500 text-xs mt-1">{errors.chaveCel.message}</p>}
                    </div>
                )}
                
                {watchChavePix === "3" && (
                    <div className="lg:col-span-6 col-span-1">
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.chaveEmail ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder="Email *"
                            {...register("chaveEmail")}
                        />
                        {errors.chaveEmail && <p className="text-red-500 text-xs mt-1">{errors.chaveEmail.message}</p>}
                    </div>
                )}

                    <div className="container-form-footer">
                        <div className="col-span-2">
                            <BtnBack nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                        </div>

                        <div className="col-span-5">
                            <BtnNext event={handleSubmit(onSubmit)} nome={'Avançar'} type="submit" />
                        </div>
                    </div>
                
            </div>
        </form>
    )
}