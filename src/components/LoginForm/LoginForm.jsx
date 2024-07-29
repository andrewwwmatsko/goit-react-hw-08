import { useDispatch } from "react-redux";

import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { login } from "../../redux/auth/opeartions";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  const FeedbackSchema = Yup.object().shape(
    {
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(6, "Too Short!").required("Required"),
    },
    { strict: true }
  );

  return (
    <>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <h2 className={css.heading}>Login</h2>

          <div className={css.inputWrapper}>
            <label htmlFor={emailId} className={css.label}>
              Email
            </label>
            <Field id={emailId} name="email" className={css.input} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={passwordId} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              id={passwordId}
              name="password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.btn}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
