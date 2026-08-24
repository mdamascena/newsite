import Head from 'next/head';
import { useState } from 'react';
import BaseForm from '../../components/geral/form/BaseForm';
import { FormPrincipal } from '../../components/principal/form/FormPrincipal';
import { FormDataProvider } from '../../context/FormContext';

export default function Cadastro() {
    const [stepInfo, setStepInfo] = useState({});

    return (
        <>
            <Head>
                <title>Cadastro</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                stepInfo={stepInfo}
                steps={
                    <FormDataProvider>
                        <FormPrincipal setStepInfo={setStepInfo} />
                    </FormDataProvider>
                }
            />
        </>
    );
}
