import { Input } from "components/ui/input"
import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/selectFC"
import { useFormDataLuz } from "../../../context/FormContextLuz"
import { Controller, useFormContext } from "react-hook-form"
import InputMask from 'react-input-mask'
import { useHookFormMask } from "use-mask-input"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"
import { MdWhatsapp } from "react-icons/md"
import { IoIosArrowBack } from "react-icons/io"
import { PiMapPinAreaLight } from "react-icons/pi";
import { useEffect } from "react"
import { motion } from 'framer-motion'
import BtnNext from '../../GERAL/BUTTON/BtnBlue'
import BtnBack from '../../GERAL/BUTTON/BtnBlueBack'

export default function FormDadosPessoais({ backStep, onNext }) {

    const { register, watch, setValue, handleSubmit, control, formState: { errors }, getValues } = useFormContext();
    const registerWithMask = useHookFormMask(register);

    const { atualizarForm } = useFormDataLuz()
    const [comCep, setComCep] = useState(true);
    const [semCep, setSemCep] = useState(false)
    const [uf, setUf] = useState([]);
    const [cidade, setCidade] = useState([]);

    const cep = watch('cep')
    const ufWatch = watch('uf')

    const handleComCep = () => {
        setSemCep(true)
    };

    //RESETAR OS CAMPOS
    useEffect(() => {
        const resetFields = ['cep', 'uf', 'cidade', 'logradouro', 'bairro', 'complemento', 'whatsapp', 'celular'];
        resetFields.forEach(field => setValue(field, ''));
    }, [comCep, setValue]);


    useEffect(() => {
        if(cep && cep.length === 8){
            const fetchAddress = async () => {
                try{
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();
                    if(data.erro) {
                        console.log('erro')
                    } else {
                        setSemCep(true);
                        setValue('cep', data.cep);
                        setValue('uf', data.uf);
                        setValue('cidade', data.localidade)
                        setValue('logradouro', data.logradouro);
                        setValue('bairro', data.bairro);

                        const cidadeEncontrada = cidade.find(x => x.nome === data.localidade);
                        if (cidadeEncontrada) {
                            setValue('cidade', cidadeEncontrada.nome);
                        }
                    }
                } catch (err) {
                    setSemCep(true)
                    console.log(err)
                }
            };
            fetchAddress();
        }
    }, [cep, setValue])
    
    useEffect(() => {
            fetch('https:servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUf(data))
            .catch(error => console.log('Erro ao buscar UF', error))
    }, [])

    useEffect(() => {
        if (ufWatch) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufWatch}/municipios`)
                .then(response => response.json())
                .then(data => setCidade(data))
                .catch(error => console.log('Erro ao buscar cidades', error))
        }
    }, [ufWatch])

    const onSubmit = (data) => {
        atualizarForm(data);
        console.log('dados context', getValues());
        const dados = getValues();
        console.log(dados, "Dados enviados.");
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
                <div className="col-span-6 grid grid-cols-6 content-start pt-10 lg:pt-0 lg:content-center lg:min-h-[60vh] min-h-[55vh]">
        
                    <h5 className="col-span-6 text-slate-400 mb-2">Contatos</h5>

                    <div className="col-span-6 grid grid-cols-6 gap-2.5">

                        <div className="col-span-3 relative">

                            <Input 
                                className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.celular ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="text"
                                placeholder="Celular *"
                                {...registerWithMask("celular", ['99 99999-9999'])}
                            />
                            <HiOutlineDevicePhoneMobile className={`absolute top-3 left-2 text-2xl ${errors.celular ? 'text-red-500' : 'text-slate-400'}`} />
                            {errors.celular && <p className="text-red-500 text-xs mt-1">{errors.celular.message}</p>}
                
                        </div>

                        <div className="col-span-3 relative">

                            <Input 
                                className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                type="text"
                                placeholder="WhatsApp *"
                                {...registerWithMask("whatsapp", ['99 99999-9999'])}
                            />
                            <MdWhatsapp className={`absolute top-3 left-2 text-2xl ${errors.whatsapp ? 'text-red-500' : 'text-slate-400'}`} />
                            {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>}
                        </div>

                    </div>

                    <h5 className="text-slate-400 col-span-6 mb-2 mt-4">Endereço</h5>

                    {comCep && (
                        <div className="grid grid-cols-6 gap-2.5 col-span-6 mb-3">

                            <div className="col-span-3 relative">
                                <Input 
                                    className={`py-6 pl-9 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="Cep *"
                                    maxLength={9}
                                    {...register("cep", ['99999-999'])}
                                />
                                <PiMapPinAreaLight className={`absolute top-3 left-2 text-2xl ${errors.cep ? 'text-red-500' : 'text-slate-400'}`} />
                                {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>}
                            </div>
                            
                            {!semCep && (
                                <div className="col-span-3 items-center">
                                    <BtnBack className='' event={handleComCep} type="button" nome={'Não sei o CEP'}/>
                                </div>
                            )}
                        </div>
                    )}

                    {semCep && (
                        <div className="col-span-6 grid grid-cols-6">             

                           <div className="grid grid-cols-6 col-span-6 gap-2.5 mb-3">
                                    
                                <motion.div className="col-span-3" variants={item}>
                                    <Controller
                                        name="uf"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                                
                                            <Select {...field} onValueChange={(value) => { field.onChange(value); }} value={field.value}>
                                                        
                                                <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
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
                                </motion.div>

                                <motion.div className="col-span-3" variants={item}>    
                                    <Controller
                                        name="cidade"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select {...field} onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className={`col-span-6 py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
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
                <div className="grid grid-cols-7 col-span-6 lg:min-h-[20vh] min-h-[10vh] content-center gap-2">
                    <div className="col-span-2">
                        <BtnBack nome={'Voltar'} event={backStep} icon={<IoIosArrowBack className="lg:mr-3 mr-1"/>}/>
                    </div>

                    <div className="col-span-5">
                        <BtnNext nome={'Enviar para análise'} type="submit" event={handleSubmit(onSubmit)}/>
                    </div>
                </div>

            </motion.div>

        </form>
    )
}