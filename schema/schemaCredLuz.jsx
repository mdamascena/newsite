import * as yup from "yup";
import { validateCPF } from "schema/validations";

export const tipoOcupacaoSchema = yup.object().shape({
  tipoOcupacao: yup.string()
    .oneOf(["1", "2", "3", "4", "5", "6"], "Selecione um tipo de ocupação"),
})

export const titularCiaSchema = yup.object().shape({
  titularCia: yup.string()
    .oneOf(["0", "1"], "Selecione sua titularidade"),
});

export const resumoSchema = yup.object().shape({});

export const respostaSchema = yup.object().shape({});

export const simulacaoSchema = yup.object().shape({
  valorLimite: yup.string().required("Selecione o valor desejado"),
  prazo: yup.string().required("Selecione as parcelas"),
});

export const dadosBancariosSchema = yup.object().shape({
  banco: yup.string().required("Selecione um banco"),
  agencia: yup.string().required("A Agência é obrigatória").length(4, "Agência deve conter exatamente 4 dígitos"),
  conta: yup.string().required("A conta é obrigatória").min(2, "Conta deve ter no mínimo 2 dígitos"),
  cpf_contaBancaria: yup.string().required("O CPF é obrigatório").test("is-valid-cpf", "O CPF é inválido", (value) => validateCPF(value))
});

export const envioRgSchema = yup.object().shape({
  rgFrente: yup.string().required("Envie a frente do RG"),
  rgVerso: yup.string().required("Envie o verso do RG"),
});

export const envioFaturaSchema = yup.object().shape({});

export const finalizadoSchema = yup.object().shape({});
