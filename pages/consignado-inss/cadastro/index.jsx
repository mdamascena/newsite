import Head from 'next/head'
import { useState } from "react"
import { FormDataProvider } from "../../../context/FormContext"
import BaseForm from "../../../components/geral/form/BaseForm"
import { FormConsignado } from "../../../components/consignado/form/FormConsignado"

export default function Cadastro() {

    const [countProgress, setCountProgress] = useState(0)
    const [copyTitulo, setCopyTitulo] = useState([]);
    const [copyDescricao, copySetDescricao] = useState([]);
    const [copyStepCurrent, setCopyStepCurrent] = useState([])

    return (
        <>
            <Head>
                <title>Empréstimo Consignado INSS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <BaseForm
                stepCurrent={copyStepCurrent}
                titulo={copyTitulo}
                descricao={copyDescricao}
                progress={countProgress}
                
                steps={
                    <FormDataProvider>
                        <FormConsignado 
                            setStepCurrent={setCopyStepCurrent}
                            setProgressChange={setCountProgress}
                            setTitulo={setCopyTitulo} 
                            setDescricao={copySetDescricao}
                        />
                    </FormDataProvider>
                }
            />
        </>
    )
}