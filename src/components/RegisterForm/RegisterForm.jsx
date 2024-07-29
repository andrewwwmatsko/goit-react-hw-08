import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/opeartions";
import css from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  const FeedbackSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string().min(6, "Too Short!").required("Required"),
    },
    { strict: true }
  );

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <h2 className={css.heading}>Registration</h2>
          <div className={css.inputWrapper}>
            <label htmlFor={nameId} className={css.label}>
              Name
            </label>
            <Field id={nameId} name="name" className={css.input} />
            <ErrorMessage
              name="username"
              component="span"
              className={css.error}
            />
          </div>

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
              id={passwordId}
              type="password"
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
