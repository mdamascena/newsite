import * as Yup from "yup";
import { validatePhoneNumber } from "schema/validations";

export const tipoOcupacao = Yup.object().shape({
    tipoOcupacao: Yup.string()
      .oneOf(["1", "2", "3", "4", "5", "6"], "Selecione um tipo de ocupação"),
  })

export const titularCia = Yup.object().shape({
    titularCia: Yup.string()
    .oneOf(["0", "1"], "Selecione sua titularidade"),
});

export const dadosPessoaisCredLuz = Yup.object().shape({
    celular: Yup.string()
      .length(13, "Celular deve conter 9 números sem contar o DDD")
      .test("is-valid-phone", "Número de celular inválido", (value) => validatePhoneNumber(value)),
    whatsapp: Yup.string()
      .length(13, "WhatsApp deve conter 9 números sem contar o DDD")
      .test("is-valid-phone", "Número de celular inválido", (value) => validatePhoneNumber(value)),
    logradouro: Yup.string()
      .min(1, "Digite o logradouro."),
    numero: Yup.string()
      .optional(),
    complemento: Yup.string()
      .optional(),
    bairro: Yup.string()
      .min(1, "Selecione o bairro da sua cidade."),
    cidade: Yup.string()
      .min(1, "Selecione a cidade."),
    uf: Yup.string()
      .min(1, "Selecione o estado."),
    cep: Yup.string()
      .optional(),
  });

export const resumo = Yup.object().shape({});

export const resposta = Yup.object().shape({});
  