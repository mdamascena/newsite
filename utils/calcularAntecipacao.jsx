import React from "react";

export default function calcularAntecipacao(saldoInicial, dataAniversario, taxaMensal = 0.0129) {
    
    // --- 1. Tabela oficial do saque aniversário ---
    const calcularParcela = (saldo) => {
        if (saldo <= 500) return saldo * 0.5;
        if (saldo <= 1000) return saldo * 0.4 + 50;
        if (saldo <= 5000) return saldo * 0.3 + 150;
        if (saldo <= 10000) return saldo * 0.2 + 650;
        if (saldo <= 15000) return saldo * 0.15 + 1150;
        if (saldo <= 20000) return saldo * 0.1 + 1900;
        return saldo * 0.05 + 2900;
    };

    // --- 2. Converter taxa mensal para diária ---
    const fatorDiario = Math.pow(1 + taxaMensal, 1 / 30) - 1;

    // --- 3. Calcular parcelas brutas (12 anos) ---
    let saldo = saldoInicial;
    
    const parcelasBrutas = [];

    for (let i = 0; i < 12; i++) {
    
        if (saldo <= 0) {
            parcelasBrutas.push(0);
        } else {
            const parcela = calcularParcela(saldo);
            parcelasBrutas.push(parcela);
            saldo -= parcela;
        }
    }

    // --- 4. Calcular diferença de dias para cada saque ---
    const hoje = new Date(); // Data atual
    const [dia, mes] = dataAniversario.split("/"); // pega do input tipo dd/mm/yyyy
    const aniversario = new Date(hoje.getFullYear(), parseInt(mes) - 1, 10); // sempre dia 10 do mês informado

    // Se o aniversário já passou este ano, começa no próximo ano
    if (aniversario < hoje) {
        aniversario.setFullYear(aniversario.getFullYear() + 1);
    }

    const diasParcelas = [];
    let primeiraDiferencaDias = Math.floor((aniversario - hoje) / (1000 * 60 * 60 * 24));
    for (let i = 0; i < 12; i++) {
        diasParcelas.push(primeiraDiferencaDias + 365 * i);
    }

    // --- 5. Aplicar deságio em cada parcela ---
    const parcelasDesagio = parcelasBrutas.map((parcela, index) => {
        return parcela / Math.pow(1 + fatorDiario, diasParcelas[index]);
    });

    // --- 6. Somar total líquido ---
    const totalLiquido = parcelasDesagio.reduce((acc, val) => acc + val, 0);

    return totalLiquido;
}
