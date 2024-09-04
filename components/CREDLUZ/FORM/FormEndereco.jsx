import { useEffect, useState } from "react"
import { Controller } from 'react-hook-form';
import { useFormDataLuz } from "../../../context/FormContextLuz";
import { useFormContext } from "react-hook-form";
import InputMask from 'react-input-mask';


export default function FormEndereco({ onNext }) {

    const { atualizarForm } = useFormDataLuz();
    const { control, handleSubmit, setValue, formState: { errors } } = useFormContext({});
    const [mostrarSelect, setMostrarSelect] = useState(false);
    const [uf, setUf] = useState([]);
    const [cidade, setCidade] = useState([]);
    const [selectedUf, setSelectedUf] = useState('');

    useEffect(() => {
        fetch('https:servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => setUf(data))
            .catch(error => console.log('Erro ao buscar UF', error))
    }, [])

    useEffect(() => {
        if (selectedUf) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
                .then(response => response.json())
                .then(data => setCidade(data))
                .catch(error => console.log('Erro ao buscar cidades', error))
        }
    }, [selectedUf])

    const handleSpanClick = () => {
        setMostrarSelect(prevState => !prevState);
    };

    const fetchEndereco = async (cep) => {
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if(data.uf && data.localidade){
                    setValue("uf", data.uf);
                    setValue("cidade", data.localidade);
                    setSelectedUf(data.uf)
                }
            })
            .catch(error => console.log("Erro ao buscar dados de endereço", error))
    }

    const onSubmit = (data) => {
        if(!mostrarSelect){
            if(data.cep){
                const cepLimpo = data.cep.replace(/\D/g, '');
                fetchEndereco(cepLimpo)
            }
        }
        atualizarForm(data)
        console.log('Dados enviados:', data);
        onNext()
    };

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {!mostrarSelect && (
                    <div>
                        <h3>Digite seu CEP</h3>
                        <Controller
                            name="cep"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'CEP é obrigatório',
                                pattern: {
                                    value: /^\d{5}-\d{3}$/,
                                    message: 'CEP inválido'
                                }
                            }}
                            render={({ field }) => (
                                <InputMask
                                    {...field}
                                    mask="99999-999"
                                    className={`py-2 px-3 bg-slate-200 placeholder:text-slate-400 border ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : 'border-gray-300 focus-visible:ring-blue-500'}`}
                                    placeholder='Digite seu CEP'
                                    inputMode='numeric'
                                    maskChar={null}
                                />
                            )}
                        />
                        {errors.cep && (<p className="text-red-500 text-sm">{errors.cep.message}</p>)}
                        <button type="Submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Avançar</button>
                        <h4>Não sabe seu CEP ? <span onClick={handleSpanClick} className="text-blue-500 cursor-pointer underline">Clique aqui!</span></h4>
                    </div>
                )}


                {mostrarSelect && (

                    <div className="mt-4">
                        <h3>Selecione seu Estado e sua Cidade</h3>
                        <Controller
                            name="uf"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <label htmlFor="uf">UF</label>
                                    <select
                                        id="uf"
                                        className="block mt-1 p-2 border border-gray-300"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            setSelectedUf(e.target.value);
                                        }}
                                    >
                                        <option value="">Selecione a UF</option>
                                        {uf.map(estado => (
                                            <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>
                                        ))}
                                    </select>
                                </>
                            )}
                        />

                        <Controller
                            name="cidade"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <>
                                    <label htmlFor="cidade" className="block mt-4">Cidade</label>
                                    <select
                                        id="cidade"
                                        className="block mt-1 p-2 border border-gray-300"
                                        {...field}
                                    >
                                        <option value="">Selecione a Cidade</option>
                                        {cidade.map(city => (
                                            <option key={city.id} value={city.nome}>{city.nome}</option>
                                        ))}
                                    </select>
                                </>
                            )}
                        />
                        <button type="Submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">Enviar</button>
                        <h4 onClick={handleSpanClick} className="text-blue-500 cursor-pointer underline">Quero preencher com CEP</h4>
                    </div>
                )}
            </form>
        </div>
    )
}