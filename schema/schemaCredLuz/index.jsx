import { z } from "zod";
import { validateCPF, validateFullName, validatePhoneNumber } from "schema/validations";

export const cadastroSchema = z.object({
    cpf: z.string().min(11, "O CPF deve ter pelo menos 11 dígitos").max(14, "O CPF deve ter no máximo 14 dígitos").refine(value => validateCPF(value), { message: "O CPF é inválido" }),
    nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" }),
    email: z.string().email("Formato de e-mail inválido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    senhaConfirmacao: z.string().min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
    termos: z.boolean().refine(val => val === true, {
        message: "É necessário aceitar o termo para continuar.",
    }),
}).refine(data => data.senha === data.senhaConfirmacao, {
    message: "As senhas não correspondem",
    path: ["senhaConfirmacao"],
});

export const cepSchema = z.object({
    cep: z.string().optional(),
    cidade: z.string().optional(),
    uf: z.string().optional(),
  }).refine((data) => {
    const cepPreenchido = data.cep?.trim().length > 0;
    const cidadeUfPreenchidos = data.cidade?.trim().length > 0 && data.uf?.trim().length > 0;

    return (
      (!cepPreenchido && !cidadeUfPreenchidos) || (cepPreenchido && !cidadeUfPreenchidos) || (!cepPreenchido && cidadeUfPreenchidos) || (cepPreenchido && cidadeUfPreenchidos)
    );
  }, {
    message: 'Preencha corretamente os campos.',
  });
export const dadosPessoaisSchema = z.object({
    cpf: z.string().readonly(),
    dataNascimento: z.string().length(10, { message: "Data de nascimento deve ter exatamente 10 caracteres." }),
    nome: z.string().readonly(),
    tipoOcupacao: z.string().min(1, { message: "Tipo de ocupação é obrigatório." })
        .refine(value => ['1', '2', '3', '4', '5', '6'].includes(value), {
            message: "Selecione um tipo de ocupação válido."
        }),
    email: z.string().readonly(),
    celular: z.string().length(15, { message: "Celular deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
    whatsapp: z.string().length(15, { message: "WhatsApp deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
    logradouro: z.string().min(1, { message: "Digite o logradouro." }),
    numero: z.string().optional(),
    complemento: z.string().optional(),
    bairro: z.string().min(1, { message: "Selecione o bairro da sua cidade." }),
    cidade: z.string().readonly().optional(),
    uf: z.string().readonly().optional(),
    cep: z.string().optional()
})