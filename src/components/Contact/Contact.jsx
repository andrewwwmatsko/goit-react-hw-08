import { useDispatch, useSelector } from "react-redux";

import { useDisclosure } from "@nextui-org/modal";

import { Card, CardHeader, CardBody } from "@nextui-org/react";

import ModalComponent from "../ModalComponent/ModalComponent";

import { deleteContact } from "../../redux/contacts/contactsOps";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { setCurrentContact } from "../../redux/contacts/contactsSlice";
import { selectCurrentContact } from "../../redux/contacts/selectors";

export default function Contact({ contactInfo: { name, number, id } }) {
  const currentContact = useSelector(selectCurrentContact);

  const shouldBeDisabled = currentContact ? true : false;

  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = () => {
    onOpen();
  };

  const onSureDelete = () => {
    dispatch(deleteContact(id));
  };

  const onSetCurrentContact = () => {
    dispatch(setCurrentContact({ name, number, id }));
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex justify-between">
        <p className="text-2xl font-semibold">{name}</p>
        <IconButton
          aria-label="edit"
          onClick={onSetCurrentContact}
          disabled={shouldBeDisabled}
        >
          <MdEdit aria-label="delete" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={onDelete}
          disabled={shouldBeDisabled}
        >
          <DeleteIcon />
        </IconButton>
      </CardHeader>
      <CardBody>
        <p className="text-2xl ">{number}</p>
      </CardBody>
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        onDelete={onSureDelete}
      />
    </Card>
  );
}
