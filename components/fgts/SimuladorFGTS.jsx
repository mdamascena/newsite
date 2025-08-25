import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectGroup, SelectLabel, SelectContent } from "../ui/select";
import { BtnSolic } from "./styles";
import { Slider } from "../ui/slider"
import BtnBlueBack from "components/geral/button/BtnBlueBack";
import BtnBlueNext from "components/geral/button/BtnBlueNext";

export default function SimuladorFGTS() {
    
    const [saldo, setSaldo] = useState(50);
    const [mesAniversario, setMesAniversario] = useState("");
    const [total, setTotal] = useState(0);

    // Função para formatar moeda
    const formatCurrency = (value) => {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    // Função principal de cálculo
    function calcularAntecipacao(saldoInicial, mes, taxaMensal = 0.01181) {
        
        const calcularParcela = (saldo) => {
            if (saldo <= 500) return saldo * 0.5;
            if (saldo <= 1000) return saldo * 0.4 + 50;
            if (saldo <= 5000) return saldo * 0.3 + 150;
            if (saldo <= 10000) return saldo * 0.2 + 650;
            if (saldo <= 15000) return saldo * 0.15 + 1150;
            if (saldo <= 20000) return saldo * 0.1 + 1900;
            return saldo * 0.05 + 2900;
        };

        const fatorDiario = Math.pow(1 + taxaMensal, 1 / 30) - 1;

        // Calcular parcelas brutas
        let saldoAtual = saldoInicial;
        const parcelasBrutas = [];
        
        for (let i = 0; i < 12; i++) {
            
            if (saldoAtual <= 0) {
                parcelasBrutas.push(0);
            } else {
                const parcela = calcularParcela(saldoAtual);
                parcelasBrutas.push(parcela);
                saldoAtual -= parcela;
            }
        }

        // Calcular diferença de dias
        const hoje = new Date();
        const aniversarioData = new Date(hoje.getFullYear(), parseInt(mes) - 1, 10);

        if (aniversarioData < hoje) {
            aniversarioData.setFullYear(aniversarioData.getFullYear() + 1);
        }

        let primeiraDiferencaDias = Math.floor(
            (aniversarioData - hoje) / (1000 * 60 * 60 * 24)
        );

        const diasParcelas = [];
        
        for (let i = 0; i < 12; i++) {
            diasParcelas.push(primeiraDiferencaDias + 365 * i);
        }

        // Aplicar deságio
        const parcelasDesagio = parcelasBrutas.map((parcela, index) => {
            return parcela / Math.pow(1 + fatorDiario, diasParcelas[index]);
        });

        return parcelasDesagio.reduce((acc, val) => acc + val, 0);
    }

    // Atualiza cálculo em tempo real
    useEffect(() => {
        if (saldo && mesAniversario) {
            const resultado = calcularAntecipacao(saldo, mesAniversario);
            setTotal(resultado);
        } else {
            setTotal(0);
        }
    }, [saldo, mesAniversario]);

  return (
    <section className="bgMainPrincipal">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-16 container-custom lg:px-24 px-2 ">
            <div className="col-span-3">
                
                <h1 className="select-none text-white text-center lg:text-left text-3xl mb-2 tracking-tighter font-semibold lg:ml-5">
                    Descubra o seu limite
                </h1>

                <div className="rounded-lg lg:mr-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
                        
                        <div className="col-span-2 rounded-lg bg-blue-500/15 text-md pb-5 px-3">

                            <div className="mx-1 py-5 grid grid-cols-2 justify-between items-center">

                                <div className="text-white text-md tracking-tight select-none lg:col-span-1 col-span-2 flex items-center">
                                    <p className="text-lg lg:ml-1 lg:mb-0 mb-2 mx-auto">
                                        Informe seu saldo FGTS
                                    </p>
                                </div>

                                <div className="tracking-tighter text-4xl lg:text-end text-center font-semibold text-blue-100 lg:col-span-1 col-span-2">
                                    {formatCurrency(saldo)}
                                </div>

                            </div>

                            <div className="relative flex items-center">
                                <Slider
                                    defaultValue={[100]}
                                    min={0}
                                    max={100000}
                                    step={100}
                                    onValueChange={(newValues) => setSaldo(newValues[0])}
                                    value={[saldo]}
                                    aria-label="Range Slider"
                                />
                            </div>
                        </div>

                        {/* Select do mês */}
                        <div className="col-span-2 bg-blue-500/15 p-4 rounded-lg gap-2 lg:flex lg:items-center ">

                            <div className="text-white lg:text-left text-center mb-3 lg:mb-0 mx-3 lg:mx-0 text-lg">
                                Informe o seu mês de nascimento
                            </div>

                            <div className="">

                                <div className="lg:w-64 mx-auto">
                                    <Select onValueChange={(value) => setMesAniversario(value)}>

                                        <SelectTrigger className="py-6 bg-white placeholder:text-slate-400 focus-visible:ring-blue-500">
                                            <SelectValue placeholder="Mês do seu aniversário" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectGroup className="text-slate-400">
                                                <SelectLabel>Selecione</SelectLabel>
                                                <SelectItem value="1">Janeiro</SelectItem>
                                                <SelectItem value="2">Fevereiro</SelectItem>
                                                <SelectItem value="3">Março</SelectItem>
                                                <SelectItem value="4">Abril</SelectItem>
                                                <SelectItem value="5">Maio</SelectItem>
                                                <SelectItem value="6">Junho</SelectItem>
                                                <SelectItem value="7">Julho</SelectItem>
                                                <SelectItem value="8">Agosto</SelectItem>
                                                <SelectItem value="9">Setembro</SelectItem>
                                                <SelectItem value="10">Outubro</SelectItem>
                                                <SelectItem value="11">Novembro</SelectItem>
                                                <SelectItem value="12">Dezembro</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <p className="text-xs text-white text-justify mt-5 select-none hidden lg:block">
                    Os valores dessa simulação são calculados com base nos informados. O limite pode mudar de
                    acordo com o seu saldo no FGTS.
                </p>
            </div>

            {/* Resultado */}
            <div className="lg:col-span-2 col-span-1 lg:pl-20 flex items-center">
                
                <div className="text-justify mb-4 lg:mb-0">

                    <div className=" grid text-center my-2 lg:my-0 rounded-md">

                        <div className="rounded-lg p-5 bg-blue-500/15">

                            <p className="text-white text-lg mb-5">
                                Valor aproximado do seu saque
                            </p>

                            <div className="text-4xl tracking-tight font-semibold text-white bg-blue-700 p-3 rounded-lg">
                                {total > 0 ? total.toLocaleString("pt-BR", {style: "currency", currency: "BRL",}) : "--"}
                            </div>
                            
                        </div>

                    </div>

                    <div className="col-span-1 mt-5 flex">
                        <BtnSolic>Solicitar agora</BtnSolic>
                    </div>

                    <p className="text-xs text-white text-justify mt-5 select-none lg:hidden block">
                        Os valores dessa simulação são calculados com base nos informados. O limite pode mudar de
                        acordo com o seu saldo no FGTS.
                    </p>

                </div>
            </div>
        </div>
    </section>
  );
}
