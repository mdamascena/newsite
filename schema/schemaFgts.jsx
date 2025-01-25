import { z } from "zod";
import { validateFullName } from "schema/validations";

export const identificacaoSchema = z.object({
  nome: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" })
  .refine(value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), { message: "O campo deve conter apenas letras.." }),
  dataNascimento: z.string().length(10, { message: "Digite uma data válida." })
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

    registroGeral: z.string().min(1, "RG é obrigatório"),

    nomeMae: z.string().refine(value => validateFullName(value), { message: "Preencha o seu nome completo!" })
    .refine(value => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), { message: "O campo deve conter apenas letras.." })
});

export const pagamentoPix = z.object({
    tipoDeChave: z.string().min(1, "Selecione o tipo de chave"), // Este campo é obrigatório
    chaveCpf: z.string().optional(), // Torna o campo opcional
    chaveCel: z.string().optional(), // Torna o campo opcional
    chaveEmail: z.string().optional(), // Torna o campo opcional
});
