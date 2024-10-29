import { z } from "zod";
import { validatePhoneNumber } from "schema/validations";

export const tipoOcupacao = z.object({
    tipoOcupacao: z.enum(["1", "2", "3", "4", "5", "6"], {
        errorMap: () => ({ message: "Selecione um tipo de ocupação" }),
    })
})

export const titularCia = z.object({
    titularCia: z.enum(["0", "1"], {
        errorMap: () => ({ message: "Selecione sua titularidade" }),
    })
})

export const dadosPessoaisSchema = z.object({
    celular: z.string().length(13, { message: "Celular deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
    whatsapp: z.string().length(13, { message: "WhatsApp deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
    logradouro: z.string().min(1, { message: "Digite o logradouro." }),
    numero: z.string().optional(),
    complemento: z.string().optional(),
    bairro: z.string().min(1, { message: "Selecione o bairro da sua cidade." }),
    cidade: z.string().min(1, {message: "Selecione a cidade."}),
    uf: z.string().min(1, {message: "Seleciona o estado."}),
    cep: z.string().optional()
})