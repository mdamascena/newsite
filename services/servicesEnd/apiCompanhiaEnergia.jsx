import axios from "axios";

const CREDLUZ_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "https://localhost:7286"
).replace(/\/+$/, "");

const COMPANHIAS_CIDADE_BASE_URL = `${CREDLUZ_API_BASE_URL}/companhias-cidade`;

export const CIAE_ID_STORAGE_KEY = "ciaeId";

const isSuccessStatus = (status) => status >= 200 && status < 300;

const getResponsePayload = (response) => response?.data ?? response;

const normalizarCompanhiasDaCidade = (response) => {
    const payload = getResponsePayload(response);
    const companhias = Array.isArray(payload) ? payload : payload ? [payload] : [];
    const idsAdicionados = new Set();

    return companhias.reduce((resultado, companhia) => {
        const ciaeId = companhia?.idCompanhia;
        const ciaeDescricao = companhia?.nomeCompanhia?.trim();

        if (ciaeId === undefined || ciaeId === null || !ciaeDescricao) {
            return resultado;
        }

        const idNormalizado = String(ciaeId);

        if (idsAdicionados.has(idNormalizado)) {
            return resultado;
        }

        idsAdicionados.add(idNormalizado);
        resultado.push({ ciaeId, ciaeDescricao });
        return resultado;
    }, []);
};

export const getCompanhiasEnergiaPorCidade = async ({ cidadeIbgeId } = {}) => {
    if (!cidadeIbgeId) {
        return [];
    }

    const response = await axios.get(
        `${COMPANHIAS_CIDADE_BASE_URL}/${encodeURIComponent(String(cidadeIbgeId))}`,
        { validateStatus: (status) => status < 500 }
    );

    if (response.status === 204 || response.status === 404) {
        return [];
    }

    if (!isSuccessStatus(response.status)) {
        throw new Error(`Erro ${response.status} ao consultar as companhias da cidade.`);
    }

    return normalizarCompanhiasDaCidade(response.data);
};
