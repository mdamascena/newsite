import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { useHookFormMask } from "use-mask-input"
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion'
import { container } from "shared/motionUtils/motionTransation"
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { AlertSimple } from "shared/alertUtils/alertService";

export default function FormDadosBancarios({ onNext, backStep }) {

    const { register, control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const registerWithMask = useHookFormMask(register)

    const cpfWatch = watch("cpf_contaBancaria");

    useEffect(() => {
        // Remove todos os caracteres não numéricos
        const cpfDigits = cpfWatch ? cpfWatch.replace(/\D/g, '') : '';
        if (cpfDigits.length !== 11) return;
    
        const cpfCadastro = formData.cpf.replace(/\D/g, '');
        
        if (cpfDigits !== cpfCadastro) {
            AlertSimple("Aviso", "O CPF informado é diferente do CPF cadastrado", "warning");
            setValue("banco", "");
            setValue("agencia", "");
            setValue("conta", "");
            setValue("cpf_contaBancaria", "");
        }
    
    }, [cpfWatch]);

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    return (
        <>
            <motion.div
                initial={'hidden'}
                animate={'visible'}
                variants={container}
                className='grid grid-cols-6 select-none xl:px-5'
            >
                <div className="container-form-head">

                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Dados Bancários
                        </h1>
                    </div>

                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Informe os dados da sua conta bancária para que possamos realizar o pagamento.
                    </p>
                </div>

                <div className="container-form-body">
                    <div className="col-span-6 mt-5">
                        <Controller
                            name="banco"
                            control={control}
                            rules={{ required: "Selecione um banco" }}
                            render={({ field }) => (
                                <Select
                                    className="placeholder:text-slate-400"
                                    {...field} // Integra o campo com o Controller
                                    onValueChange={(value) => field.onChange(value)} // Atualiza o valor do campo
                                >
                                    <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.banco ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
                                        <SelectValue placeholder="Informe seu Banco" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup className="text-slate-400">
                                            <SelectLabel>Selecione o Banco</SelectLabel>
                                            <SelectItem value="0">237 - Banco Bradesco</SelectItem>
                                            <SelectItem value="1">341 - Banco Itaú</SelectItem>
                                            <SelectItem value="2">033 - Banco Santander</SelectItem>
                                            <SelectItem value="3">001 - Banco do Brasil</SelectItem>
                                            <SelectItem value="4">104 - Caixa Econômica Federal</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.banco && <p className="text-red-500 text-xs mt-1">{errors.banco.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <Label htmlFor="agencia">Agência sem dígito</Label>
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.agencia ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder='Agência'
                            inputMode="numeric"
                            maxLength={4}
                            id="agencia"
                            {...register("agencia")}
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }}
                        />
                        {errors.agencia && <p className="text-red-500 text-xs mt-1">{errors.agencia.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <Label htmlFor="conta">Conta</Label>
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.conta ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            inputMode="numeric"
                            placeholder='Digite sua conta'
                            id="conta"
                            {...register("conta", {
                                onChange: (e) => {
                                    let value = e.target.value.replace(/[^0-9]/g, "");
                                    if (value.length > 1) {
                                        value = value.slice(0, -1) + "-" + value.slice(-1); // Insere o traço antes do último dígito
                                    }
                                    setValue("conta", value, { shouldValidate: true });
                                }
                            })}

                        />
                        {errors.conta && <p className="text-red-500 text-xs mt-1">{errors.conta.message}</p>}
                    </div>

                    <div className="col-span-6">
                        <Label htmlFor="cpf_contaBancaria">CPF</Label>
                        <Input
                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cpf_contaBancaria ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                            type="text"
                            placeholder='Digite seu CPF'
                            inputMode="numeric"
                            id="cpf_contaBancaria"
                            maskChar={null}
                            {...registerWithMask("cpf_contaBancaria", ['999.999.999-99'])}
                        />
                        {errors.cpf_contaBancaria && <p className="text-red-500 text-xs mt-1">{errors.cpf_contaBancaria.message}</p>}
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

            </motion.div>


        </>
    )
}