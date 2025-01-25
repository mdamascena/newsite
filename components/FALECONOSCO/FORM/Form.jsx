import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Btn } from '../STYLES';
import { LiaTelegramPlane } from "react-icons/lia"
import { Input } from "../../ui/input";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import InputMask from 'react-input-mask'
import { Textarea } from "../../ui/textarea"
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    subject: z.string().nonempty('O assunto é obrigatório'),
    nome: z.string().nonempty('O nome é obrigatório'),
    email: z.string().email('Digite um e-mail válido'),
    cpf: z.string().optional().refine(
        (cpf) => {
          if (!cpf) return true;
          return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
        },
        { message: 'CPF inválido' }
      ),
    message: z.string().nonempty('A mensagem é obrigatória'),
  });

export default function FormFC() {

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({resolver: zodResolver(schema)})
    
    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
      
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
            } else {
              alert('Erro ao enviar a mensagem.');
            }
            } 
          
        catch (error) {
            console.error('Erro no envio:', error);
          }
    };

    const selectValue = watch('subject');

    return (
         
        <div className='rounded-xl shadow-lg p-5 lg:ml-14'>
                        
            <form onSubmit={handleSubmit(onSubmit)} className="gap-y-2 grid" >

                <Select className='placeholder:text-slate-400'  {...register('subject')} onValueChange={(value) => setValue('subject', value)} >
                    <SelectTrigger className="bg-slate-200 text-slate-500 focus:ring-1 focus:ring-blue-500">
                        <SelectValue placeholder="Escolha o assunto" />
                    </SelectTrigger>
                                    
                    <SelectContent >
                        <SelectGroup className="text-slate-400">
                            <SelectLabel>Selecione o assunto</SelectLabel>
                            <SelectItem value="quitacao">Quitação</SelectItem>
                            <SelectItem value="cancelamento">Cancelamento</SelectItem>
                            <SelectItem value="contrato">Cópia de contrato</SelectItem>
                            <SelectItem value="reclamacao">Dúvidas/Reclamações</SelectItem>
                            <SelectItem value="outros">Outros assuntos</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
                                
                <Input 
                    className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                    type='text' 
                    placeholder='Seu nome completo'
                    {...register('nome')}
                />
                {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
                
                <Input 
                    className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' 
                    type='email' 
                    placeholder='Seu e-mail'
                    {...register('email')}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                
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
                                {...register('cpf')}>
                                
                                {(inputProps) => <Input {...inputProps} />}
                            </InputMask>

                        </motion.div>
                    ) }
                </AnimatePresence>
                {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
                
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