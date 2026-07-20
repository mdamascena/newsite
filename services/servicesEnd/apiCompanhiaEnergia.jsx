import axios from "axios";

const CREDLUZ_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "https://localhost:7286"
).replace(/\/+$/, "");

const COMPANHIAS_CIDADE_BASE_URL = `${CREDLUZ_API_BASE_URL}/companhias-cidade`;
const COMPANHIAS_BASE_URL = `${CREDLUZ_API_BASE_URL}/companhias`;

export const CIAE_ID_STORAGE_KEY = "ciaeId";

const isSuccessStatus = (status) => status >= 200 && status < 300;

const getResponsePayload = (response) => response?.data ?? response;

export const normalizarCompanhiasEnergia = (response) => {
    const payload = getResponsePayload(response);
    const companhias = Array.isArray(payload) ? payload : payload ? [payload] : [];
    const idsAdicionados = new Set();

    return companhias.filter((companhia) => {
        const ciaeId = companhia?.ciaeId;
        const estaAtiva = String(companhia?.ciaeAtivo ?? "1") === "1";

        if (ciaeId === undefined || ciaeId === null || !companhia?.ciaeDescricao || !estaAtiva) {
            return false;
        }

        const idNormalizado = String(ciaeId);

        if (idsAdicionados.has(idNormalizado)) {
            return false;
        }

        idsAdicionados.add(idNormalizado);
        return true;
    });
};

const normalizarVinculosCidade = (response) => {
    const payload = getResponsePayload(response);
    const vinculos = Array.isArray(payload) ? payload : payload ? [payload] : [];

    return [...new Set(
        vinculos
            .map((vinculo) => vinculo?.ciaeId ?? vinculo?.ciaId ?? vinculo)
            .filter((ciaeId) => ciaeId !== undefined && ciaeId !== null && ciaeId !== "")
            .map(String)
    )];
};

const getCompanhiaPorId = async (ciaeId) => {
    const response = await axios.get(`${COMPANHIAS_BASE_URL}/${encodeURIComponent(ciaeId)}`, {
        validateStatus: (status) => status < 500,
    });

    if (response.status === 204 || response.status === 404) {
        return null;
    }

    if (!isSuccessStatus(response.status)) {
        throw new Error(`Erro ${response.status} ao consultar a companhia ${ciaeId}.`);
    }

    return response.data;
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

    const ciaeIds = normalizarVinculosCidade(response.data);

    if (ciaeIds.length === 0) {
        return [];
    }

    const companhias = await Promise.all(ciaeIds.map(getCompanhiaPorId));

    return normalizarCompanhiasEnergia(companhias.filter(Boolean));
};
