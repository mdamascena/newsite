import axios from "axios";

const PESSOAS_BASE_URL = "https://localhost:7286/pessoas";

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
