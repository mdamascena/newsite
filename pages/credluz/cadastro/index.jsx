import Head from 'next/head'
import { useEffect, useState } from "react"
import { FormProviderLuz } from "../../../context/FormContextLuz"
import { FormCredLuz } from "../../../components/CREDLUZ/FORM"
import BaseForm from "../../../components/GERAL/FORM/BaseForm"

export default function IndexFormCredLux() {

    const [countProgress, setCountProgress] = useState(0)
    const [copyTitulo, setCopyTitulo] = useState([]);
    const [copyDescricao, copySetDescricao] = useState([]);
    const [copyStepCurrent, setCopyStepCurrent] = useState([])

    return (
        <>
            <Head>
                <title>Empréstimo na conta de luz</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <BaseForm
                stepCurrent={copyStepCurrent}
                titulo={copyTitulo}
                descricao={copyDescricao}
                progress={countProgress}
                
                steps={
                    <FormProviderLuz>
                        <FormCredLuz 
                            setStepCurrent={setCopyStepCurrent}
                            setProgressChange={setCountProgress}
                            setTitulo={setCopyTitulo} 
                            setDescricao={copySetDescricao}
                        />
                    </FormProviderLuz>
                }
                
            />

        </>
    );
}
