import { useEffect, useState } from "react";
import { useFormData } from "context/FormContext";
import { motion } from "framer-motion";
import { container } from "shared/motionUtils/motionTransation";
import { IoIosArrowBack } from "react-icons/io";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { LuPencil } from "react-icons/lu";
import tw from "tailwind-styled-components";

const LSpan = tw.span`
    block 
    text-xs 
    text-blue-400
`
  
export default function ResumoCredLuz({ onNext, backStep }) {

    const { atualizarForm, formData } = useFormData()

    function onSubmit(data){
        onNext();
    }

    useEffect(() => {
        console.log("FormData", formData);
    }, [])
    
    return (
        <div className="lg:min-h-[100vh]">

            {/*Titulo do step*/}
            <div className="container-form-head">
                <motion.div initial="hidden" animate="visible" variants={container} className="col-span-6">
                    <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                        Confirmação
                    </h1>
                    <h2 className="col-span-6 text-slate-400 font-light lg:text-base text-sm">
                        Verifique se está tudo correto antes de prosseguir
                    </h2>
                </motion.div>
            </div>

            {/* Formulário de resumo */}
            <div className=" container-form-body">

                <motion.div initial="hidden" animate="visible" variants={container} className="col-span-6">
                    
                    <div className="text-slate-400 bg-white shadow-md rounded-xl relative p-4 col-span-6 grid grid-cols-6">
                        <h3 className="bg-blue-600 text-white absolute -top-[10px] left-4 px-3 text-sm col-span-6 rounded-lg w-40">
                            Dados pessoais
                        </h3>
                        
                        <LuPencil className="absolute text-lg right-3 top-3 cursor-pointer"/>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">
                            <div className="mb-2">
                                <LSpan>Nome</LSpan> 
                                {formData.nome}
                            </div>
                                
                            <div className="lg:mb-0 mb-2">
                                <LSpan>CPF</LSpan> 
                                {formData.cpf}
                            </div> 
                        </div>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">

                            <div className="mb-2">
                                <LSpan>E-mail</LSpan> 
                                {formData.email}
                            </div>
                            <div className="">
                                <LSpan>Celular</LSpan> 
                                {formData.celular}
                            </div> 
                            
                        </div>   
                        
                    </div>
                        
                    <div className="text-slate-400  bg-white shadow-md rounded-xl relative p-4 col-span-6 grid grid-cols-6 mt-6">
                        <h3 className="bg-blue-600 text-white absolute -top-[10px] left-4 px-3 text-sm col-span-6 rounded-lg w-40">
                            Endereço
                        </h3>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">

                            {formData.cep?.trim() && (
                                <div className="mb-2">
                                    <LSpan>CEP</LSpan>
                                    {formData.cep}
                                </div>
                            )}
                            <div className="">
                                <LSpan>Logradouro</LSpan> 
                                {formData.logradouro ? formData.logradouro : formData.logradouroSemCep}, {formData.numero ? formData.numero : formData.numeroSemCep}
                            </div>
                            {(formData.complemento || formData.complementoSemCep) && (
                                <div>
                                    <LSpan>Complemento</LSpan>
                                    {formData.complemento ? formData.complemento : formData.complementoSemCep}
                                </div>
                            )}
                        
                        </div>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">

                            <div className="mb-2">
                                <LSpan>Estado</LSpan>
                                {formData.estadoCep ? formData.estadoCep : formData.estado}                            
                            </div>
                            
                            <div className="">
                                <LSpan>Cidade</LSpan> 
                                {formData.cidadeCep ? formData.cidadeCep : formData.cidade}
                            </div>
                            
                        </div>
                    </div>

                    <div className="text-slate-400  bg-white shadow-md rounded-xl relative p-4 col-span-6 grid grid-cols-6 mt-6">
                        <h3 className="bg-blue-600 text-white absolute -top-[10px] left-4 px-3 text-sm col-span-6 rounded-lg w-40">
                            Perfil
                        </h3>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">
                            <div className="mb-2">
                                <LSpan>Gênero</LSpan> 
                                {(() => {
                                    const generoMap = {
                                        0: "Masculino",
                                        1: "Feminino",
                                        2: "Outros",
                                        3: "Não informar"
                                    };
                                    return generoMap[formData.genero];
                                })()}
                            </div>

                            <div className="">
                                <LSpan>Ocupação</LSpan> 
                                {(() => {
                                    const ocupacaoMap = {
                                        1: "Assalariado",
                                        2: "Servidor Público",
                                        3: "Autônomo"
                                    };
                                    return ocupacaoMap[formData.tipoOcupacao];
                                })()}
                            </div>
                        </div>
                        
                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">
                            <div className="mb-2">
                                <LSpan>Titular da conta de luz</LSpan> 
                                {(() => {
                                    const titulaMap = {
                                        0: "Sim",
                                        1: "Não"
                                    };
                                    return titulaMap[formData.titularCia];
                                })()}
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

            {/*Botões*/}
            <div className="container-form-footer">
                <div className="col-span-2">
                    <BtnBack nome="Voltar" event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                </div>
                <div className="col-span-5">
                    <BtnNext event={onSubmit} nome="Avançar" type="submit" />
                </div>
            

            </div>
        </div>
    );
}
