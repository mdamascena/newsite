import * as Yup from "yup";
import { validateFullName } from "schema/validations";

export const identificacaoSchema = Yup.object().shape({
	registroGeral: Yup.string()
		.min(1, "RG é obrigatório"),
	genero: Yup.string()
		.oneOf(["0", "1", "2", "3"], "Selecione um gênero"),
	nomeMae: Yup.string()
		.test("is-full-name", "Preencha o seu nome completo!", (value) => validateFullName(value))
		.matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O campo deve conter apenas letras."),
});

export const pagamentoPix = Yup.object().shape({
  	tipoDeChave: Yup.string().min(1, "Selecione o tipo de chave"),
  	chaveCpf: Yup.string().optional(),
  	chaveCel: Yup.string().optional(),
  	chaveEmail: Yup.string().optional()
});

export const adesaoSchema = Yup.object().shape({
	adesao: Yup.string()
		.oneOf(["0"], "Você precisar fazer a adesão para continuar"),
});

export const autorizacaoSchema = Yup.object().shape({});
