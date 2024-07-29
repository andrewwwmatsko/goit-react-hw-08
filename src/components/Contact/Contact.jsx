import { FaUserLarge, FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ contactInfo: { name, number, id } }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div>
        <div className={css.contactsInfo}>
          <FaUserLarge size={24} />
          <p className={css.name}>{name}</p>
        </div>

        <div className={css.contactsInfo}>
          <FaPhone size={24} />
          <p className={css.number}>{number}</p>
        </div>
      </div>

      <button type="button" className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
