import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { LiaTelegramPlane } from "react-icons/lia"
import { Input } from "../../ui/input";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import InputMask from 'react-input-mask'
import { Textarea } from "../../ui/textarea"

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
    hover:bg-blue-800
    hover:scale-105
    active:scale-90 
    duration-150    
`

export default function FormFC() {

    const [selectValue, setSelectValue] = useState('');

    const handleSelectChange = (e) => {
        setSelectValue(e.target.value);
    }

    return (
         
        <div className='rounded-xl shadow-lg p-5 lg:ml-14'>
                        
            <div className="gap-y-2 grid">
                                
                <Input className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' type='' placeholder='Seu nome completo'/>
                <Input className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' type='email' placeholder='Seu e-mail'/>

                <Select className='placeholder:text-slate-400' >

                    <SelectTrigger className="bg-slate-200 text-slate-500 focus:ring-1 focus:ring-blue-500">
                        <SelectValue value={selectValue} onChange={handleSelectChange} placeholder="Escolha o assunto" />
                    </SelectTrigger>
                                    
                    <SelectContent >
                        <SelectGroup className="Poppins text-slate-400">
                            <SelectLabel>Assunto</SelectLabel>
                            <SelectItem value="quitacao">Quitação</SelectItem>
                            <SelectItem value="cancelamento">Cancelamento</SelectItem>
                            <SelectItem value="contrato">Cópia de contrato</SelectItem>
                            <SelectItem value="reclamacao">Dúvidas/Reclamações</SelectItem>
                            <SelectItem value="outros">Outros assuntos</SelectItem>
                        </SelectGroup>
                    </SelectContent>

                </Select>
        
                {(selectValue === 'quitacao' || selectValue === 'cancelamento' || selectValue === 'contrato') && (
                    <Input 
                        className='bg-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400' 
                        inputmode='numeric' 
                        type='numero' 
                        placeholder='Seu CPF'
                        value={selectValue}
                        onChange={handleSelectChange}
                    />
                ) }
                
                <h1 className="text-center p-3 tracking-tight text-blue-400 bg-blue-100 w-[50%]">
                    Diga o que deseja:
                </h1>
                
                <Textarea className='bg-slate-200 h-32 focus-visible:ring-blue-500' placeholder='Escreva aqui sua mensagem' />
                                
                <Btn className="mt-3">
                    <LiaTelegramPlane className="mr-2 text-xl" />
                    Enviar
                </Btn>
                
            </div>

        </div>

    )
}