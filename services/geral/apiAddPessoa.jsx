import axios from "axios";

const AUTH_API_BASE_URL = (
    process.env.NEXT_PUBLIC_AUTH_API_BASE_URL || "http://localhost:5132"
).replace(/\/+$/, "");

const PESSOAS_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "http://localhost:5033"
).replace(/\/+$/, "");

const AUTH_REGISTER_URL = `${AUTH_API_BASE_URL}/auth/register`;
const PESSOAS_URL = `${PESSOAS_API_BASE_URL}/pessoas`;

const isSuccessStatus = (status) => status >= 200 && status < 300;
const onlyDigits = (value) => String(value || "").replace(/\D/g, "");

const getErrorMessage = (data, fallbackMessage) => {
    if (typeof data === "string" && data.trim()) {
        return data;
    }

    return data?.message || data?.mensagem || data?.title || fallbackMessage;
};

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
    const cpf = onlyDigits(formData.cpf);
    const nome = formData.nome || "";
    const email = formData.email || "";
    const celular = onlyDigits(formData.celular);
    const genero = String(formData.genero ?? "");
    const logradouro = formData.logradouro || formData.logradouroSemCep || "";
    const numero = formData.numero || formData.numeroSemCep || "";
    const bairro = formData.bairro || formData.bairroSemCep || "";
    const cep = onlyDigits(formData.cep);
    const pessoaIdExistente = Number(formData.pessoaId);

    if (
        !Number.isInteger(idCidade)
        || idCidade <= 0
        || !dataNascimento
        || !cpf
        || !nome
        || !email
        || !celular
        || !genero
        || !logradouro
        || !numero
        || !bairro
    ) {
        return {
            success: false,
            message: "Não foi possível preparar os dados do cadastro. Revise suas informações.",
        };
    }

    const pessoaPayload = {
        cpf,
        dataNascimento,
        nome,
        email,
        celular,
    };

    const enderecoPayload = {
        genero,
        logradouro,
        numero: String(numero),
        bairro,
        idCidade,
        cep,
    };

    let pessoaId = Number.isInteger(pessoaIdExistente) && pessoaIdExistente > 0
        ? pessoaIdExistente
        : null;
    let pessoaCriada = null;

    try {
        if (!pessoaId) {
            const response = await axios.post(PESSOAS_URL, pessoaPayload, {
                validateStatus: (status) => status < 500,
            });

            if (!isSuccessStatus(response.status)) {
                return {
                    success: false,
                    message: getErrorMessage(
                        response.data,
                        "Não foi possível cadastrar seus dados pessoais. Tente novamente."
                    ),
                    data: response.data,
                };
            }

            pessoaCriada = response.data;
            pessoaId = Number(response.data?.pesId ?? response.data?.PesId);

            if (!Number.isInteger(pessoaId) || pessoaId <= 0) {
                return {
                    success: false,
                    message: "A pessoa foi cadastrada, mas a API não retornou seu identificador.",
                    data: response.data,
                };
            }
        }

        const responseEndereco = await axios.put(
            `${PESSOAS_URL}/${pessoaId}`,
            enderecoPayload,
            { validateStatus: (status) => status < 500 }
        );

        if (!isSuccessStatus(responseEndereco.status)) {
            return {
                success: false,
                pessoaId,
                message: getErrorMessage(
                    responseEndereco.data,
                    "Seus dados pessoais foram cadastrados, mas não foi possível salvar o endereço. Tente novamente."
                ),
                data: responseEndereco.data,
            };
        }

        return { success: true, pessoaId, data: pessoaCriada };
    } catch (error) {
        return {
            success: false,
            pessoaId,
            message: getErrorMessage(
                error?.response?.data,
                pessoaId
                    ? "Seus dados pessoais foram cadastrados, mas não foi possível salvar o endereço. Tente novamente."
                    : "Não foi possível cadastrar seus dados pessoais. Tente novamente."
            ),
            data: error?.response?.data,
        };
    }
};
