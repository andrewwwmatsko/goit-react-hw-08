import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactList from "../../components/ContactList/ContactList";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { fetchContacts } from "../../redux/contacts/contactsOps";
import {
  selectCurrentContact,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

import css from "./ContactPage.module.css";
import EditForm from "../../components/EditForm/EditForm";

export default function Contactspage() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const currentContact = useSelector(selectCurrentContact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <section className={css.section}>
        <Layout>
          <div className={css.formWrapper}>
            {currentContact === null ? <ContactForm /> : <EditForm />}
          </div>
          <div className={css.searchWrapper}>
            <SearchBox />
          </div>
          {contacts.length > 0 && (
            <div className={css.contactsWrapper}>
              <ContactList contacts={contacts} />
            </div>
          )}
          {isLoading && <Loader />}
          {isError && <Error />}
        </Layout>
      </section>
    </main>
  );
}
