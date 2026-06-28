const modalidadeLabels = {
    conta_luz: "Emprestimo na conta de luz",
    fgts: "Antecipacao do FGTS",
    consignado_inss: "Consignado INSS",
    consignado_clt: "Consignado CLT",
    garantia_veiculo: "Garantia de veiculo",
    pix_parcelado: "PIX parcelado",
    protecao_veicular: "Protecao veicular",
};

const ocupacoesInss = ["aposentado", "pensionista", "beneficiario_inss"];

export function avaliarAptidaoModalidades(perfil = {}) {
    const aptas = [];
    const possiveis = ["fgts"];
    const oportunidades = [];
    const bloqueadas = [];

    if (perfil.perfilContaLuzTitular === "sim") {
        aptas.push("conta_luz");
    } else if (perfil.perfilContaLuzTitular === "nao") {
        bloqueadas.push({
            modalidade: "conta_luz",
            motivo: "Conta de luz nao esta em nome do cliente",
        });
    }

    if (perfil.perfilOcupacao === "clt") {
        aptas.push("consignado_clt");
    } else if (perfil.perfilOcupacao) {
        bloqueadas.push({
            modalidade: "consignado_clt",
            motivo: "Cliente nao informou vinculo CLT",
        });
    }

    if (ocupacoesInss.includes(perfil.perfilOcupacao)) {
        aptas.push("consignado_inss");
    } else if (perfil.perfilOcupacao) {
        bloqueadas.push({
            modalidade: "consignado_inss",
            motivo: "Perfil nao indicado como aposentado, pensionista ou beneficiario INSS",
        });
    }

    if (perfil.perfilTemVeiculo === "sim") {
        aptas.push("garantia_veiculo");
        oportunidades.push("protecao_veicular");
    } else if (perfil.perfilTemVeiculo === "nao") {
        bloqueadas.push({
            modalidade: "garantia_veiculo",
            motivo: "Cliente nao possui veiculo",
        });
    }

    if (perfil.perfilTemCartaoCredito === "sim") {
        aptas.push("pix_parcelado");
    } else if (perfil.perfilTemCartaoCredito === "nao") {
        bloqueadas.push({
            modalidade: "pix_parcelado",
            motivo: "Cliente nao possui cartao de credito",
        });
    }

    return {
        aptas: aptas.map((id) => ({ id, label: modalidadeLabels[id] })),
        possiveis: possiveis.map((id) => ({ id, label: modalidadeLabels[id] })),
        oportunidades: oportunidades.map((id) => ({ id, label: modalidadeLabels[id] })),
        bloqueadas: bloqueadas.map((item) => ({
            ...item,
            label: modalidadeLabels[item.modalidade],
        })),
    };
}
