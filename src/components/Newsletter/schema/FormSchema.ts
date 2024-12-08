import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .min(3, " O nome deve ter pelo menos 3 caracteres"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
});
