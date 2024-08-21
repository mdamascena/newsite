import { Input } from "components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/selectFC";
import { Controller, useFormContext } from "react-hook-form";
import InputMask from 'react-input-mask';

export default function FormDadosPessoais() {

    const { register, control, setValue, formState: { errors } } = useFormContext();

    return (
        <>
            <div className="mb-6">
                <h5 className="text-blue-400 mb-2">Dados Pessoais</h5>

                <div className="flex gap-5 mb-5">

                    <div className="w-full">
                        <Input disabled className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="Seu CPF *"
                            {...register('cpf')} />
                    </div>

                    <div className="w-full">
                        <InputMask
                            mask="99/99/9999"
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                errors.dataNascimento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                            placeholder='Nascimento *'
                            inputMode='numeric'
                            {...register("dataNascimento")}
                        >
                            {(inputProps) => <Input {...inputProps} />}
                        </InputMask>
                        {errors.dataNascimento && <p className="text-red-500 text-sm mt-1">{errors.dataNascimento.message}</p>}
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="w-full">
                        <Input disabled className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                            placeholder="Seu nome completo*"
                            {...register('nome')} />
                    </div>

                    <div className="w-full">
                        <Controller
                            name="tipoOcupacao"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                        errors.tipoOcupacao ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                        }`}>
                                        <SelectValue placeholder="Tipo de ocupação" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Aposentado</SelectItem>
                                        <SelectItem value="2">Pensionista</SelectItem>
                                        <SelectItem value="3">Autônomo</SelectItem>
                                        <SelectItem value="4">Assalariado</SelectItem>
                                        <SelectItem value="5">Servidor Público</SelectItem>
                                        <SelectItem value="6">Militar (Ativo/Inativo)</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.tipoOcupacao && <p className="text-red-500 text-sm mt-1">{errors.tipoOcupacao.message}</p>}
                    </div>
                </div>
            </div>

            <div className="mb-6">

                <h5 className="text-blue-400 mb-2">Contatos</h5>

                <div className="w-full mb-5">
                    <Input disabled type="email" className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                        placeholder="Seu e-mail"
                        {...register('email')} />
                </div>

                <div className="flex gap-5">

                    <div className="w-full">
                        <InputMask
                            mask="(99) 99999-9999"
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
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
                            className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                                errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
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
                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                            errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
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
                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                            errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
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
        </>
    )
}