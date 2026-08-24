import Head from "next/head";
import { useState } from "react";
import BaseForm from "../../../components/geral/form/BaseForm";
import { FormRefinAuto } from "../../../components/refinauto/form";
import { FormDataProvider } from "../../../context/FormContext";

export default function CadastroRefinAuto() {
    const [stepInfo, setStepInfo] = useState({});

    return (
        <>
            <Head>
                <title>Refinanciamento de veículo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                stepInfo={stepInfo}
                steps={
                    <FormDataProvider>
                        <FormRefinAuto setStepInfo={setStepInfo} />
                    </FormDataProvider>
                }
            />
        </>
    );
}
