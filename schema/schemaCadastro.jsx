import * as yup from "yup";
import { validateCPF, validateFullName, validatePhoneNumber } from "schema/validations";
import { differenceInYears, parse, isBefore } from "date-fns";


// Definindo os limites de idade
const MIN_AGE = 21; // Idade mínima em anos
const MAX_AGE = 84; // Idade máxima em anos

export const cadastroSchema = yup.object().shape({
  cpf: yup.string()
    .min(11, "O CPF deve ter pelo menos 11 dígitos")
    .max(14, "O CPF deve ter no máximo 14 dígitos")
    .test("is-valid-cpf", "O CPF é inválido", (value) => validateCPF(value)),
  nome: yup.string()
    .test("is-full-name", "Preencha o seu nome completo!", (value) => validateFullName(value))
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O campo deve conter apenas letras."),
  dataNascimento: yup.string()
    .length(10, "Digite uma data válida.")
    .test("is-valid-date", "Idade deve estar entre 21 e 84 anos.", (value) => {
      if (!value) return true; // Permitir campo vazio

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
  email: yup.string()
    .email("Formato de e-mail inválido"),
  celular: yup.string()
    .length(13, "Celular deve conter 9 números sem contar o DDD")
    .test("is-valid-phone", "Número de celular inválido", (value) => validatePhoneNumber(value)),
  senha: yup.string()
    .min(3, "A senha deve ter pelo menos 3 caracteres"),
  senhaConfirmacao: yup.string()
    .min(3, "A confirmação de senha deve ter pelo menos 3 caracteres")
    .oneOf([yup.ref("senha"), null], "As senhas não correspondem"),
  termos: yup.boolean()
    .oneOf([true], "É necessário aceitar o termo para continuar."),
  aceite_whatsapp: yup.boolean()
    .oneOf([true], "É necessário aceitar o termo para continuar."),
});

export const identificacaoSchema = yup.object().shape({
  genero: yup.string()
    .oneOf(["0", "1", "2"], "Selecione um gênero"),
});

export const enderecoSchema = yup.object({
  cepOption: yup.string().required('Escolha uma opção de CEP').oneOf(['1', '2', '3'], 'Selecione uma opção válida'),

  /* COM CEP */
  cep: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("CEP é obrigatório")
  }),
  logradouro: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("Logradouro é obrigatório")
  }),
  bairro: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("Bairro é obrigatório")
  }),
  numero: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("Número é obrigatório")
  }),
  complemento: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().optional()
  }),
  estadoCep: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("Estado é obrigatório")
  }),
  cidadeCep: yup.string().when("cepOption", {
    is: (value) => value === "1",
    then: () => yup.string().required("Cidade é obrigatório"),
  }),

  /* SEM CEP */
  estado: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().required("Estado é obrigatório")
  }),
  cidade: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().required("Cidade é obrigatório")
  }),
  logradouroSemCep: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().required("Logradouro é obrigatório")
  }),
  bairroSemCep: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().required("Bairro é obrigatório")
  }),
  numeroSemCep: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().required("Número é obrigatório")
  }),
  complementoSemCep: yup.string().when("cepOption", {
    is: (value) => value === "2",
    then: () => yup.string().optional()
  }),
});





