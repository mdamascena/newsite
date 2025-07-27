import * as yup from "yup";

export const loginSchema = yup.object().shape({
  senha: yup
    .string()
    .required("A senha é obrigatória")
    .min(3, "A senha deve ter pelo menos 3 caracteres"),
    
  senhaConfirmacao: yup
    .string()
    .required("Confirme sua senha")
    .min(3, "A confirmação deve ter pelo menos 3 caracteres")
    .oneOf([yup.ref("senha"), null], "As senhas não coincidem"),
});