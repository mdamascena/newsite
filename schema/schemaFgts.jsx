import { z } from "zod";
import { validateFullName } from "schema/validations";

export const dadosPessoaisFgts = z.object({
    
    registroGeral: z
        .string()
        .min(1, "RG é obrigatório")
        .regex(/^\d+$/, "RG deve conter apenas números")
        .length(9, "RG deve ter exatamente 9 dígitos"),
  
    nomeMae: z.string()
    .refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" })
    .refine(value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), { message: "O campo deve conter apenas letras.." })
})

export const pagamentoPix = z.object({
    tipoDeChave: z.string().min(1, "Selecione o tipo de chave"), // Este campo é obrigatório
    chaveCpf: z.string().optional(), // Torna o campo opcional
    chaveCel: z.string().optional(), // Torna o campo opcional
    chaveEmail: z.string().optional(), // Torna o campo opcional
});
