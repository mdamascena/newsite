import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader} from "../../ui/dialog_closeWhite"
import { Input } from "../../ui/input"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../../ui/selectFC"
import InputMask from 'react-input-mask'
import { Textarea } from "../../ui/textarea"
import tw from 'tailwind-styled-components'
import { LiaTelegramPlane } from "react-icons/lia"

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

export default function ModalFaleConosco(){
    
    return(
        <DialogContent className='sm:max-w-[500px] p-0 border-0'>
            
            <DialogHeader closed={false} className='bg-gradient-to-r from-blue-950 to-blue-800 saturate-150 rounded-t-md p-4'>
                <h1 className='text-white text-xl'>Fale conosco</h1>
                <DialogDescription className='text-blue-200 mt-0'>
                    Opá, diga o que precisa!
                </DialogDescription>
                
            </DialogHeader>

            <div className="mx-2 gap-y-2 grid p-3">
                <Input className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' type='' placeholder='Seu nome completo'/>
                
                <Input className='bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500' type='email' placeholder='Seu e-mail'/>

                <Select className='focus-visible:ring-blue-500 placeholder:text-slate-400'>

                    <SelectTrigger className="bg-slate-200 text-slate-500">
                        <SelectValue placeholder="Escolha o assunto" />
                    </SelectTrigger>
                    
                    <SelectContent>
                        <SelectGroup className="text-slate-400">
                            <SelectLabel>Assunto</SelectLabel>
                            <SelectItem value="quitacao">Quitação</SelectItem>
                            <SelectItem value="cancelamentos">Cancelamentos</SelectItem>
                            <SelectItem value="contrato">Cópia de contrato</SelectItem>
                            <SelectItem value="reclamacao">Dúvidas/Reclamações</SelectItem>
                            <SelectItem value="outros">Outros assuntos</SelectItem>
                        </SelectGroup>
                    </SelectContent>

                </Select>

                <Input className='bg-slate-200 focus-visible:ring-blue-500 placeholder:text-slate-400' type='numero' placeholder='Seu CPF'/>
                
                <h1 className="text-center p-3 tracking-tight text-slate-400">
                    Diga o que deseja:
                </h1>
                
                <Textarea className='bg-slate-200 h-56' placeholder='Escreva aqui sua mensagem' />
                
                <DialogFooter>
                    <Btn className="mt-3">
                        <LiaTelegramPlane className="mr-2 text-xl" />
                        Enviar
                    </Btn>
                </DialogFooter>
            </div>
            
           
            
            
            
        </DialogContent>
    )
}