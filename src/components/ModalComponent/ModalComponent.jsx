import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { FaUserAlt } from "react-icons/fa";

export default function ModalComponent({ isOpen, onClose, onDelete }) {
  return (
    <Modal
      backdrop={"blur"}
      placement="center"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Really?</ModalHeader>
            <ModalBody>
              <p>Are you sure that you want to delete the contact?</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="danger"
                variant="bordered"
                startContent={<FaUserAlt />}
                onPress={() => {
                  onDelete();
                  onClose();
                }}
              >
                Delete user
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
