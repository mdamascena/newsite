import * as Yup from "yup";

export const identificacaoSchema = Yup.object().shape({
	genero: Yup.string()
		.oneOf(["0", "1", "2", "3"], "Selecione um gênero"),
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
