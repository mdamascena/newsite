import { Input } from "components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/selectFC";
import { Controller, useFormContext } from "react-hook-form";
import InputMask from 'react-input-mask';
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"
import { useEffect } from "react";

export default function FormDadosPessoais({ backStep, onNext }) {

    const { register, watch, setValue, handleSubmit, formState: { errors } } = useFormContext();
    const cidade = watch('cidade');
    const uf = watch('uf');
    const logradouro = watch('logradouro')
    const bairro = watch('bairro')

    useEffect(() => {
        if (cidade && uf) {
            setValue('cidade', cidade);
            setValue('uf', uf);
            setValue('logradouro', logradouro)
            setValue('bairro', bairro)
        }
    }, [])

    const onSubmit = (data) => {
        console.log(data)
        onNext();
    }

    return (
        <>
            <div className="mb-6">

                <h5 className="text-blue-400 mb-2">Contatos</h5>

                <div className="flex gap-5">

                    <div className="w-full">
                        <InputMask
                            mask="(99) 99999-9999"
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                            placeholder='Celular *'
                            inputMode='numeric'
                            {...register("celular")}
                        >
                            {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                        {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>}
                    </div>

                    <div className="w-full">
                        <InputMask
                            mask="(99) 99999-9999"
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                }`}
                            placeholder='WhatsApp *'
                            inputMode='numeric'
                            {...register("whatsapp")}
                        >
                            {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>}
                    </div>

                </div>
            </div>

            <div className="mb-12">

                <h5 className="text-blue-400 mb-2">Endereço</h5>

                <div className="flex gap-5 mb-5">

                    <div className="w-full">
                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder="Logradouro *"
                            {...register('logradouro')} />
                        {errors.logradouro && <p className="text-red-500 text-sm mt-1">{errors.logradouro.message}</p>}
                    </div>

                    <div className="w-full">
                        <Input className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="N°"
                            {...register('numero')} />
                    </div>

                    <div className="w-full">
                        <Input className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="Complemento"
                            {...register('complemento')} />
                    </div>
                </div>

                <div className="flex gap-5">

                    <div className="w-full">
                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder="Bairro *"
                            {...register('bairro')} />
                        {errors.bairro && <p className="text-red-500 text-sm mt-1">{errors.bairro.message}</p>}
                    </div>

                    <div className="w-full">
                        <Input disabled className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="Cidade *"
                            {...register('cidade')} />
                    </div >

                    <div className="w-full">
                        <Input disabled className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="UF"
                            {...register('uf')} />
                    </div>
                </div>
            </div>

            <div className=" gap-5 flex align-middle">
                <div>
                    <HiOutlineArrowLongLeft className='text-5xl text-black cursor-pointer' onClick={backStep} />
                </div>

                <div className="w-full">
                    <Button type="submit" className="bg-gray-300 text-white w-full h-12">
                        Começar análise
                    </Button>
                </div>
            </div>
        </>
    )
}