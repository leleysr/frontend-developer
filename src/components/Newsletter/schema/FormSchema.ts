import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  registeredEmail: Yup.string()
    .email("Email inválido")
    .required("Campo obrigatório"),
});
