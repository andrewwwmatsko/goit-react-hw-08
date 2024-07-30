import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import ContactForm from "../../components/ContactForm/ContactForm";

import css from "./ContactPage.module.css";

export default function Contactspage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <section className={css.section}>
        <div className={css.formWrapper}>
          <ContactForm />
        </div>
        <ContactList contacts={contacts} />
      </section>
    </main>
  );
}
