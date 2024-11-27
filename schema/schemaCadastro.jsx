import { z } from "zod";
import { validateCPF, validateFullName, validatePhoneNumber } from "schema/validations";
import { differenceInYears, parse, isBefore } from "date-fns";

// Definindo os limites de idade
const MIN_AGE = 21; // Idade mínima em anos
const MAX_AGE = 84; // Idade máxima em anos

export const cadastroSchema = z.object({
  cpf: z.string().min(11, "O CPF deve ter pelo menos 11 dígitos").max(14, "O CPF deve ter no máximo 14 dígitos").refine(value => validateCPF(value), { message: "O CPF é inválido" }),
  email: z.string().email("Formato de e-mail inválido"),
  celular: z.string().length(13, { message: "Celular deve conter 9 números sem contar o DDD" }).refine(value => validatePhoneNumber(value), { message: "Número de celular inválido" }),
  senha: z.string().min(3, "A senha deve ter pelo menos 3 caracteres"),
  senhaConfirmacao: z.string().min(3, "A confirmação de senha deve ter pelo menos 3 caracteres"),
  termos: z.boolean().refine(val => val === true, {
    message: "É necessário aceitar o termo para continuar.",
  }),
}).refine(data => data.senha === data.senhaConfirmacao, {
  message: "As senhas não correspondem",
  path: ["senhaConfirmacao"],
});

export const identificacaoSchema = z.object({
  nome: z.string()
  .refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" })
  .refine(value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), { message: "O campo deve conter apenas letras.." }),
  dataNascimento: z
    .string()
    .length(10, { message: "Digite uma data válida." })
    .refine((value) => {
      if (!value) return true; // Não valida se o campo estiver vazio
      
      // Parsing da data no formato dd/MM/yyyy
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());

      // Verificando se a data é válida
      if (isNaN(parsedDate.getTime())) {
        return false;
      }

      const today = new Date();
      const ageInYears = differenceInYears(today, parsedDate);

      // Verifica se a idade está abaixo do limite de 21 anos
      if (ageInYears < MIN_AGE || (ageInYears === MIN_AGE && isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MIN_AGE)))) {
        return false; // Retorna falso, não lança erro
      }

      // Verifica se a idade está acima do limite de 84 anos
      if (ageInYears > MAX_AGE || (ageInYears === MAX_AGE && !isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MAX_AGE)))) {
        return false; // Retorna falso, não lança erro
      }

      return true;
    }, { message: "Idade deve estar entre 21 e 84 anos." }),
  genero: z.enum(["0", "1"], { errorMap: () => ({ message: "Selecione um gênero" }) }),
});

export const enderecoSchema = z.object({
  //cepOption: z.enum(['1', '2'], { errorMap: () => ({ message: "Selecione uma opção" }) }),
  cep: z.string().optional(),
  estadoCep: z.string().optional(),
  cidadeCep: z.string().optional(),
  estado: z.string().optional(),
  cidade: z.string().optional(),
  logradouro: z.string().optional(),
  numero: z.string().optional(),
  bairro: z.string().optional(),
  complemento: z.string().optional(),
});


