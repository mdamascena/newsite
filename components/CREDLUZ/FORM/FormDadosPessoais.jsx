import { Input } from "components/ui/input"
import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/selectFC"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import { Controller, useFormContext } from "react-hook-form"
import InputMask from 'react-input-mask'
import { HiOutlineArrowLongLeft } from "react-icons/hi2"
import { Button } from "components/ui/button"
import { useEffect } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import BtnNext from '../../GERAL/BUTTON/BtnBlue'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'


export default function FormDadosPessoais({ backStep, onNext }) {

    const { register, setValue, handleSubmit, control, formState: { errors }, getValues } = useFormContext();
    const { atualizarForm } = useFormDataLuz()
    const [comCep, setComCep] = useState(true);
    const [semCep, setSemCep] = useState(false)
    const [uf, setUf] = useState([]);
    const [cidade, setCidade] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');

    const handleComCep = () => {
        setSemCep(true)
    };

    const handleSemCep = () => {
        setSemCep(false)
        setComCep(true)
    };

    useEffect(() => {
        setValue('cep', ''),
        setValue('uf', ''),
        setValue('cidade', '')
        setValue('logradouro', '')
        setValue('bairro', ''),
        setValue('complemento', '')
        setValue('numero', '')
    }, [comCep, setValue])

    const handleCepBlur = (e) => {
        const inputCep = e.target.value.replace('-', '');

        if (inputCep.length === 8) {
            fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.erro) {
                        setSemCep(true);
                        setValue('cep', data.cep);
                        setValue('uf', data.uf);
                        setSelectedEstado(data.uf);
                        setValue('cidade', data.localidade);
                        setValue('logradouro', data.logradouro);
                        setValue('bairro', data.bairro);
                    } else {
                        console.log('Erro ao buscar CEP');
                    }
                })
                .catch((error) => console.error('Erro na requisição:', error));
        } else {
            console.log('CEP incompleto');
        }
    };

    useEffect(() => {
        fetch('https:servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUf(data))
            .catch(error => console.log('Erro ao buscar UF', error))
    }, [])

    useEffect(() => {
        if (selectedEstado) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`)
                .then(response => response.json())
                .then(data => setCidade(data))
                .catch(error => console.log('Erro ao buscar cidades', error))
        }
    }, [selectedEstado])

    const onSubmit = (data) => {
        atualizarForm(data)
        console.log('dados context', getValues())
        const dados = getValues();
        console.log(dados, "Dados enviados.")
    }

    const container = {
        hidden: {y: 50, opacity: 0 },
        visible: {y: 0, opacity: 1, 
            transition: {delayChildren: 0.3, staggerChildren: 0.2,},
        },
    }
      
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {y: 0, opacity: 1,
            transition: {duration: 0.5, ease:"easeOut"},
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

                {/*Titulo do step*/}
                <div className="col-span-6 lg:min-h-[20vh] min-h-[10vh] lg:content-end content-center">
                    <div className="flex items-end mb-2 relative">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight z-50 ">
                            Estamos quase lá!
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Agora só precisamos dos seus dados de contato e endereço concluir os dados cadastrais.
                    </p>
                </div>

                {/*Form do step*/}
                <div className="col-span-6 grid grid-cols-6 content-center lg:min-h-[60vh] min-h-[55vh]">
        
                    <div className="col-span-6 grid grid-cols-6 mb-4">

                        <h5 className="col-span-6 text-slate-400 mb-2">Contatos</h5>

                        <div className="col-span-6 grid grid-cols-6 gap-2.5">

                            <div className="col-span-3">
                                <InputMask
                                    mask="(99) 99999-9999"
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                        }`}
                                    maskChar={null}
                                    placeholder='Celular *'
                                    inputMode='numeric'
                                    {...register("celular")}
                                >
                                    {(inputProps) => <Input {...inputProps} />}
                                </InputMask>
                                {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                            </div>

                            <div className="col-span-3">
                                <InputMask
                                    mask="(99) 99999-9999"
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                        }`}
                                    maskChar={null}
                                    placeholder='WhatsApp *'
                                    inputMode='numeric'
                                    {...register("whatsapp")}
                                >
                                    {(inputProps) => <Input {...inputProps} />}
                                </InputMask>
                                {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
                            </div>

                        </div>

                    </div>

                    <div className="col-span-6 grid grid-cols-6">

                        <h5 className="text-slate-400 col-span-6 mb-2">Endereço</h5>

                        {comCep && (
                            <div className="col-span-6 mb-3">

                                <div className="grid grid-cols-6 gap-2.5">

                                    <div className="col-span-3">
                                            <InputMask
                                                mask="99999-999"
                                                className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                                    }`}
                                                placeholder='CEP *'
                                                inputMode='numeric'
                                                maskChar={null}
                                                {...register("cep")}
                                                onBlur={(e) => handleCepBlur(e)}
                                            >
                                                {(inputProps) => <Input {...inputProps} />}
                                            </InputMask>
                                            {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep.message}</p>}
                                    </div>

                                    {!semCep && (
                                        <div className="col-span-3 items-center">
                                            <BtnBack onClick={handleComCep} type="button" nome={'Não sei meu CEP'}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {semCep && (
                            
                            <div className="col-span-6 grid grid-cols-6">
                                
                                {comCep || semCep && (
                                    <div className="flex w-1/3 items-center mb-3">
                                        <Button onClick={handleSemCep} type="button" className="border py-5 w-full rounded-lg">Preencher com CEP</Button>
                                    </div>
                                )}

                                <div className="grid grid-cols-6 mb-3">
                                    
                                    <div className="col-span-6">
                                        <Controller
                                            name="uf"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Select {...field} onValueChange={(value) => { field.onChange(value); setSelectedEstado(value) }} value={field.value}>
                                                    <SelectTrigger className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                                        }`}>
                                                        <SelectValue placeholder="Estado *" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {uf.map((estado) => (
                                                            <SelectItem key={estado.id} value={estado.sigla}>
                                                                {estado.nome}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.uf && <p className="text-red-500 text-sm mt-1">{errors.uf.message}</p>}
                                    </div>

                                    <div className="w-full">    
                                        <Controller
                                            name="cidade"
                                            control={control}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                                        }`}>
                                                        <SelectValue placeholder="Cidade *" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {cidade.map((cidade) => (
                                                            <SelectItem key={cidade.id} value={cidade.nome}>
                                                                {cidade.nome}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.cidade && <p className="text-red-500 text-sm mt-1">{errors.cidade.message}</p>}
                                    </div>
                                </div>

                                <div className="flex gap-3 mb-3">
                                    <div className="w-full">
                                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                            }`}
                                            placeholder="Logradouro *"
                                            {...register('logradouro')} />
                                        {errors.logradouro && <p className="text-red-500 text-sm mt-1">{errors.logradouro.message}</p>}
                                    </div>

                                    <div>
                                        <Input className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                                            placeholder="N°"
                                            {...register('numero')} />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <Input className='py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500'
                                            placeholder="Complemento"
                                            {...register('complemento')} />
                                    </div>

                                    <div className="w-full">
                                        <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                                            }`}
                                            placeholder="Bairro *"
                                            {...register('bairro')} />
                                        {errors.bairro && <p className="text-red-500 text-sm mt-1">{errors.bairro.message}</p>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/*Botões*/}
                <div className="grid grid-cols-7 col-span-6 lg:min-h-[20vh] min-h-[10vh] content-center gap-2">
                    <div className="col-span-2">
                        <BtnBack nome={'Voltar'} event={backStep}/>
                    </div>

                    <div className="col-span-5">
                        <BtnNext nome={'Enviar para análise'} type="submit" onClick={handleSubmit(onSubmit)}/>
                    </div>
                </div>

            </motion.div>



        </form>
    )
}