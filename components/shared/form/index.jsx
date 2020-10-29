import React from "react";
import { Form } from "semantic-ui-react";
import { setFormActions } from "../../../lib/services/formActions";
import ButtonsGroup from "./actions/ButtonsGroup";

const GenericForm = ({
  children,
  id,
  customClasses,
  handleSubmit,
  onSubmit,
  onClose,
  isCancelable = true,
  action,
  withoutModal = false,
}) => {
  const {
    iconName,
    submitMessage,
    id: submitId,
    modalMessage,
    modalTitle,
    modalIcon,
  } = setFormActions(action);
  return (
    <Form id={id} className={`large ${customClasses || ""}`}>
      {children}
      <ButtonsGroup
        submitProps={{
          iconName,
          submitMessage,
          submitId,
          modalMessage,
          modalTitle,
          modalIcon,
        }}
        withoutModal={withoutModal}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onClose={onClose}
        isCancelable={isCancelable}
      />
    </Form>
  );
};

export default GenericForm;
