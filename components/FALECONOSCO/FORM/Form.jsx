import { useState } from 'react'
import { useForm } from "react-hook-form"
import tw from 'tailwind-styled-components'
import { LiaTelegramPlane } from "react-icons/lia"
import { Input } from "../../ui/input";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import InputMask from 'react-input-mask'
import { Textarea } from "../../ui/textarea"
import { motion, AnimatePresence } from 'framer-motion'
import * as yup from 'yup'

const Btn = tw.button`
    bg-blue-600
    saturate-150
    flex 
    items-center 
    justify-center
    text-white
    w-full
    lg:py-4
    py-3
    lg:px-5 
    rounded-md
    active:bg-blue-900
    hover:bg-blue-500
    hover:scale-105
    active:scale-90 
    duration-150    
`

export default function FormFC() {

    const schema = yup.object().shape({
        nome: yup.string().required('O nome é obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    });

    const MeuFormulario = () => {
        const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})
    }
      
    const onSubmit = (data) => {
        console.log(data);
    }

    const [selectValue, setSelectValue] = useState('')
    const [nome, setNome] = useState('');

    const handleSelectChange = (value) => {
        setSelectValue(value);
        console.log(value)
    }

    return (
         
        <div className='rounded-xl shadow-lg p-5 lg:ml-14'>
                        
            <form className="gap-y-2 grid" >

                <Select className='placeholder:text-slate-400' value={selectValue} onValueChange={handleSelectChange} >

                    <SelectTrigger className="bg-slate-200 text-slate-500 focus:ring-1 focus:ring-blue-500">
                        <SelectValue placeholder="Escolha o assunto" />
                    </SelectTrigger>
                                    
                    <SelectContent >
                        <SelectGroup className="Poppins text-slate-400">
                            <SelectLabel>Selecione o assunto</SelectLabel>
                            <SelectItem value="quitacao">Quitação</SelectItem>
                            <SelectItem value="cancelamento">Cancelamento</SelectItem>
                            <SelectItem value="contrato">Cópia de contrato</SelectItem>
                            <SelectItem value="reclamacao">Dúvidas/Reclamações</SelectItem>
                            <SelectItem value="outros">Outros assuntos</SelectItem>
                        </SelectGroup>
                    </SelectContent>

                </Select>
                                
                <Input 
                    className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                    type='text' 
                    placeholder='Seu nome completo'
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)}
                />
                
                <Input className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' type='email' placeholder='Seu e-mail'/>
                
                <AnimatePresence>
                    {(selectValue === 'quitacao' || selectValue === 'cancelamento' || selectValue ==='contrato') && (
                        <motion.div
                            initial={ {scale: 0} }
                            animate={ {scale: 1 }}
                            transition={{type: "spring", stiffness: 260, damping: 20}}
                            exit={ {scale: 0 }}>
                            
                            <InputMask 
                                className='bg-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400' 
                                mask="999.999.999-99"
                                maskChar = {null}
                                placeholder='Seu CPF'
                                inputMode='numeric'>

                                {(inputProps) => <Input {...inputProps} />}
                            </InputMask>

                        </motion.div>
                    ) }
                </AnimatePresence>
                
                <h1 className="text-center p-3 tracking-tight text-slate-400">
                    Diga o que deseja:
                </h1>
                
                <Textarea className='bg-slate-200 h-32 focus-visible:ring-blue-500' placeholder='Escreva aqui sua mensagem' />
                                
                <Btn className="mt-3" onClick={()=>{console.log(selectValue)}}>
                    <LiaTelegramPlane className="mr-2 text-xl" />
                    Enviar
                </Btn>
                
            </form>

        </div>

    )
}