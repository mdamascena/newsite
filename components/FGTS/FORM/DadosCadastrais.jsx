import { Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import Router, { useRouter } from "next/router";
import ValidationDadosCadastrais from "../../../schema/validationFormFgts/validadeDadosCadastrais"
import InputMask from 'react-input-mask';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { FiUsers } from "react-icons/fi"
import Btn from "../../GERAL/BUTTON/Btn";
import BtnGrey from "../../GERAL/BUTTON/BtnGrey";



export default function DadosCadastrais() {

    const [formData, setFormData] = useState({});

    const router = useRouter();

    const handleRoute = () => {
        router.push('/saque-aniversario/cadastro')
    }

    useEffect(() => {
        const dadosUser = JSON.parse(localStorage.getItem('etapaCadastro'));
        if (dadosUser) {
            formik.initialValues.cpfPix = dadosUser.cpf
            console.log(dadosUser.cpf)
        }
    }, []);


    const { Option } = Select;

    const formik = useFormik({
        initialValues: {
            estadoCivil: '',
            rg: '',
            nomeMae: '',
            email: '',
            pix: '',
            telPix: '',
            cpfPix: '',
            emailPix: ''

        }, validationSchema: ValidationDadosCadastrais,
        onSubmit: values => {
            // Lógica para lidar com o envio do formulário
            console.log(values);
            const dadosUser = JSON.parse(localStorage.getItem('etapaCadastro'));
            const dadosUserCadastro = {
                estadoCivil: values.estadoCivil,
                rg: values.rg,
                nomeMae: values.nomeMae,
                email: values.email,
                pix: values.pix,
                telPix: values.telPix,
                cpfPix: values.cpfPix,
                emailPix: values.emailPix
            }
            const novoDadosCadastro = { ...dadosUser, ...dadosUserCadastro };
            localStorage.setItem('etapaCadastro', JSON.stringify(novoDadosCadastro));
            router.push('/saque-aniversario/cadastro/dados-address');

        },
    });


    return (
        <div className="p-6">
            <div>
                <h1 className="text-[16px] lg:text-[24px]">Quase lá! Precisamos de mais algumas informações para poder prosseguir</h1>
            </div>

            <Form
                onFinish={formik.handleSubmit}
                className="mt-6"
                name="dadosCadastrais"
                layout="vertical">

                <div className="lg:flex">

                    <Form.Item
                        className="lg:mr-5 lg:w-[30%]"
                        name="estadoCivil"
                        rules={[{ required: true, message: "Escolha uma opção" }]}>
                        <Select
                            placeholder="Estado Civil"
                            size="large"
                            onChange={(value) => formik.setFieldValue('estadoCivil', value)}
                            onBlur={formik.handleBlur}
                            value={formik.values.estadoCivil}>

                            <Option value="1">Casado(a)</Option>
                            <Option value="2">Solteiro(a)</Option>
                            <Option value="3">Viúvo(a)</Option>
                            <Option value="4">Separado(a)</Option>
                            <Option value="5">Divorciado(a)</Option>
                            <Option value="6">União Estável</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        className="lg:w-[70%]"
                        name="rg"
                        rules={[{ required: true, message: "RG não foi preenchido" }]}>
                        <Input
                            type="number"
                            name="rg"
                            className='text-slate-300 border-slate-300'
                            placeholder="Número do RG"
                            size="large"
                            prefix={<AiOutlineUser className='text-2xl' />}
                            value={formik.values.rg}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>

                        </Input>
                    </Form.Item>

                </div>

                <Form.Item
                    name="nomeMae"
                    rules={[{ required: true, message: "Nome da mãe não foi preenchido" }]}
                    validateStatus={formik.errors.nomeMae && formik.touched.nomeMae ? 'error' : ''}
                    help={formik.touched.nomeMae && formik.errors.nomeMae}
                >
                    <Input
                        type="text"
                        name="nomeMae"
                        className=' text-slate-300 border-slate-300 '
                        placeholder="Nome completo da mãe"
                        size="large"
                        prefix={<FiUsers className='text-2xl' />}
                        value={formik.values.nomeMae}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>

                    </Input>
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "E-mail não foi preenchido" }]}>
                    <Input
                        type="email"
                        name="email"
                        className='text-slate-300 border-slate-300'
                        placeholder="Email para contato"
                        size="large"
                        prefix={<AiOutlineMail className='text-2xl' />}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>

                    </Input>
                </Form.Item>

                <Form.Item
                    name="pix"
                    label="Informe sua chave PIX para receber o valor do seu contrato"
                    rules={[{ required: true, message: "Escolha uma opção para pagamento" }]}
                >

                    <Select
                        placeholder="Pix"
                        size="large"
                        value={formik.values.pix}
                        onChange={(value) => formik.setFieldValue('pix', value)}
                        onBlur={formik.handleBlur}>

                        <Option value="cpfPix">CPF</Option>
                        <Option value="telPix">Telefone</Option>
                        <Option value="emailPix">Email</Option>
                    </Select>
                </Form.Item>



                {formik.values.pix === 'cpfPix' && (
                    <Form.Item
                        rules={[{ required: true, message: "Chave Pix não preenchida" }]}
                    >
                        <Input
                            type="text"
                            name='cpfPix'
                            placeholder="Digite sua chave pix"
                            size="large"
                            disabled
                            value={formik.values.cpfPix}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />


                    </Form.Item>
                )}

                {formik.values.pix === 'telPix' && (
                    <Form.Item
                        name="telPix"
                        rules={[{ required: true, message: "Chave Pix não preenchida" }]}
                    >

                        <InputMask
                            mask="(99) 99999-9999"
                            maskChar={null}
                            value={formik.values.telPix}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>

                            {() => <Input
                                type="text"
                                name='telPix'
                                placeholder="Digite sua chave pix"
                                size="large"
                            />}
                        </InputMask>
                    </Form.Item>
                )}
                {formik.values.pix === 'emailPix' && (
                    <Form.Item
                        name="emailPix"
                        rules={[{ required: true, message: "Chave Pix não preenchida" }]}>
                        <Input
                            name="emailPix"
                            type="email"
                            placeholder="Digite sua chave pix"
                            size="large"
                            value={formik.values.emailPix}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                        </Input>
                    </Form.Item>
                )}

                <div className="lg:flex">

                    <div className="lg:w-[50%] lg:mr-2 mb-1 lg:mb-0">
                        <button onClick={handleRoute} type="button" className="bg-slate-500 text-white rounded-xl py-[10px] w-full focus:outline-nonefocus:bg-slate-700 hover:bg-slate-400hover:ring-offset-0hover:ring-2hover:ring-slate-200 duration-100 saturate-150">
                            Voltar
                        </button>
                    </div>

                    <div className="lg:w-[50%]">
                        <Btn nome="Prosseguir" type="submit" />
                    </div>

                </div>
            </Form>
        </div >
    )
}