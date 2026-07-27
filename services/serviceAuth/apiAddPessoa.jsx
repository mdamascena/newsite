import axios from "axios";

const AUTH_API_BASE_URL = (
    process.env.NEXT_PUBLIC_AUTH_API_BASE_URL || "https://localhost:7210"
).replace(/\/+$/, "");

const PESSOAS_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "https://localhost:7286"
).replace(/\/+$/, "");

const AUTH_REGISTER_URL = `${AUTH_API_BASE_URL}/auth/register`;
const PESSOAS_URL = `${PESSOAS_API_BASE_URL}/pessoas`;

const isSuccessStatus = (status) => status >= 200 && status < 300;
const onlyDigits = (value) => String(value || "").replace(/\D/g, "");

const getErrorMessage = (data, fallbackMessage) => (
    data?.message || data?.mensagem || data?.title || fallbackMessage
);

const formatDateForApi = (value) => {
    const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

    if (!match) {
        return "";
    }

    const [, day, month, year] = match;
    return `${year}-${month}-${day}`;
};

export const registrarUsuario = async ({ cpf, senha } = {}) => {
    try {
        const response = await axios.post(
            AUTH_REGISTER_URL,
            {
                cpf: onlyDigits(cpf),
                password: senha || "",
            },
            { validateStatus: (status) => status < 500 }
        );

        if (!isSuccessStatus(response.status)) {
            return {
                success: false,
                message: getErrorMessage(response.data, "Não foi possível criar sua conta. Tente novamente."),
            };
        }

        return { success: true, data: response.data };
    } catch {
        return {
            success: false,
            message: "Não foi possível criar sua conta. Tente novamente.",
        };
    }
};

export const adicionarPessoa = async (formData = {}) => {
    const idCidade = Number(formData.cidadeIbgeId);
    const dataNascimento = formatDateForApi(formData.dataNascimento);
    const logradouro = formData.logradouro || formData.logradouroSemCep || "";
    const numero = formData.numero || formData.numeroSemCep || "";
    const bairro = formData.bairro || formData.bairroSemCep || "";

    if (!Number.isInteger(idCidade) || idCidade <= 0 || !dataNascimento) {
        return {
            success: false,
            message: "Não foi possível preparar os dados do cadastro. Revise suas informações.",
        };
    }

    const payload = {
        pessoa: {
            cpf: onlyDigits(formData.cpf),
            dataNascimento,
            nome: formData.nome || "",
            genero: String(formData.genero ?? ""),
            email: formData.email || "",
            celular: onlyDigits(formData.celular),
        },
        endereco: {
            logradouro,
            numero: String(numero),
            bairro,
            idCidade,
            cep: onlyDigits(formData.cep),
        },
    };

    try {
        const response = await axios.post(PESSOAS_URL, payload, {
            validateStatus: (status) => status < 500,
        });

        if (!isSuccessStatus(response.status)) {
            return {
                success: false,
                message: getErrorMessage(response.data, "Não foi possível finalizar seu cadastro. Tente novamente."),
            };
        }

        return { success: true, data: response.data };
    } catch {
        return {
            success: false,
            message: "Não foi possível finalizar seu cadastro. Tente novamente.",
        };
    }
};
