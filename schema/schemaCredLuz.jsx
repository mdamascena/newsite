import * as Yup from "yup";
import { validatePhoneNumber } from "schema/validations";

export const tipoOcupacaoSchema = Yup.object().shape({
    tipoOcupacao: Yup.string()
      .oneOf(["1", "2", "3", "4", "5", "6"], "Selecione um tipo de ocupação"),
  })

export const titularCiaSchema = Yup.object().shape({
    titularCia: Yup.string()
    .oneOf(["0", "1"], "Selecione sua titularidade"),
});

export const resumoSchema = Yup.object().shape({});

export const respostaSchema = Yup.object().shape({});

export const simulacaoSchema = Yup.object().shape({});

export const dadosBancariosSchema = Yup.object().shape({});

export const envioRgSchema = Yup.object().shape({});

export const envioFaturaSchema = Yup.object().shape({});

export const finalizadoSchema = Yup.object().shape({});
  