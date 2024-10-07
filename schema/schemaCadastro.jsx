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
  nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" }),
  nome: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/, { message: "O campo deve conter apenas letras." }),
  nome: z.string().regex(/^[A-Za-z]+$/, { message: "O campo deve conter apenas letras." }),
  dataNascimento: z
    .string()
    .length(10, { message: "Digite uma data válida." })
    .refine((value) => {
      // Parsing da data no formato dd/MM/yyyy
      const parsedDate = parse(value, "dd/MM/yyyy", new Date());

      // Verificando se a data é válida
      if (isNaN(parsedDate.getTime())) {
        return false;
      }

      const today = new Date();

      // Calcula a diferença exata em anos
      const ageInYears = differenceInYears(today, parsedDate);

      // Verifica se a idade está abaixo do limite de 21 anos
      if (ageInYears < MIN_AGE || (ageInYears === MIN_AGE && isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MIN_AGE)))) {
        throw new z.ZodError([{ message: "Idade menor que 21 anos, não permitida", path: ["dataNascimento"] }]);
      }

      // Verifica se a idade está acima do limite de 84 anos
      if (ageInYears > MAX_AGE || (ageInYears === MAX_AGE && !isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MAX_AGE)))) {
        throw new z.ZodError([{ message: "Idade maior que 84 anos, não permitida", path: ["dataNascimento"] }]);
      }

      return true;
    }),
  genero: z.enum(["0", "1"], { errorMap: () => ({ message: "Selecione um gênero" }) }),
});
