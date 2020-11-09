import React from "react";
import { Button } from "semantic-ui-react";
import GenericModal from "../../GenericModal";

const Submit = ({ submitProps, handleSubmit, onSubmit, withoutModal }) => {
  const {
    iconName,
    submitMessage,
    submitId,
    modalMessage,
    modalTitle,
    modalIcon,
  } = submitProps;

  const submitButton = (
    <Button
      id={submitId}
      className="btn-login"
      type="submit"
      icon={iconName}
      content={submitMessage}
    />
  );

  if (withoutModal) return submitButton;

  return (
    <GenericModal
      button={submitButton}
      iconName={modalIcon}
      onAccept={handleSubmit(onSubmit)}
      title={modalTitle}
      message={modalMessage}
    />
  );
};

export default Submit;
