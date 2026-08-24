import Head from "next/head";
import { useState } from "react";
import { FormFgts } from "../../../components/fgts/form";
import BaseForm from "../../../components/geral/form/BaseForm";
import { FormDataProvider } from "../../../context/FormContext";

export default function Cadastro() {
    const [stepInfo, setStepInfo] = useState({});

    return (
        <>
            <Head>
                <title>Empréstimo Saque Aniversário</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                stepInfo={stepInfo}
                steps={
                    <FormDataProvider>
                        <FormFgts setStepInfo={setStepInfo} />
                    </FormDataProvider>
                }
            />
        </>
    );
}
