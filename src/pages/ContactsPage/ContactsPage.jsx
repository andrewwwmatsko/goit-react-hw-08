import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

import css from "./ContactPage.module.css";

export default function Contactspage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <section className={css.section}>
        <div className={css.formWrapper}>
          <ContactForm />
        </div>
        <div className={css.searchWrapper}>
          <SearchBox />
        </div>
        <div className={css.contactsWrapper}>
          <ContactList contacts={contacts} />
        </div>
      </section>
    </main>
  );
}
