import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { useId } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/contactsOps";

import css from "./ContactForm.module.css";

const notify = () => toast.success("Contact created!");

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, action) => {
    dispatch(addContact({ ...values }));
    notify();
    action.resetForm();
  };

  const FeedbackSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required")
        .trim(),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .trim(),
    },
    { strict: true }
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form noValidate className={css.container}>
        <div className={css.inputGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} id={nameId} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.inputGroup}>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.input} id={numberId} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
