import axios from "axios";

const DADOS_RESET_BASE_URL = "https://localhost:7286/pessoasdados";

export const getDadosResetPorCpf = (cpf) => {
    const cpfDigits = (cpf || "").replace(/\D/g, "");

    return axios
        .get(`${DADOS_RESET_BASE_URL}/${cpfDigits}`, {
            validateStatus: (status) => status < 500,
        })
        .then((res) => {
            if (res.status === 404 || res.status === 204 || res.status < 200 || res.status >= 300) {
                return null;
            }

            return res.data ?? null;
        })
        .catch((err) => {
            console.log("Erro ao consultar dados de reset por CPF", err);
            return null;
        });
};
