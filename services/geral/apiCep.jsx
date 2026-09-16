import axios from "axios";

export const getEnderecoCep = (cep) => {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => { return res.data;})
        .catch (err => {console.log('Erro', err)})
}
