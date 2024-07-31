import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import { FaUserLarge, FaPhone } from "react-icons/fa6";
import { useDisclosure } from "@nextui-org/modal";

import { deleteContact } from "../../redux/contacts/contactsOps";

import css from "./Contact.module.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import ModalComponent from "../ModalComponent/ModalComponent";
import { IconButton } from "@mui/material";

export default function Contact({ contactInfo: { name, number, id } }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = () => {
    onOpen();
  };

  const onSureDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    // <div className={css.container}>
    //   <div>
    //     <div className={css.contactsInfo}>
    // <FaUserLarge size={24} />
    //       <p className={css.name}>{name}</p>
    //     </div>

    //     <div className={css.contactsInfo}>
    //       <FaPhone size={24} />
    //       <p className={css.number}>{number}</p>
    //     </div>
    //   </div>
    // <IconButton aria-label="delete" onClick={onDelete}>
    //   <DeleteIcon />
    // </IconButton>
    // <ModalComponent
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   onDelete={onSureDelete}
    // />
    // </div>

    <Card className="max-w-[400px]">
      <CardHeader className="flex justify-between">
        <p className="text-2xl font-semibold">{name}</p>
        <IconButton aria-label="delete" onClick={onDelete}>
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
