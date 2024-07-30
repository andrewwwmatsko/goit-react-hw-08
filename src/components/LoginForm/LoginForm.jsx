import { useDispatch, useSelector } from "react-redux";

import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import { login } from "../../redux/auth/opeartions";
import { selectLoading } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(
      login({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
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

          <LoadingButton
            type="submit"
            loading={loading}
            loadingIndicator="Loading…"
            variant="outlined"
            className={css.btn}
          >
            <span>Log in</span>
          </LoadingButton>
        </Form>
      </Formik>
    </>
  );
}
