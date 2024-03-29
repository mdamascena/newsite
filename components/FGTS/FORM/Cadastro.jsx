import { Input, Form, Checkbox } from 'antd';
import { useFormik } from 'formik';
import ValidationStepOne from '../../../schema/validationFormFgts/validateCadastro';
import { AiOutlineUser, AiOutlineCalendar, AiOutlineWhatsApp } from 'react-icons/ai';
import Btn from '../../GERAL/BUTTON/Btn'
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';

const Cadastro = () => {

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
            data: '',
            whatsapp: '',
        },
        validationSchema: ValidationStepOne,
        onSubmit: (values) => {

            const dadosUsuario = {
                name: values.name,
                cpf: values.cpf,
                data: values.data,
                whatsapp: values.whatsapp,
            };
            localStorage.setItem('etapaCadastro', JSON.stringify(dadosUsuario));
            router.push('/saque-aniversario/cadastro/dados-cadastrais')
            // Lógica para lidar com o envio do formulário
            console.log(values);
        },
    });

    return (
        <div className='p-6'>
            <div className='lg:pr-60 mb-6'>
                <span className='text-slate-400 poppins text-2xl'>Nos conte mais <span className='font-extrabold'>sobre você!</span></span>
                <div className='bg-gradient-to-r from-sky-500 to-blue-700 w-10 h-3 rounded-xl saturate-150 my-2' />
                <p className='text-slate-400 poppins py-2'>
                    Precisamos que informe alguns dados seus para confirmarmos sua identidade.
                </p>
            </div>

            <Form
                name='cadastro'
                onFinish={formik.handleSubmit}>

                <Form.Item
                    name='name'
                    validateStatus={formik.errors.name && formik.touched.name ? 'error' : ''}
                    help={formik.touched.name && formik.errors.name}
                    className='mb-5 block'
                    rules={[{ required: true, message: "Nome não foi preenchido" }]}>
                    <Input
                        name='name'
                        type='text'
                        maxLength={50}
                        showCount
                        className='text-slate-300 border-slate-300'
                        placeholder="Seu nome completo"
                        prefix={<AiOutlineUser className='text-2xl' />}
                        size="large"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Form.Item>



                <Form.Item
                    name='cpf'
                    className='mb-5 block'
                    rules={[{ required: true, message: "CPF não foi preenchido" }]}
                    validateStatus={formik.errors.cpf && formik.touched.cpf ? 'error' : ''}
                    help={formik.touched.cpf && formik.errors.cpf}>
                    <InputMask
                        mask="999.999.999-99"
                        maskChar={null}
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        {() => <Input
                            type="text"
                            name='cpf'
                            className='text-slate-300 border-slate-300'
                            size="large" placeholder="CPF"
                            prefix={<AiOutlineUser className='text-2xl' />}

                        />}
                    </InputMask>
                </Form.Item>

                <Form.Item
                    name='data'
                    className='mb-5 block'
                    rules={[{ required: true, message: "Data de nascimento não foi preenchida" }]}
                    validateStatus={formik.errors.data && formik.touched.data ? 'error' : ''}
                    help={formik.touched.data && formik.errors.data}>
                    <InputMask
                        mask="99/99/9999"
                        maskChar={null}
                        value={formik.values.data}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        {() => <Input
                            name='data'
                            type='data'
                            className='text-slate-300 border-slate-300'
                            size="large"
                            placeholder="Data de nascimento"
                            prefix={<AiOutlineCalendar className='text-2xl' />}
                        />}
                    </InputMask>
                </Form.Item>


                <Form.Item
                    name="whatsapp"
                    className='mb-7 block'
                    rules={[{ required: true, message: "Whatsapp não foi preenchido" }]}
                    validateStatus={formik.errors.whatsapp && formik.touched.whatsapp ? 'error' : ''}
                    help={formik.touched.whatsapp && formik.errors.whatsapp}>
                    <InputMask
                        mask="(99) 99999-9999"
                        maskChar={null}
                        value={formik.values.whatsapp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        {() => <Input
                            type='text'
                            name="whatsapp"
                            className='text-slate-300 border-slate-300'
                            size="large"
                            placeholder="Whatsapp"
                            prefix={<AiOutlineWhatsApp className='text-2xl' />}
                        />}
                    </InputMask>
                </Form.Item>

                <Form.Item
                    name='termos'
                    className='mb-1'
                    valuePropName="checked"
                    rules={[{ required: true, message: "É necessário aceitar o termo para continuar." }]}>
                    <Checkbox name='termos' className='poppins text-slate-400'>
                        Li e aceito os termos de uso e política de privacida de <a href="#" className='font-bold'>Termos de uso</a> e a <a href="#" className='font-bold'>Política de Privacidade da</a> aplicação.
                    </Checkbox>
                </Form.Item>

                <Form.Item
                    name="termosGoogle"
                    valuePropName="checked"
                    rules={[{ required: true, message: "É necessário aceitar o termo para continuar." }]}>
                    <Checkbox className='poppins text-slate-400 '>
                        Aceito receber conteúdos via E-mail, SMS, RCS, WhatsApp, telefone e redes sociais.
                    </Checkbox>
                </Form.Item>

                <Btn nome="Aceitar e continuar" type="submit" />

            </Form >
        </div >
    )

}

export default Cadastro;