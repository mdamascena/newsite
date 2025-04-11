import { useEffect, useState } from "react";
import { useFormData } from "context/FormContext";
import { motion } from "framer-motion";
import { container } from "shared/motionUtils/motionTransation";
import { IoIosArrowBack } from "react-icons/io";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";

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
        <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 xl:px-7">
            <h1>Aqui está um resumo do seu pedido</h1>
            <h2>Verifique se está tudo correto antes de prosseguir</h2>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 xl:px-7">
            <h3>Dados pessoais</h3>
            <ul>
                <li><strong>Nome Completo:</strong> {formData.nome}</li>
                <li><strong>CPF:</strong> {formData.cpf}</li>
                <li><strong>RG:</strong> {formData.registroGeral}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Celular:</strong> {formData.celular}</li>
                <li><strong>Nome da Mãe:</strong> {formData.nomeMae}</li>
                <li><strong>Gênero:</strong> {formData.genero == 0 ? "Masculino" : "Feminino"}</li>
            </ul>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 xl:px-7">
            <h3>Endereço</h3>
            <ul>
                <li><strong>CEP:</strong> {formData.cepOption == "2" ? "CEP não informado" : formData.cep}</li>
                <li><strong>Logradouro:</strong> {formData.cepOption == "1" ? formData.logradouro : formData.logradouroSemCep}</li>
                <li><strong>Número:</strong> {formData.cepOption == "1" ? formData.numero : formData.numeroSemCep}</li>
                <li><strong>Estado:</strong> {formData.cepOption == "1" ? formData.estadoCep : formData.estado}</li>
                <li><strong>Cidade:</strong> {formData.cepOption == "1" ? formData.cidadeCep : formData.cidade}</li>
                <li><strong>Complemento:</strong> {formData.complemento == "" ? "Complemento não informado" : formData.complemento}</li>
            </ul>
        </motion.div>

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
