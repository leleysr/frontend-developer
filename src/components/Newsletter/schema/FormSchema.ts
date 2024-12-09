import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .required("Preencha com seu nome completo")
    .min(3, " O nome deve ter pelo menos 3 caracteres"),
  email: Yup.string()
    .email("Preencha com um e-mail válido")
    .required("Campo obrigatório"),
});
