import { useDispatch, useSelector } from "react-redux";

import ModalComponent from "../ModalComponent/ModalComponent";

import { deleteContact } from "../../redux/contacts/operations";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import { MdEdit } from "react-icons/md";

import { setCurrentContact } from "../../redux/contacts/slice";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { useState } from "react";

export default function Contact({ contactInfo: { name, number, id } }) {
  const currentContact = useSelector(selectCurrentContact);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shouldBeDisabled = currentContact ? true : false;

  const dispatch = useDispatch();

  const onDelete = () => {
    setIsModalOpen(true);
  };

  const onSureDelete = () => {
    dispatch(deleteContact(id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSetCurrentContact = () => {
    dispatch(setCurrentContact({ name, number, id }));
  };

  return (
    <>
      <p className="text-2xl font-semibold">{name}</p>
      <button
        type="button"
        aria-label="edit"
        onClick={onSetCurrentContact}
        disabled={shouldBeDisabled}
      >
        <MdEdit aria-label="delete" />
      </button>
      <button
        type="button"
        aria-label="delete"
        onClick={onDelete}
        disabled={shouldBeDisabled}
      ></button>
      <p className="text-2xl ">{number}</p>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={onSureDelete}
      />
    </>
  );
}
