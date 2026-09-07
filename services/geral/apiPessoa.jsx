import axios from "axios";

const CREDLUZ_API_BASE_URL = (
    process.env.NEXT_PUBLIC_CREDLUZ_API_BASE_URL || "http://localhost:5033"
).replace(/\/+$/, "");

const PESSOAS_BASE_URL = `${CREDLUZ_API_BASE_URL}/pessoas`;

export const CURRENT_USER_CPF_STORAGE_KEY = "valoreal.currentUserCpf";

export const getPessoaPorCpf = async (cpf) => {
    const cpfDigits = (cpf || "").replace(/\D/g, "");

    try {
        const response = await axios.get(`${PESSOAS_BASE_URL}/${cpfDigits}`, {
            validateStatus: (status) => status < 500,
        });

        if (response.status === 404 || response.status === 204) {
            return { success: true, pessoa: null };
        }

        if (response.status < 200 || response.status >= 300) {
            return { success: false, pessoa: null };
        }

        return { success: true, pessoa: response.data ?? null };
    } catch {
        return { success: false, pessoa: null };
    }
};
