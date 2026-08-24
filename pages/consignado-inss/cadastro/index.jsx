import Head from 'next/head';
import { useState } from 'react';
import BaseForm from '../../../components/geral/form/BaseForm';
import { FormConsignado } from '../../../components/consignado/form/FormConsignado';
import { FormDataProvider } from '../../../context/FormContext';

export default function Cadastro() {
    const [stepInfo, setStepInfo] = useState({});

    return (
        <>
            <Head>
                <title>Empréstimo Consignado INSS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                stepInfo={stepInfo}
                steps={
                    <FormDataProvider>
                        <FormConsignado setStepInfo={setStepInfo} />
                    </FormDataProvider>
                }
            />
        </>
    );
}
