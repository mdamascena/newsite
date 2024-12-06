import { useEffect, useState } from 'react';
import { useFormContext, Controller } from "react-hook-form";
import { useFormData } from "../../../context/FormContext";
import { useHookFormMask } from "use-mask-input";
import { Input } from "components/ui/input";
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaRegTimesCircle } from "react-icons/fa";
import { getCidade, getEnderecoCep, getEstado } from '../../../services/servicesCredLuz/apiCep';
import { Select, SelectTrigger, SelectContent, SelectItem } from "components/ui/select";
import BtnNext from '../BUTTON/BtnBlueNext'
import BtnBack from '../BUTTON/BtnBlueBack'
import { IoIosArrowBack } from "react-icons/io"
import { toast, ToastContainer } from "react-toastify"

export default function FormEndereco({ onNext, backStep }) {

    const { control, handleSubmit, watch, register, getValues, setValue, formState: { errors } } = useFormContext();
    const { atualizarForm, formData } = useFormData();
    const registerWithMask = useHookFormMask(register);

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);

    const [selectedOption, setSelectedOption] = useState("");
    const [cepDigitado, setCepDigitado] = useState("");
    const [selectedEstado, setSelectedEstado] = useState("");
    const cidadeSelecionada = watch("cidade");

    const [showAddressFields, setShowAddressFields] = useState(false);

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    //Busca o endereço de acordo com o CEP digitado.
    const handleCepChange = (e) => {
        const cep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        setCepDigitado(cep);

        if (cep.length === 8) {
            getEnderecoCep(cep)
                .then((data) => {
                    if (data && !data.erro) {
                        setValue("estadoCep", data.estado);
                        setValue("cidadeCep", data.localidade);
                        setValue("logradouro", data.logradouro);
                        setValue("bairro", data.bairro);
                        setShowAddressFields(true);
                    } else if (data && data.erro) {
                        setShowAddressFields(true);
                        toast.warn("CEP não encontrado. Digite seu endereço!", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "colored",
                        });
                    }
                })
                .catch((err) => {
                    toast.error("Erro ao buscar o endereço. Digite seu endereço!", {
                        position: "top-right",
                        autoClose: 5000,
                        type: "error",
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "light",
                    });
                });
        }
    };

    //Se a opção for SemCep, faz a requisição buscando estados.
    useEffect(() => {
        if (selectedOption === "2") {
            getEstado()
                .then((data) => {
                    setEstados(data)
                    console.log(estados)
                })
                .catch((e) => console.log(e))
        }
    }, [selectedOption])

    //Resetar o campo cidade caso troque de estado e faz a requisição novamente.
    useEffect(() => {
        if (selectedEstado !== "") {
            setValue("cidade", "");
            getCidade(selectedEstado)
                .then((data) => setCidades(data))
                .catch((e) => console.error("Erro ao buscar cidades:", e));
        }

    }, [selectedEstado, setValue, selectedOption]);

    //Resetar os campos caso troque de modal "ComCep" || "SemCep"
    useEffect(() => {
        if(selectedOption === "1" || selectedEstado === "2"){
            setValue("cep", "")
            setValue("estado", "")
            setValue("cidade", "")
            setValue("logradouro", "")
            setValue("numero", "")
            setValue("complemento", "")
            setValue("bairro", "")

            setValue("estadoCep", "")
            setValue("cidadeCep", "")
        }
    }, [selectedOption])

    

    //Mostra Logradouro, Bairro, Numero e Complemento, dependendo da condição implementada.
    useEffect(() => {
        if (selectedOption === "2" && cidadeSelecionada) {
            setShowAddressFields(true);
        } if (selectedOption === "1" && cepDigitado.length === 8) {
            setShowAddressFields(true);
        } if (selectedOption === "1" || "2" && cidadeSelecionada === "") {
            setShowAddressFields(false)
            setValue("logradouro", "")
            setValue("numero", "")
            setValue("complemento", "")
            setValue("bairro", "")
        }
    }, [getValues, selectedOption, cidadeSelecionada, cepDigitado]);


    const onSubmit = (data) => {
        let filteredData;
        if (selectedOption === "1") {
            const { cep, estadoCep, cidadeCep, logradouro, bairro, numero, complemento } = data;
            filteredData = { cep, estadoCep, cidadeCep, logradouro, bairro, numero, complemento };
        } else if (selectedOption === "2") {
            const { estado, cidade, logradouro, bairro, numero, complemento } = data;
            filteredData = { estado, cidade, logradouro, bairro, numero, complemento };
        }
        console.log("Dados enviados:", filteredData);
        atualizarForm(filteredData);
        onNext();
    };

    const OptLabel = tw(motion.label)`
        bg-white
        grid
        grid-cols-6
        p-3
        lg:py-4
        items-center 
        justify-center 
        text-slate-400 
        shadow-md
        rounded-md
        cursor-pointer
        duration-100
        hover:ring-2
        hover:ring-blue-500
        hover:bg-blue-100
        hover:text-blue-500
        peer-checked:bg-blue-600 
        peer-checked:text-white
        peer-checked:shadow-nome
    `;

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <form className="lg:min-h-[100vh] lg:overflow-y-hidden" onSubmit={handleSubmit(onSubmit)}>

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
            
            <div className="container-form-body">
                <div className="grid grid-cols-6 col-span-6 gap-3 items-center">
                    <motion.div className="col-span-3" key="comCep" variants={item}>
                        <input
                            type="radio"
                            className="hidden peer"
                            name="cepOption"
                            value="1"
                            id="comCep"
                            {...register("cepOption")}
                            onChange={handleRadioChange}
                        />
                        <OptLabel htmlFor="comCep">
                            <div className="lg:col-span-6 col-span-2 flex justify-center lg:mb-2">
                                <FaMapMarkedAlt className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                            </div>
                            <div className="lg:col-span-6 col-span-4 lg:text-center text-end">
                                <p className="font-semibold">
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
                            value="2"
                            id="semCep"
                            {...register("cepOption")}
                            onChange={handleRadioChange}
                        />
                        <OptLabel htmlFor="semCep">
                            <div className="lg:col-span-6 col-span-2 flex justify-center lg:mb-2">
                                <FaRegTimesCircle className="text-5xl p-2 bg-blue-500 rounded-md text-white" />
                            </div>
                            <div className="lg:col-span-6 col-span-4 lg:text-center text-end">
                                <p className="font-semibold">
                                    Sem meu CEP
                                </p>
                            </div>
                        </OptLabel>
                    </motion.div>

                    {errors.cepOption && (<p className="text-red-500 text-xs mt-1 col-span-6">{errors.cepOption.message}</p>)}

                    {selectedOption === "1" && (
                        <>
                            <div className="lg:col-span-6 col-span-6">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="CEP *"
                                    {...registerWithMask("cep", ['99999-999'])}
                                    onChange={handleCepChange}
                                />
                                {errors.cep && <p className="text-red-500 text-xs mt-1">{errors.cep.message}</p>}
                            </div>
                        </>
                    )}

                    {selectedOption === "2" && (
                        <>
                            <div className="lg:col-span-3 col-span-6">
                                <Controller
                                    name="estado"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value); // Atualiza o valor do formulário
                                                setSelectedEstado(value); // Atualiza o estado selecionado
                                            }}
                                            defaultValue={field.value}
                                        >
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
                            </div>

                            <div className="lg:col-span-3 col-span-6">
                                <Controller
                                    name="cidade"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
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
                            </div>
                        </>
                    )}

                    {showAddressFields && (
                        <>
                            {cepDigitado.length === 8 && selectedOption === "1" && (
                                <>
                                    <div className="lg:col-span-3 col-span-6">
                                        <Input
                                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.estado ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                            type="text"
                                            placeholder="Estado *"
                                            {...register("estadoCep")}
                                        />
                                        {errors.cidadeCep && <p className="text-red-500 text-xs mt-1">{errors.cidadeCep.message}</p>}
                                    </div>

                                    <div className="lg:col-span-3 col-span-6">
                                        <Input
                                            className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cidadeCep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                            type="text"
                                            placeholder="Cidade *"
                                            {...register("cidadeCep")}
                                        />
                                        {errors.cidadeCep && <p className="text-red-500 text-xs mt-1">{errors.cidadeCep.message}</p>}
                                    </div>
                                </>
                            )}
                            <div className="lg:col-span-3 col-span-6">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.logradouro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="Logradouro "
                                    {...register("logradouro")}
                                />
                                {errors.logradouro && <p className="text-red-500 text-xs mt-1">{errors.logradouro.message}</p>}
                            </div>

                            <div className="lg:col-span-3 col-span-6">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.numero ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="Numero "
                                    {...register("numero")}
                                />
                                {errors.numero && <p className="text-red-500 text-xs mt-1">{errors.numero.message}</p>}
                            </div>

                            <div className="lg:col-span-3 col-span-6">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.bairro ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="Bairro "
                                    {...register("bairro")}
                                />
                                {errors.bairro && <p className="text-red-500 text-xs mt-1">{errors.bairro.message}</p>}
                            </div>

                            <div className="lg:col-span-3 col-span-6">
                                <Input
                                    className={`py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.complemento ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''}`}
                                    type="text"
                                    placeholder="Complemento "
                                    {...register("complemento")}
                                />
                                {errors.complemento && <p className="text-red-500 text-xs mt-1">{errors.complemento.message}</p>}
                            </div>
                        </>
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
            </div>
        </form>
    );
}
