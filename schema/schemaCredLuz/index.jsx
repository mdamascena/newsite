import { z } from "zod";
import { validateCPF, validateFullName, validatePhoneNumber } from "schema/validations";

export const cadastroSchema = z.object({
  cpf: z.string().min(11, "O CPF deve ter pelo menos 11 dígitos").max(14, "O CPF deve ter no máximo 14 dígitos").refine(value => validateCPF(value), { message: "O CPF é inválido" }),
  dataNascimento: z.string().length(10, { message: "Data de nascimento deve ter exatamente 10 caracteres." }),
  nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" }),
  email: z.string().email("Formato de e-mail inválido"),
  senha: z.string().min(3, "A senha deve ter pelo menos 3 caracteres"),
  senhaConfirmacao: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
  termos: z.boolean().refine(val => val === true, {
    message: "É necessário aceitar o termo para continuar.",
  }),
}).refine(data => data.senha === data.senhaConfirmacao, {
    message: "As senhas não correspondem",
    path: ["senhaConfirmacao"],
});

export const tipoOcupacao = z.object({
    tipoOcupacao: z.enum(["1", "2", "3", "4", "5", "6"])
})

export const generoSchema = z.object({
    genero: z.enum(["0", "1"]),
});

export const titularCia = z.object({
    titularCia: z.enum(["0", "1"])
})

export const dadosPessoaisSchema = z.object({
  celular: z.string().length(15, { message: "Celular deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
  whatsapp: z.string().length(15, { message: "WhatsApp deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
  logradouro: z.string().min(1, { message: "Digite o logradouro." }),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string().min(1, { message: "Selecione o bairro da sua cidade." }),
  cidade: z.string().min(1, {message: "Selecione a cidade."}),
  uf: z.string().min(1, {message: "Seleciona o estado."}),
  cep: z.string().optional()
})