import axios from "axios";

export const getEnderecoCep = (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => { return res.data;})
        .catch (err => {console.log('Erro', err)})
}

export const getEstado = () => {
    return axios.get('https:servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => {return res.data;})
        .catch(err => {console.log('Erro', err)})
}

export const getCidade = (uf) => {
    return axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(res => {return res.data;})
        .catch(err => {console.log('Erro', err)})
}