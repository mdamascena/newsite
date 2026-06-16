import Head from 'next/head';
import { useState } from 'react';
import { FormDataProvider } from '../../../context/FormContext';
import BaseForm from '../../../components/geral/form/BaseForm';
import { FormCLT } from '../../../components/clt/form';

export default function CadastroCLT() {

    const [copyTitleChart, setCopyTitleChart] = useState([]);
    const [countProgress, setCountProgress] = useState(0);
    const [copyTitulo, setCopyTitulo] = useState([]);
    const [copyDescricao, setCopyDescricao] = useState([]);
    const [copyStepCurrent, setCopyStepCurrent] = useState([]);

    return (
        <>
            <Head>
                <title>Empréstimo Consignado CLT</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <BaseForm
                copyTitleChart={copyTitleChart}
                stepCurrent={copyStepCurrent}
                titleText={copyTitulo}
                descriptionText={copyDescricao}
                progress={countProgress}
                steps={
                    <FormDataProvider>
                        <FormCLT
                            setTitleChart={setCopyTitleChart}
                            setStepCurrent={setCopyStepCurrent}
                            setProgressChange={setCountProgress}
                            setTitleText={setCopyTitulo}
                            setDescriptionText={setCopyDescricao}
                        />
                    </FormDataProvider>
                }
            />
        </>
    );
}
