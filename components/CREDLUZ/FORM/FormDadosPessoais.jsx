import { Input } from "components/ui/input"
import { useEffect, useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/selectFC"
import { useFormData } from "../../../context/FormContext"
import { Controller, useFormContext } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import { IoIosArrowBack } from "react-icons/io"
import { PiMapPinAreaLight } from "react-icons/pi"
import { motion } from 'framer-motion'
import BtnNext from '../../geral/button/BtnBlueNext'
import BtnBack from '../../geral/button/BtnBlueBack'
import { getCidade, getEnderecoCep, getEstado } from "../../../services/servicesCredLuz/apiCep"
import { debounce } from 'lodash';
import { toast, ToastContainer } from "react-toastify"


export default function FormDadosPessoais({ backStep }) {

    const { register, watch, setValue, handleSubmit, control, formState: { errors }, getValues } = useFormContext();
    const registerWithMask = useHookFormMask(register);

    const { atualizarForm } = useFormData()
    const [comCep, setComCep] = useState(true);
    const [semCep, setSemCep] = useState(false)

    //Monitoramento
    const cepWatch = watch('cep')
    const ufWatch = watch('uf')


    const handleComCep = () => {
        setSemCep(true)
    };

    //RESETAR OS CAMPOS
    useEffect(() => {
        const resetFields = ['cep', 'uf', 'cidade', 'logradouro', 'bairro', 'complemento', 'numero', 'whatsapp'];
        resetFields.forEach(field => setValue(field, ''));
    }, [comCep, setValue]);

    // useEffect(() => {
    //     if(semCep){
    //         getEstado()
    //             .then((data) => setUfs(data))
    //             .catch((err) => console.log('Erro ao buscar Uf', err))
    //     }
    // }, [semCep])

    // useEffect(() => {
    //     if(ufWatch){
    //         getCidade(ufWatch)
    //             .then((data) => setCidades(data))
    //             .catch((err) => console.log('Erro ao buscar cidade', err))
    //     }
    // }, [ufWatch])

    const onSubmit = (data) => {
        atualizarForm(data);
        console.log('dados context', getValues());
        const dados = getValues();
        console.log(dados, "Dados enviados.");
    }

    const container = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.2, },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden">

            <motion.div
                initial={'hidden'}
                animate={'visible'}
                variants={container}
                className="grid grid-cols-6 xl:px-7"
            >

                <ToastContainer />

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="flex items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Estamos quase lá!
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Agora só precisamos do seu contato e endereço para prosseguir
                    </p>
                </div>

                {/*Form do step*/}
                <div className="container-form-body">

                    <h5 className="text-slate-400 col-span-6 mb-2 mt-4">Endereço</h5>

                    {comCep && (
                        <div className="grid grid-cols-6 gap-2.5 col-span-6 mb-3">

                            <div className="col-span-3 relative">
                                <Input
                                    className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    inputmode="numeric"
                                    placeholder="CEP *"
                                    maxLength={9}
                                    {...registerWithMask("cep", ['99999-999'])}
                                />
                                <PiMapPinAreaLight className={`absolute top-3 left-2 text-2xl ${errors.cep ? 'text-red-500' : 'text-slate-400'}`} />
                                {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>}
                            </div>

                            {!semCep && (
                                <div className="col-span-3 items-center">
                                    <BtnBack className='' event={handleComCep} type="button" nome={'Não sei o CEP'} />
                                </div>
                            )}
                        </div>
                    )}

                    {semCep && (
                        <div className="col-span-6 grid grid-cols-6">

                            <div className="grid grid-cols-6 col-span-6 gap-2.5 mb-3">
                                <motion.div className="col-span-3" variants={item}>
                                    <Controller
                                        control={control}
                                        name="uf"
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className={`py-6 bg-white ${errors.uf ? 'border-red-500' : ''}`}>
                                                    <SelectValue placeholder="Estado *" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem></SelectItem>
                                                </SelectContent>

                                            </Select>
                                        )} />
                                    {errors.uf && <p className="text-red-500 text-sm mt-1">{errors.uf.message}</p>}
                                </motion.div>

                                <motion.div className="col-span-3" variants={item}>
                                    <Controller
                                        control={control}
                                        name="cidade"
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className={`py-6 bg-white ${errors.cidade ? 'border-red-500' : ''}`}>
                                                    <SelectValue placeholder="Cidade *" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem></SelectItem>
                                                </SelectContent>

                                            </Select>
                                        )} />
                                    {errors.cidade && <p className="text-red-500 text-xs mt-1">{errors.cidade.message}</p>}
                                </motion.div>
                            </div>

                            <div className="col-span-6 grid lg:grid-cols-6 grid-cols-8 gap-2.5 mb-3">
                                <motion.div className="col-span-6 lg:col-span-5" variants={item}>
                                    <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="Logradouro *"
                                        {...register('logradouro')}
                                    />
                                    {errors.logradouro && <p className="text-red-500 text-xs mt-1">{errors.logradouro.message}</p>}
                                </motion.div>

                                <motion.div className="col-span-2 lg:col-span-1" variants={item}>
                                    <Input className='py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500'
                                        placeholder="N°"
                                        inputmode="numeric"
                                        {...register('numero')}
                                    />
                                </motion.div>
                            </div>

                            <div className="col-span-6 grid grid-cols-6 gap-2.5">
                                <motion.div className="col-span-3" variants={item}>
                                    <Input className='py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500'
                                        placeholder="Complemento"
                                        {...register('complemento')}
                                    />
                                </motion.div>

                                <motion.div className="col-span-3" variants={item}>
                                    <Input className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                        }`}
                                        placeholder="Bairro *"
                                        {...register('bairro')} />
                                    {errors.bairro && <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>}
                                </motion.div>
                            </div>

                        </div>
                    )}

                </div>

                {/*Botões*/}
                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                    </div>

                    <div className="col-span-5">
                        <BtnNext nome={'Enviar para análise'} type="submit" event={handleSubmit(onSubmit)} />
                    </div>
                </div>

            </motion.div>

        </form>
    )
}