import { ErrorMessage, Field, Form, Formik } from "formik";
import FormSchema from "./schema/FormSchema";
import styles from "./styles.module.css";

const initialValues = {
  name: "",
  email: "",
};

export function Newsletter() {
  const handleFormikSubmit = () => {
    console.log(">>>>Enviado");
  };

  return (
    <div>
      <div>
        <h3>Participe de nossas news com promoções e novidades!</h3>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormikSubmit}
          validationSchema={FormSchema}
        >
          {({ errors, touched }) => (
            <Form className={styles[""]}>
              <div className={`${styles[""]}`}>
                <Field
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  className={errors.name && touched.name && "invalid"}
                ></Field>
                <ErrorMessage
                  component="span"
                  name="name"
                  className={styles["form-invalid-feedback"]}
                />
              </div>

              <div className={`${styles[""]}`}>
                <Field
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  className={errors.email && touched.email && "invalid"}
                ></Field>
                <ErrorMessage
                  component="span"
                  name="email"
                  className={styles["form-invalid-feedback"]}
                />
              </div>

              <div>
                <button type="submit">Eu quero!</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
