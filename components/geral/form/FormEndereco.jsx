import { useEffect, useState } from 'react'
import { useFormContext, Controller } from "react-hook-form"
import { useFormData } from "../../../context/FormContext"
import { useHookFormMask } from "use-mask-input"
import { Input } from "components/ui/input"
import { getCidade, getEnderecoCep, getEstado } from '../../../services/servicesCredLuz/apiCep'
import { Select, SelectTrigger, SelectContent, SelectItem } from "components/ui/select"
import { IoIosArrowBack } from "react-icons/io"
import { PiMapPinSimpleAreaFill } from "react-icons/pi"
import { VscMap } from "react-icons/vsc"
import { ToastContainer } from "react-toastify"
import { toastErrorColored, toastWarningColored } from 'shared/toastUtils/toastValidation'
import { motion } from 'framer-motion'
import { container, item } from 'shared/motionUtils/motionTransation'
import { OptLabel } from '../style/index'
import BtnNext from '../button/BtnBlueNext'
import BtnBack from '../button/BtnBlueBack'


export default function FormEndereco({ onNext, backStep }) {

    const { control, handleSubmit, clearErrors, watch, register, getValues, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm } = useFormData();
    const registerWithMask = useHookFormMask(register);

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [cepDigitado, setCepDigitado] = useState("");
    const [selectedEstado, setSelectedEstado] = useState("");

    const watchCep = watch("cep")
    const cidadeSelecionada = watch("cidade");
    const watchOption = watch("cepOption")

    //Atualizar os dados de CEP ao retornar de um STEP
    useEffect(() => {
        const currentCep = getValues("cep");
        setCepDigitado(currentCep ? currentCep : ""); // Atualiza o estado com uma string vazia se estiver indefinido
      },  [watchCep, getValues ]);
      
    //Busca o endereço de acordo com o CEP digitado.
    const handleCepChange = (e) => {
        const cep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        setCepDigitado(cep);

        if (cep.length === 8) {
            getEnderecoCep(cep)
                .then((data) => {
                    if (data && !data.erro) {
                        setValue("estadoCep", data.uf);
                        setValue("cidadeCep", data.localidade);
                        setValue("logradouro", data.logradouro);
                        setValue("bairro", data.bairro);
                    } else if (data && data.erro) {    
                        toastWarningColored("CEP não encontrado. Digite seu endereço!")
                        setValue("estadoCep", "");
                        setValue("cidadeCep", "");
                        setValue("logradouro", "");
                        setValue("bairro", "");
                    }
                })
                .catch((err) => {
                    toastErrorColored("Erro ao buscar o endereço. Digite seu endereço!")
                    setValue("estadoCep", "");
                    setValue("cidadeCep", "");
                    setValue("logradouro", "");
                    setValue("bairro", "");
                });
        }
    };

    //Se a opção for SemCep, faz a requisição buscando estados.
    useEffect(() => {
        if (watchOption === "2") {
            getEstado()
                .then((data) => {
                    setEstados(data)
                })
                .catch((e) => console.log(e))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watchOption])

    //Resetar o campo cidade caso troque de estado e faz a requisição novamente.
    useEffect(() => {
        if (selectedEstado !== "") {
            setValue("cidade", "")
            setValue("logradouroSemCep", "")
            setValue("numeroSemCep", "")
            setValue("complementoSemCep", "")
            setValue("bairroSemCep", "")

            getCidade(selectedEstado)
                .then((data) => setCidades(data))
                .catch((e) => console.error("Erro ao buscar cidades:", e));
        }

    }, [selectedEstado, setValue]);

    //Limpa as mensagens das validações caso os campos forem preenchidos.
    useEffect(() => {
        if (cepDigitado.length === 8) {
            clearErrors(["logradouro", "bairro", "cidadeCep", "estadoCep", "cep"]);
        } if(cidadeSelecionada) {
            clearErrors(["logradouroSemCep", "bairroSemCep"])
        }
    }, [cepDigitado, cidadeSelecionada, clearErrors]);

    
    useEffect(() => {
        if (errors.cepOption) {
            toastWarningColored(errors.cepOption.message)
        }
      }, [errors]);

    const onSubmit = (data) => {
        let filteredData;
        if (watchOption === "1") {
            const { cep, estadoCep, cidadeCep, logradouro, bairro, numero, complemento } = data;
            filteredData = { cep, estadoCep, cidadeCep, logradouro, bairro, numero, complemento };
        } else if (watchOption === "2") {
            const { estado, cidade, logradouroSemCep, bairroSemCep, numeroSemCep, complementoSemCep } = data;
            filteredData = { estado, cidade, logradouroSemCep, bairroSemCep, numeroSemCep, complementoSemCep };
        }
        atualizarForm(filteredData);
        onNext();
    };

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>

            <ToastContainer />

            <motion.div
                initial={'hidden'}
                animate={'visible'}
                variants={container}
                className='grid grid-cols-6 select-none xl:px-5'
                >

                {/*Titulo do step*/}
                <div className="container-form-head">
                    <div className="col-span-6 items-end">
                        <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                            Estamos quase lá!
                        </h1>
                    </div>
                    <p className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Agora só precisamos do seu endereço para prosseguir
                    </p>
                </div>

                {/*Opções do step*/}
                <div className="container-form-body lg:pt-20">

                    <div className="grid grid-cols-6 col-span-6 gap-2 items-center">

                        <motion.div className="col-span-3" key="comCep" variants={item}>
                            <input
                                type="radio"
                                className="hidden peer"
                                name="cepOption"
                                id="comCep"
                                value="1"
                                {...register('cepOption')}
                            />

                            <OptLabel htmlFor="comCep">
                                <div className="col-span-6 flex justify-center mb-2">
                                    <PiMapPinSimpleAreaFill className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                </div>
                                <div className="col-span-6 text-center">
                                    <p className="">
                                        Usar meu CEP
                                    </p>
                                </div>
                            </OptLabel>
                        </motion.div>

                        <motion.div className="col-span-3" key="semCep" variants={item}>
                            <input
                                type="radio"
                                className="hidden peer"
                                name="cepOption"
                                id="semCep"
                                value="2"
                                {...register('cepOption')}
                            />

                            <OptLabel htmlFor="semCep">
                                <div className="col-span-6 flex justify-center mb-2">
                                    <VscMap className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                                </div>
                                <div className="col-span-6 text-center">
                                    <p className="">
                                        Sem meu CEP
                                    </p>
                                </div>
                            </OptLabel>
                        </motion.div>
                        
                        {watchOption === "1" && (
                            <>
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    variants={container}
                                    className="lg:col-span-6 col-span-6">

                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="CEP *"
                                        inputMode="numeric"
                                        defaultValue={getValues("cep")}
                                        {...registerWithMask("cep", ['99999-999'])}
                                        onChange={handleCepChange}
                                    />
                                    {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>}
                                </motion.div>

                            </>
                        )}

                        {cepDigitado.replace("-", "").length === 8 && watchOption === "1" && (
                            <>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-3 col-span-4">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Logradouro "
                                        {...register("logradouro")}
                                    />
                                    {errors.logradouro && <p className="text-red-500 text-xs mt-1">{errors.logradouro.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-1 col-span-2">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.numero ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Nº *"
                                        {...register("numero")}
                                    />
                                    {errors.numero && <p className="text-red-500 text-xs mt-1">{errors.numero.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-2 col-span-3">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.complemento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Complemento "
                                        {...register("complemento")}
                                    />
                                    {errors.complemento && <p className="text-red-500 text-xs mt-1">{errors.complemento.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-2 col-span-3">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Bairro "
                                        {...register("bairro")}
                                    />
                                    {errors.bairro && <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-3 col-span-4">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cidadeCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Cidade *"
                                        {...register("cidadeCep")}
                                    />
                                    {errors.cidadeCep && <p className="text-red-500 text-xs mt-1">{errors.cidadeCep.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-1 col-span-2">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.estadoCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Estado *"
                                        {...register("estadoCep")}
                                    />
                                    {errors.estadoCep && <p className="text-red-500 text-xs mt-1">{errors.estadoCep.message}</p>}
                                </motion.div>

                            </>
                        )}

                        {watchOption === "2" && (
                            <>
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    variants={container}
                                    exit={{ opacity: 0 }}
                                    className="col-span-3">
                        
                                    <Controller
                                        name="estado"
                                        control={control}
                                        render={({ field }) => (
                        
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value); // Atualiza o valor do formulário
                                                    setSelectedEstado(value); // Atualiza o estado selecionado
                                                }}
                                                defaultValue={field.value}>
                        
                                                <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.estado ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
                                                    {field.value || "Selecione um estado"}
                                                </SelectTrigger>
                        
                                                <SelectContent>
                                                    {estados.map((estado) => (
                                                        <SelectItem key={estado.id || estado.sigla} value={estado.sigla}>
                                                            {estado.nome}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.estado && <p className="text-red-500 text-xs mt-1">{errors.estado.message}</p>}
                                </motion.div>
                        
                                <motion.div
                                    initial={'hidden'}
                                    animate={'visible'}
                                    variants={container}
                                    className="col-span-3">
                        
                                    <Controller
                                        name="cidade"
                                        control={control}
                                        render={({ field }) => (
                        
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                        
                                                <SelectTrigger className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cidade ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}>
                                                    {field.value || "Selecione uma cidade"}
                                                </SelectTrigger>
                        
                                                <SelectContent>
                                                    {cidades.map((cidade) => (
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
                            </>
                        )}

                        {watchOption === "2" && cidadeSelecionada && (
                            <>
                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-4 col-span-6">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouroSemCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Logradouro *"
                                        {...register("logradouroSemCep")}
                                    />
                                    {errors.logradouroSemCep && <p className="text-red-500 text-xs mt-1">{errors.logradouroSemCep.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="col-span-2">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.numeroSemCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="Nº *"
                                        {...register("numeroSemCep")}
                                    />
                                    {errors.numeroSemCep && <p className="text-red-500 text-xs mt-1">{errors.numeroSemCep.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-3 col-span-4">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.complementoSemCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Complemento "
                                        {...register("complementoSemCep")}
                                    />
                                    {errors.complementoSemCep && <p className="text-red-500 text-xs mt-1">{errors.complementoSemCep.message}</p>}
                                </motion.div>

                                <motion.div initial={'hidden'} animate={'visible'} variants={item} className="lg:col-span-3 col-span-6">
                                    <Input
                                        className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairroSemCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                        type="text"
                                        placeholder="Bairro *"
                                        {...register("bairroSemCep")}
                                    />
                                    {errors.bairroSemCep && <p className="text-red-500 text-xs mt-1">{errors.bairroSemCep.message}</p>}
                                </motion.div>
                            </>  
                        )}


                        
                    </div>
                </div>

                {/*Botões*/}
                <div className="container-form-footer">
                    <div className="col-span-2">
                        <BtnBack nome={'Voltar'} event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                    </div>

                    <div className="col-span-5">
                        <BtnNext event={handleSubmit(onSubmit)} nome={'Avançar'} type="submit" />
                    </div>
                </div>
            </motion.div>
        </form>
    );
}
