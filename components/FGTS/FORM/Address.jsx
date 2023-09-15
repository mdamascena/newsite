import { Form, Input } from "antd";
import { useRouter } from "next/router";
import ValidationAddress from '../../../schema/validationFormFgts/validadeDadosAddress';
import axios from "axios";
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import Btn from "../../GERAL/BUTTON/Btn";
import BtnGrey from "../../GERAL/BUTTON/BtnGrey";

export default function Address() {

    const formik = useFormik({
        initialValues: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            uf: '',
            localidade: ''
        }, validationSchema: ValidationAddress,
        onSubmit: values => {
            const dadosUserCadastro = JSON.parse(localStorage.getItem('etapaCadastro'));
            const dadosAddress = {
                cep: values.cep,
                logradouro: values.logradouro,
                numero: values.numero,
                complemento: values.complemento,
                bairro: values.bairro,
                uf: values.uf,
                localidade: values.localidade
            }

            const dadosCompleto = { ...dadosUserCadastro, ...dadosAddress };
            localStorage.setItem('etapaCadastro', JSON.stringify(dadosCompleto))
            console.log(values);
        },
    })

    const handleCepChange = async (value) => {
        if (value.length === 9) {
            formik.setFieldValue('cep', value);
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${value}/json`);
                const { logradouro, bairro, uf, localidade } = response.data;
                formik.setFieldValue('cep', value);
                formik.setFieldValue('logradouro', logradouro);
                formik.setFieldValue('bairro', bairro);
                formik.setFieldValue('uf', uf);
                formik.setFieldValue('localidade', localidade);
            } catch (error) {
                console.error('Erro ao buscar CEP:', error);
            }
        }
    };

    const router = useRouter();
    const handleRoute = () => {
        router.push('/saque-aniversario/cadastro/dados-cadastrais')
    }

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-[18px] lg:text-[24px]">Quase lá! Precisamos de mais algumas informações para concluir</h1>
            </div>

            <Form
                onFinish={formik.handleSubmit}
                initialValues={formik}
                name="address"
                layout="vertical"
                className="mb-5">

                <div className="lg:flex">
                    <Form.Item
                        className="lg:mr-5 lg:w-[50%]"
                        validateStatus={formik.errors.cep && formik.touched.cep ? 'error' : ''}
                        help={formik.touched.cep && formik.errors.cep}>
                        <InputMask
                            mask="99999-999"
                            maskChar={null}
                            value={formik.values.cep}
                            onChange={(e) => {
                                handleCepChange(e.target.value)
                                formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}>
                            {() => <Input

                                name='cep'
                                type="text"
                                placeholder="CEP"
                                size="large"
                                className='border-slate-300 '
                            />}
                        </InputMask>
                    </Form.Item>

                    <Form.Item
                        className=" lg:w-[50%]"
                        validateStatus={formik.errors.logradouro && formik.touched.logradouro ? 'error' : ''}
                        help={formik.touched.logradouro && formik.errors.logradouro}>
                        <Input
                            name='logradouro'
                            type="text"
                            placeholder="Logradouro"
                            size="large"
                            className='border-slate-300'
                            value={formik.values.logradouro}
                            onChange={formik.handleChange}
                        >
                        </Input>
                    </Form.Item>
                </div>

                <div className="lg:flex">
                    <Form.Item
                        className="lg:mr-5 lg:w-[50%]"
                        validateStatus={formik.errors.numero && formik.touched.numero ? 'error' : ''}
                        help={formik.touched.numero && formik.errors.numero}>
                        <Input
                            name='numero'
                            type="text"
                            placeholder="Numero"
                            size="large"
                            className='border-slate-300'
                            value={formik.values.numero}
                            onChange={formik.handleChange}>

                        </Input>
                    </Form.Item>

                    <Form.Item
                        className=" lg:w-[50%]">
                        <Input
                            name='complemento'
                            type="text"
                            placeholder="Complemento"
                            size="large"
                            className='border-slate-300'
                            value={formik.values.complemento}
                            onChange={formik.handleChange}
                        >
                        </Input>
                    </Form.Item>
                </div>

                <div className="lg:flex">
                    <Form.Item
                        className="lg:mr-5 lg:w-[50%]"
                        validateStatus={formik.errors.bairro && formik.touched.bairro ? 'error' : ''}
                        help={formik.touched.bairro && formik.errors.bairro}>
                        <Input
                            name='bairro'
                            type="text"
                            placeholder="Bairro"
                            size="large"
                            className=' border-slate-300'
                            value={formik.values.bairro}
                            onChange={formik.handleChange}>
                        </Input>
                    </Form.Item>

                    <Form.Item
                        className=" lg:w-[50%]"
                        validateStatus={formik.errors.uf && formik.touched.uf ? 'error' : ''}
                        help={formik.touched.uf && formik.errors.uf}>
                        <Input
                            name='uf'
                            type="text"
                            placeholder="UF"
                            size="large"
                            className='border-slate-300 '
                            value={formik.values.uf}
                            onChange={formik.handleChange}>
                        </Input>
                    </Form.Item>
                </div>

                <Form.Item
                    validateStatus={formik.errors.localidade && formik.touched.localidade ? 'error' : ''}
                    help={formik.touched.localidade && formik.errors.localidade}>
                    <Input
                        type="text"
                        name='localidade'
                        placeholder="Cidade"
                        size="large"
                        className=' border-slate-300'
                        value={formik.values.localidade}
                        onChange={formik.handleChange}>
                    </Input>
                </Form.Item>


                <div className="flex">
                    <div className="mr-3 w-[50%]">
                        <button onClick={handleRoute} type="button" className="bg-slate-500 text-white rounded-xl py-[10px] w-full focus:outline-nonefocus:bg-slate-700 hover:bg-slate-400hover:ring-offset-0hover:ring-2hover:ring-slate-200 duration-100 saturate-150">
                            Voltar
                        </button>
                    </div>

                    <div className="w-[50%]">
                        <Btn nome="Concluir" type="submit" />
                    </div>
                </div>

            </Form>
        </div>
    )
}