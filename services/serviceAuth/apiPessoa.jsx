import axios from "axios";

const PESSOAS_BASE_URL = "https://localhost:7286/pessoas";

export const getPessoaPorCpf = (cpf) => {
    
    const cpfDigits = (cpf || "").replace(/\D/g, "");

    return axios
        .get(`${PESSOAS_BASE_URL}/${cpfDigits}`, {
            validateStatus: (status) => status < 500,
        })
        .then((res) => {
            if (res.status === 404 || res.status === 204 || res.status < 200 || res.status >= 300) {
                return null;
            }

            return res.data ?? true;
        })
        .catch((err) => {
            console.log("Erro ao consultar pessoa por CPF", err);
            return null;
        });
};
