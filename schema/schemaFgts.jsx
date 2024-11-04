import { z } from "zod";
import { validateFullName } from "schema/validations";

export const dadosPessoaisFgts = z.object({

    estadoCivil: z.enum(["1", "2", "3", "4", "5", "6"], {
        errorMap: () => ({ message: "Selecione um tipo de ocupação" }),
    }),
    
    registroGeral: z
        .string()
        .min(1, "RG é obrigatório")
        .regex(/^\d+$/, "RG deve conter apenas números")
        .length(9, "RG deve ter exatamente 9 dígitos"),
  
    nomeMae: z.string()
    .refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" })
    .refine(value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), { message: "O campo deve conter apenas letras.." })
})