import axios from "axios";

const IBGE_LOCALIDADES_BASE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades";

export const getEstado = () => {
    return axios.get(`${IBGE_LOCALIDADES_BASE_URL}/estados`)
        .then(res => {return res.data;})
        .catch(err => {console.log('Erro', err)})
}

export const getCidade = (uf) => {
    return axios.get(`${IBGE_LOCALIDADES_BASE_URL}/estados/${uf}/municipios`)
        .then(res => {return res.data;})
        .catch(err => {console.log('Erro', err)})
}
