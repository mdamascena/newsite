import { z } from "zod";
import { validateCPF, validateFullName, validatePhoneNumber } from "schema/validations";
import { differenceInDays, parse } from "date-fns";

const MIN_AGE_IN_DAYS = 21 * 365.25; // Aproximando 1 ano para 365.25 dias por conta dos anos bissextos
const MAX_AGE_IN_DAYS = 84 * 365.25;

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
})

export const identificacaoSchema = z.object({
    nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" }),
    dataNascimento: z
      .string()
      .length(10, { message: "Data de nascimento deve ter exatamente 10 caracteres." })
      .refine((value) => {
        // Parsing da data no formato dd/MM/yyyy
        const parsedDate = parse(value, "dd/MM/yyyy", new Date());
        
        // Verificando se a data é válida
        if (isNaN(parsedDate.getTime())) {
          return false;
        }
  
        // Calculando a diferença em dias da data de nascimento para a data atual
        const ageInDays = differenceInDays(new Date(), parsedDate);
  
        // Validando se a idade está entre 21 e 84 anos
        return ageInDays >= MIN_AGE_IN_DAYS && ageInDays <= MAX_AGE_IN_DAYS;
      }, { message: "Você deve ter entre 21 e 84 anos!" }),
    
    genero: z.enum(["0", "1"], { errorMap: () => ({ message: "Selecione um genêro" }) }),
  });