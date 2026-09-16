import axios from "axios";

const CREDLUZ_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "http://localhost:5033"
).replace(/\/+$/, "");

const PRE_ANALISE_URL = `${CREDLUZ_API_BASE_URL}/emprestimos-energia/preanalise`;

const isSuccessStatus = (status) => status >= 200 && status < 300;

const getErrorMessage = (data, fallbackMessage) => {
    if (typeof data === "string" && data.trim()) {
        return data;
    }

    return data?.message || data?.mensagem || data?.title || fallbackMessage;
};

const toNullableNumber = (value) => {
    if (value === undefined || value === null || value === "") {
        return null;
    }

    return Number(value);
};

const isPositiveInteger = (value) => Number.isInteger(value) && value > 0;
const isPositiveNumber = (value) => Number.isFinite(value) && value > 0;

export const criarPreAnaliseEmprestimoEnergia = async ({
    pesId,
    empPrazo,
    empValor,
    empParcela,
    ciaeId = null,
    empIdTipoOcupacao = null,
} = {}) => {
    const payload = {
        pesId: Number(pesId),
        empPrazo: Number(empPrazo),
        empValor: Number(empValor),
        empParcela: Number(empParcela),
        ciaeId: toNullableNumber(ciaeId),
        empIdTipoOcupacao: toNullableNumber(empIdTipoOcupacao),
    };

    const idsOpcionaisValidos = [payload.ciaeId, payload.empIdTipoOcupacao]
        .every((value) => value === null || isPositiveInteger(value));

    if (
        !isPositiveInteger(payload.pesId)
        || !isPositiveInteger(payload.empPrazo)
        || !isPositiveNumber(payload.empValor)
        || !isPositiveNumber(payload.empParcela)
        || !idsOpcionaisValidos
    ) {
        return {
            success: false,
            message: "Não foi possível preparar os dados da pré-análise. Revise as informações.",
        };
    }

    try {
        const response = await axios.post(PRE_ANALISE_URL, payload, {
            validateStatus: (status) => status < 500,
        });

        if (!isSuccessStatus(response.status)) {
            return {
                success: false,
                message: getErrorMessage(
                    response.data,
                    "Não foi possível criar a pré-análise. Tente novamente."
                ),
                data: response.data,
            };
        }

        return { success: true, data: response.data };
    } catch (error) {
        return {
            success: false,
            message: getErrorMessage(
                error?.response?.data,
                "Não foi possível criar a pré-análise. Tente novamente."
            ),
            data: error?.response?.data,
        };
    }
};
