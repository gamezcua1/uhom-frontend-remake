import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const GenericModal = ({
  title,
  iconName,
  message,
  onAccept,
  onDecline,
  button,
  openText,
  cancelText,
  acceptText,
}) => {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    setOpen(false);
    onAccept && onAccept();
  };

  const handleDecline = () => {
    setOpen(false);
    onDecline && onDecline();
  };

  const buttonElement = button || (
    <Button className="btn-login">{openText}</Button>
  );

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={buttonElement}
    >
      <Header icon>
        <Icon name={iconName} />
        {title}
      </Header>
      <Modal.Content>
        <p>{message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={handleDecline}>
          <Icon name="remove" /> {cancelText || "Cancelar"}
        </Button>
        <Button color="green" inverted onClick={handleAccept}>
          <Icon name="checkmark" /> {acceptText || "Aceptar"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default GenericModal;
