import { useEffect, useState } from "react";
import { useFormData } from "context/FormContext";
import { motion } from "framer-motion";
import { container } from "shared/motionUtils/motionTransation";
import { IoIosArrowBack } from "react-icons/io";
import BtnNext from "../../geral/button/BtnBlueNext";
import BtnBack from "../../geral/button/BtnBlueBack";

export default function ResumoFgts({ onNext, backStep }) {

    const { atualizarForm, formData } = useFormData()

    const [ nomeBanco, setNomeBanco ] = useState('')
    const [ chavePix, setChavePix ] = useState('');

    const bancos = {
        "0": "237 - Banco Bradesco",
        "1": "341 - Banco Itaú",
        "2": "033 - Banco Santander",
        "3": "001 - Banco do Brasil",
        "4": "104 - Caixa Econômica Federal",
    };

    const chavesPix = {
        "0": formData.chaveCpf,
        "1": formData.chaveCel,
        "2": formData.chaveEmail,
    };

    useEffect(() => {
        setNomeBanco(bancos[formData.banco] || "Banco não informado");
    }, [formData.banco]);

    useEffect(() => {
        setChavePix(chavesPix[formData.pix] || "Chave PIX não informada");
    }, [formData.pix]);

    const onSubmit = (data) => {
        atualizarForm(data);
        onNext();
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-6 xl:px-7">
            <h1>Aqui está um resumo do seu pedido</h1>
            <h2>Verifique se está tudo correto antes de prosseguir</h2>

            <ul>
                <li><strong>Nome Completo:</strong> {formData.nome}</li>
                <li><strong>CPF:</strong> {formData.cpf}</li>
                <li><strong>RG:</strong> {formData.registroGeral}</li>
                <li><strong>Email:</strong> {formData.email}</li>
                <li><strong>Celular:</strong> {formData.celular}</li>
                <li><strong>Nome da Mãe:</strong> {formData.nomeMae}</li>
                <li><strong>Gênero:</strong> {formData.genero == 0 ? "Masculino" : "Feminino"}</li>
            </ul>

            <ul>
                <li><strong>CEP:</strong> {formData.cepOption == "2" ? "CEP não informado" : formData.cep}</li>
                <li><strong>Logradouro:</strong> {formData.cepOption == "1" ? formData.logradouro : formData.logradouroSemCep}</li>
                <li><strong>Número:</strong> {formData.cepOption == "1" ? formData.numero : formData.numeroSemCep}</li>
                <li><strong>Estado:</strong> {formData.cepOption == "1" ? formData.estadoCep : formData.estado}</li>
                <li><strong>Cidade:</strong> {formData.cepOption == "1" ? formData.cidadeCep : formData.cidade}</li>
                <li><strong>Complemento:</strong> {formData.complemento == "" ? "Complemento não informado" : formData.complemento}</li>
            </ul>

            <ul>
                <li><strong>Banco:</strong> {nomeBanco}</li>
                <li><strong>Chave Pix:</strong> {chavePix}</li>
            </ul>

            <div className="container-form-footer">
                <div className="col-span-2">
                    <BtnBack nome="Voltar" event={backStep} iconLeft={<IoIosArrowBack className="lg:mr-3 mr-1" />} />
                </div>
                <div className="col-span-5">
                    <BtnNext event={onSubmit} nome="Avançar" type="submit" />
                </div>
            </div>
        </motion.div>
    );
}
