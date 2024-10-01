import { z } from "zod";
import { validateCPF, validateFullName } from "schema/validations";

export const cadastroSchema = z.object({
    cpf: z.string().min(11, "O CPF deve ter pelo menos 11 dígitos").max(14, "O CPF deve ter no máximo 14 dígitos").refine(value => validateCPF(value), { message: "O CPF é inválido" }),
    dataNascimento: z.string().length(10, { message: "Data de nascimento deve ter exatamente 10 caracteres." }),
    nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" }),
    email: z.string().email("Formato de e-mail inválido"),
    senha: z.string().min(3, "A senha deve ter pelo menos 3 caracteres"),
    senhaConfirmacao: z.string().min(3, "A confirmação de senha deve ter pelo menos 3 caracteres"),
    termos: z.boolean().refine(val => val === true, {
        message: "É necessário aceitar o termo para continuar.",
    }),
}).refine(data => data.senha === data.senhaConfirmacao, {
    message: "As senhas não correspondem",
    path: ["senhaConfirmacao"],
});