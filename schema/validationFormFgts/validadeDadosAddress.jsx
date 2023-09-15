import * as Yup from "yup"

const schema = Yup.object().shape({
    cep: Yup.string().required('CEP é obrigatório'),
    logradouro: Yup.string().required('Logradouro é obrigatório'),
    numero: Yup.string().required('Número é obrigatório'),
    bairro: Yup.string().required('Bairro é obrigatório'),
    uf: Yup.string().required('UF é obrigatória'),
    localidade: Yup.string().required('Cidade é obrigatória'),
    // ... outros campos do formulário  
});

export default schema;