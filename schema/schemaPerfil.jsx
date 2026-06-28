import * as yup from "yup";

export const perfilSchema = yup.object().shape({
    perfilGenero: yup.string()
        .oneOf(["masculino", "feminino", "outros", "nao_informar"], "Selecione uma opcao")
        .required("Selecione uma opcao"),

    perfilOcupacao: yup.string()
        .oneOf([
            "clt",
            "aposentado",
            "pensionista",
            "beneficiario_inss",
            "servidor_publico",
            "autonomo",
            "militar",
            "outro"
        ], "Selecione uma ocupacao")
        .required("Selecione uma ocupacao"),

    perfilContaLuzTitular: yup.string()
        .oneOf(["sim", "nao"], "Selecione uma opcao")
        .required("Selecione uma opcao"),

    perfilTemCartaoCredito: yup.string()
        .oneOf(["sim", "nao"], "Selecione uma opcao")
        .required("Selecione uma opcao"),

    perfilTemVeiculo: yup.string()
        .oneOf(["sim", "nao"], "Selecione uma opcao")
        .required("Selecione uma opcao"),

    perfilVeiculoQuitado: yup.string().when("perfilTemVeiculo", {
        is: "sim",
        then: () => yup.string()
            .oneOf(["sim", "nao"], "Selecione uma opcao")
            .required("Selecione uma opcao"),
        otherwise: () => yup.string().optional()
    }),
});
