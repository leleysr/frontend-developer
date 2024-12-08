import { ErrorMessage, Field, Form, Formik } from "formik";
import FormSchema from "./schema/FormSchema";
import styles from "./styles.module.css";

interface formValues {
  name: string;
  email: string;
}

const initialValues = {
  name: "",
  email: "",
};

export function Newsletter() {
  const handleFormikSubmit = (values: formValues) => {
    const { email, name } = values;
    console.log(">>>>Enviado", email, name);
    fetch("https://corebiz-test-server.onrender.com/api/v1/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status !== "error") {
          console.log(">>>As");
        }
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <div className={styles["newsletter-wrapper"]}>
      <div className={styles["newsletter-title-wrapper"]}>
        <h3 className={styles["newsletter-title"]}>
          Participe de nossas news com promoções e novidades!
        </h3>
      </div>

      <div className={styles["newsletter-form-wrapper"]}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormikSubmit}
          validationSchema={FormSchema}
          // validateOnChange={false}
        >
          {({ errors, touched }) => (
            <Form className={styles["newsletter-form"]}>
              <div className={styles["newsletter-input-wrapper"]}>
                <Field
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  className={errors.name && touched.name && "invalid"}
                ></Field>
                <ErrorMessage
                  component="span"
                  name="name"
                  className={styles["newsletter-invalid-feedback"]}
                />
              </div>

              <div className={styles["newsletter-input-wrapper"]}>
                <Field
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  className={errors.email && touched.email && "invalid"}
                ></Field>

                <ErrorMessage
                  component="span"
                  name="email"
                  className={styles["newsletter-invalid-feedback"]}
                />
              </div>

              <div className={styles["newsletter-submit-button-wrapper"]}>
                <button
                  className={styles["newsletter-submit-button"]}
                  type="submit"
                >
                  Eu quero!
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
