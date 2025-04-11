import { useEffect, useState } from "react";
import { useFormData } from "context/FormContext";
import { motion } from "framer-motion";
import { container } from "shared/motionUtils/motionTransation";
import { IoIosArrowBack } from "react-icons/io";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";
import { LuPencil } from "react-icons/lu";

export default function ResumoCredLuz({ onNext, backStep }) {

    const { atualizarForm, formData } = useFormData()

    const onSubmit = (data) => {
        onNext();
    };

    useEffect(() => {
        console.log("FormData", formData);
    }, [])
    
    return (
        <>
            <div className="grid grid-cols-6 col-span-6">
                <motion.div initial="hidden" animate="visible" variants={container} className="container-form-head col-span-6">
                    <h1 className="text-blue-600 text-xl font-semibold tracking-tight">
                        Resumo
                    </h1>
                    <h2 className="col-span-6 text-slate-400 font-light lg:text-md text-sm">
                        Aqui está um resumo dos dados que você informou. Verifique se está tudo correto antes de prosseguir
                    </h2>
                </motion.div>
                
                <motion.div initial="hidden" animate="visible" variants={container} className="container-form-body col-span-6">
                        
                    <div className="text-slate-400  bg-white shadow-md rounded-xl relative p-4 col-span-6 grid grid-cols-6">
                        
                        <h3 className=" bg-blue-600 text-white absolute -top-[10px] left-4 px-3 text-sm col-span-6 rounded-lg w-40">Dados pessoais</h3>
                        
                        <LuPencil className="absolute text-lg right-3 top-3 cursor-pointer"/>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">
                            <div className="mb-2">
                                <span className="block text-xs text-blue-400">Nome:</span> 
                                {formData.nome}
                            </div>
                                
                            <div className="lg:mb-0 mb-2">
                                <span className="block text-xs text-blue-400">CPF:</span> 
                                {formData.cpf}
                            </div> 
                        </div>

                        <div className="text-sm lg:col-span-3 col-span-6 text-slate-400">

                            <div className="mb-2">
                                <span className="block text-xs text-blue-400">E-mail:</span> 
                                {formData.email}
                            </div>
                            <div className="">
                                <span className="block text-xs text-blue-400">Celular:</span> 
                                {formData.celular}
                            </div> 
                            
                            {/* <li><strong>Gênero:</strong> {formData.genero == 0 ? "Masculino" : "Feminino"}</li> */}
                        </div>   
                        
                    </div>
                        
                    <div className="text-slate-400  bg-white shadow-md rounded-xl relative p-4 col-span-6 grid grid-cols-6 mt-4">
                        <h3 className=" bg-blue-400 text-white absolute -top-[10px] left-4 px-3 text-sm col-span-6 rounded-lg w-40">Endereço</h3>
                        <ul className="text-sm col-span-3 text-black">

                            <li className="mb-2">
                                <span className="block text-[10px] text-slate-400">CEP</span> 
                                {formData.cep}
                            </li>
                            <li className="mb-2">
                                <span className="block text-[10px] text-slate-400">Logradouro</span> 
                                {formData.cepOption == "1" ? formData.logradouro : formData.logradouroSemCep}, {formData.numero}
                            </li>
                            <li className="mb-2">
                                <span className="block text-[10px] text-slate-400">Complemento</span> 
                                {formData.complemento}
                            </li>
                            {/* <li><strong>Logradouro:</strong> {formData.cepOption == "1" ? formData.logradouro : formData.logradouroSemCep}</li> */}
                            {/* <li><strong>Número:</strong> {formData.cepOption == "1" ? formData.numero : formData.numeroSemCep}</li> */}
                        
                        </ul>
                        <ul className="text-sm col-span-3 text-black">

                            <li className="mb-2">
                                <span className="block text-[10px] text-slate-400">Estado</span> 
                                {formData.estado}                            
                            </li>
                            {/* <li><strong>Estado:</strong> {formData.cepOption == "1" ? formData.estadoCep : formData.estado}</li> */}
                            <li className="mb-2">
                                <span className="block text-[10px] text-slate-400">Cidade</span> 
                                {formData.cidade}
                            </li>
                            {/* <li><strong>Cidade:</strong> {formData.cepOption == "1" ? formData.cidadeCep : formData.cidade}</li> */}
                            {/* <li><strong>Complemento:</strong> {formData.complemento == "" ? "Complemento não informado" : formData.complemento}</li> */}
                        </ul>
                    </div>
                </motion.div>     
            </div>

            <div className="container-form-footer">
                <div className="col-span-2">
                    <BtnBack nome="Voltar" event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                </div>
                <div className="col-span-5">
                    <BtnNext event={onSubmit} nome="Avançar" type="submit" />
                </div>
            </div>
        </>
    );
}
