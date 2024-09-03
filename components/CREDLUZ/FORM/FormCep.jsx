import { Controller, useFormContext } from 'react-hook-form';
import { Input } from 'components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "components/ui/select";
import { Card, CardContent } from 'components/ui/card';
import { useState, useEffect } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { LuMapPinOff } from "react-icons/lu"
import InputMask from 'react-input-mask';
import { DialogCep } from '../DIALOG/DialogCep';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2"
import { Button } from "components/ui/button"

export default function FormCep({ onNext, backStep }) {

    const { setValue, control, formState: { errors } } = useFormContext();

    const [comCep, setComCep] = useState(false);
    const [semCep, setSemCep] = useState(false);
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [selectedEstado, setSelectedEstado] = useState('');
    const [cep, setCep] = useState('');

    const [dialogOpen, setDialogOpen] = useState(false)

    function handleComCep() {
        setComCep(true)
        setSemCep(false)
    };

    function hadleSemCep() {
        setComCep(false)
        setSemCep(true)
    };

    useEffect(() => {
        if (cep.length === 9 || semCep) {
            fetch('https:servicodados.ibge.gov.br/api/v1/localidades/estados')
                .then((res) => res.json())
                .then((data) => setEstados(data))
                .catch((error) => console.error('Erro ao buscar estados:', error));
        }
    }, [cep, semCep]);

    useEffect(() => {
        if (selectedEstado) {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedEstado}/municipios`)
                .then((res) => res.json())
                .then((data) => setCidades(data))
                .catch((error) => console.error('Erro ao buscar cidades:', error));
        }
    }, [selectedEstado]);

    useEffect(() => {
        if (comCep && cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => res.json())
                .then((data) => {
                    if (!data.erro) {
                        setValue('cep', data.cep)
                        setSelectedEstado(data.uf);
                        setValue('uf', data.uf);
                        setValue('cidade', data.localidade);
                        setValue('logradouro', data.logradouro)
                        setValue('bairro', data.bairro)

                        console.log('Dados do CEP:', {
                            cep: data.cep,
                            uf: data.uf,
                            cidade: data.localidade,
                            logradouro: data.logradouro,
                            bairro: data.bairro,
                        });
                    } else {
                        console.log('Erro ao buscar CEP');
                    }
                })
                .catch((error) => console.error('Erro na requisição:', error));
        }
    }, [cep, comCep, setValue, setSelectedEstado]);

    const handleNext = () => {
        console.log('Chamando onNext');
        onNext();
    };

    return (
        <div className='h-[60vh] lg:h-[80vh] grid items-center'>

            <div className=''>

                <div className='flex gap-5 mb-5 '>

                    <div onClick={handleComCep} className='w-full cursor-pointer'>
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center h-full p-4">
                                <FaMapLocationDot className='text-6xl text-blue-500 mb-5 ' />
                                <h5 className='text-slate-600'>Usar meu CEP</h5>
                            </CardContent>
                        </Card>
                    </div>

                    <div onClick={hadleSemCep} className='w-full cursor-pointer'>
                        <Card >
                            <CardContent className="flex flex-col items-center justify-center h-full p-4">
                                <LuMapPinOff className='text-6xl text-red-500 mb-5' />
                                <h5 className='text-slate-600'>Não sei meu CEP</h5>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            {comCep &&
                <div>
                    <InputMask
                        mask="99999-999"
                        className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${errors.cep ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                            }`}
                        placeholder='Digite seu CEP'
                        inputMode='numeric'
                        maskChar={null}
                        value={cep}
                        onChange={(e) => {
                            const value = e.target.value;
                            setCep(value);
                            if (value.length === 9) {
                                setValue('cep', value);
                            }
                        }}>

                        {(inputProps) => <Input {...inputProps} />}
                    </InputMask>
                    {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep.message}</p>}
                </div>
            }

            {semCep &&
                <div className='flex gap-5'>

                    <div className="w-full">
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
                                        {estados.map((estado) => (
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

                    <div className='w-full'>
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
                                        {cidades.map((cidade) => (
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

            }
            <div>

                <button type='button' onClick={() => setDialogOpen(true)}>Abrir dialog</button>

                <DialogCep open={dialogOpen} onOpenChange={setDialogOpen} />
            </div>

            <div className="mt-5 gap-5 flex align-middle">
                <div>
                    <HiOutlineArrowLongLeft className='text-5xl text-black cursor-pointer' onClick={backStep} />
                </div>

                <div className="w-full">
                    <HiOutlineArrowLongRight className='text-5xl text-black cursor-pointer' onClick={onNext} />
                </div>
            </div>

        </div>
    );
}