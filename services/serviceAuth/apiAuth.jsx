import axios from "axios";

const AUTH_LOGIN_URL = "https://localhost:7210/auth/login";

export const loginAuth = ({ cpf, senha }) => {
    const cpfDigits = (cpf || "").replace(/\D/g, "");

    return axios
        .post(
            AUTH_LOGIN_URL,
            {
                cpf: cpfDigits,
                password: senha,
            },
            {
                validateStatus: (status) => status < 500,
            }
        )
        .then((res) => {
            if (res.status < 200 || res.status >= 300) {
                return {
                    success: false,
                    message: res.data?.message || res.data?.mensagem || "CPF ou senha inválidos",
                    data: res.data,
                };
            }

            return {
                success: true,
                data: res.data,
            };
        })
        .catch((err) => {
            console.log("Erro ao autenticar pessoa", err);

            return {
                success: false,
                message: "Não foi possível acessar sua conta no momento",
            };
        });
};
