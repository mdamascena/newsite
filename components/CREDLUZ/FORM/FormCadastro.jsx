import { useState } from "react";
import Link from "next/link";
import { Input } from "components/ui/input";
import InputMask from 'react-input-mask';
import { useFormContext } from "react-hook-form";
import { PiEyeClosedBold, PiEye } from "react-icons/pi";


export default function FormCadastro() {

    // Controle de formulario react-hook-form
    const { register, formState: { errors } } = useFormContext();

    // State para definir o campo password visivel.
    const [inputSenha, setInputSenha] = useState('password');
    const [inputSenhaConfirmacao, setInputSenhaConfirmacao] = useState('password')
    const [visivelSenha, setVisivelSenha] = useState(false);
    const [visivelSenhaConfirmacao, setVisivelSenhaConfirmacao] = useState(false)

    // Função para tornar o campo password type text
    const toggleSenhaVisibility = () => {
        setVisivelSenha(!visivelSenha);

        setInputSenha(inputSenha === 'password' ? 'text' : 'password');
    }

    // Função para tornar o campo password type text
    const toggleSenhaConfirmacaoVisibility = () => {
        setVisivelSenhaConfirmacao(!visivelSenhaConfirmacao)
        setInputSenhaConfirmacao(inputSenhaConfirmacao === 'password' ? 'text' : 'password');
    }

    return (
        <div className="h-[60vh] lg:h-[80vh]">
            <div className="mb-2">
                <span className="text-slate-400 text-xl">Vamos começar!</span>
            </div>

            <h5 className="text-slate-400 mb-5 font-light lg:text-md text-sm">Crie uma senha simples para você acessar a sua proposta e acompanhar a análise</h5>

            <div className="mb-5">

                <InputMask
                    mask="999.999.999-99"
                    className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                        errors.cpf ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                    }`}
                    placeholder='Digite seu CPF'
                    inputMode='numeric'
                    maskChar = {null}
                    {...register("cpf")}>
                    {(inputProps) => <Input {...inputProps} />}
                </InputMask>

                {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
            </div>

            <div className="mb-5">
                <Input className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                        errors.nome ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                    }`}
                    placeholder="Qual o seu nome completo?"
                    {...register('nome')} />
                {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
            </div>

            <div className="mb-5">
                <Input type="email" className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                        errors.email ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                    }`}
                    placeholder="Qual o seu e-mail?"
                    {...register('email')} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <h5 className="mb-2 text-slate-400 font-light lg:text-md text-sm">Crie uma senha simples</h5>

            <div className="mb-5 flex-1 lg:flex w-100 gap-5">

                <div className="w-full mb-5">
                    <div className="relative">
                        <Input type={inputSenha} className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                            errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                        }`}
                        placeholder="Digite uma senha"
                        {...register('senha')} />

                        {visivelSenha ? (
                            <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                        ) : (
                            <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaVisibility} />
                        )}
                        
                    </div>
                    {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                </div>

                <div className="w-full">
                    <div className="relative">
                    <Input type={inputSenhaConfirmacao} className={`py-6 bg-slate-200 placeholder:text-slate-400 focus-visible:ring-blue-500 ${
                            errors.senha ? 'border-red-500 focus-visible:ring-red-500 placeholder:text-red-500 bg-red-50' : ''
                        }`}
                        {...register('senhaConfirmacao')}
                        placeholder="Confirme sua senha" />

                        {visivelSenhaConfirmacao ? (
                            <PiEye className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                        ) : (
                            <PiEyeClosedBold className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-4xl p-2 cursor-pointer' onClick={toggleSenhaConfirmacaoVisibility} />
                        )}
                    </div>
                    {errors.senhaConfirmacao && <p className="text-red-500 text-xs mt-1">{errors.senhaConfirmacao.message}</p>}
                </div>

            </div>

            <div className="mb-5">
                <input type="checkbox" id="termos" className="mr-2"  {...register('termos', { required: true })} />
                <label className='text-slate-400 mb-5 font-light lg:text-md text-sm' htmlFor="termos">
                    Li e aceito os termos de uso e política de privacidade.
                    <Link className="text-blue-400" href="#"> Ver termos de uso e política de privacidade.</Link>
                    {errors.termos && <p className="text-red-500 text-sm mt-1">{errors.termos.message}</p>}
                </label>
            </div>
        </div>
    )
}
