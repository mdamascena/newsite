import * as Yup from 'yup';

function validateFullName(value) {
    if (!value) return false;

    // Quebra o nome em partes usando espaços como delimitadores
    const parts = value.trim().split(' ');

    // Verifica se há pelo menos um nome e um sobrenome
    if (parts.length < 2) return false;

    // Verifica se o primeiro nome tem mais de 2 caracteres
    return parts[0].length > 2;
}

function validatePhoneNumber(value) {
    if (!value) return false;
    if (value.length < 15) return false;
    if (value.length === 15) {
        return value[5] === '9';
    }
    return true;
}

const schema = Yup.object().shape({
    nomeMae: Yup.string().test('valid-nome', 'Nome inválido', validateFullName).required('Nome completo é obrigatório'),
    /*telPix: Yup.string().when('pix', {
        is: (value) => value === 'telPix',
        then: Yup.string()
            .test('valid-telefone', 'Número de telefone inválido', validatePhoneNumber)
            .required('Número de telefone é obrigatório'),
    }),*/

});

export default schema