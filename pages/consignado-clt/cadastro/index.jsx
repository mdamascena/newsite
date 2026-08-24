import Head from "next/head";
import { useState } from "react";
import { FormCLT } from "../../../components/clt/form";
import BaseForm from "../../../components/geral/form/BaseForm";
import { FormDataProvider } from "../../../context/FormContext";

export default function CadastroCLT() {
    const [stepInfo, setStepInfo] = useState({});

    return (
        <>
            <Head>
                <title>Empréstimo Consignado CLT</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                stepInfo={stepInfo}
                steps={
                    <FormDataProvider>
                        <FormCLT setStepInfo={setStepInfo} />
                    </FormDataProvider>
                }
            />
        </>
    );
}
