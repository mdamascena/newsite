import * as Yup from "yup";
import { validateFullName } from "schema/validations";
import { differenceInYears, parse, isBefore } from "date-fns";

const MIN_AGE = 21; // Idade mínima em anos
const MAX_AGE = 84; // Idade máxima em anos

export const identificacaoSchema = Yup.object().shape({
  nome: Yup.string()
    .test("is-full-name", "Preencha o seu nome completo!", (value) => validateFullName(value))
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O campo deve conter apenas letras."),
  dataNascimento: Yup.string()
    .length(10, "Digite uma data válida.")
    .test("is-valid-date", "Idade deve estar entre 21 e 84 anos.", (value) => {
      if (!value) return true;

      const parsedDate = parse(value, "dd/MM/yyyy", new Date());
      if (isNaN(parsedDate.getTime())) return false;

      const today = new Date();
      const ageInYears = differenceInYears(today, parsedDate);

      if (
        ageInYears < MIN_AGE || 
        (ageInYears === MIN_AGE && isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MIN_AGE)))
      ) {
        return false;
      }

      if (
        ageInYears > MAX_AGE || 
        (ageInYears === MAX_AGE && !isBefore(today, parsedDate.setFullYear(parsedDate.getFullYear() + MAX_AGE)))
      ) {
        return false;
      }

      return true;
    }),
  genero: Yup.string()
    .oneOf(["0", "1"], "Selecione um gênero"),
  registroGeral: Yup.string()
    .min(1, "RG é obrigatório"),
  nomeMae: Yup.string()
    .test("is-full-name", "Preencha o seu nome completo!", (value) => validateFullName(value))
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O campo deve conter apenas letras."),
});


export const pagamentoPix = Yup.object().shape({
  tipoDeChave: Yup.string().min(1, "Selecione o tipo de chave"), // Campo obrigatório
  chaveCpf: Yup.string().optional(), // Campo opcional
  chaveCel: Yup.string().optional(), // Campo opcional
  chaveEmail: Yup.string().optional(), // Campo opcional
});
