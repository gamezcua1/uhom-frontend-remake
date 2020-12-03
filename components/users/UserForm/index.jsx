import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "semantic-ui-react";
import { setFormResolver } from "../../../lib/validations/resolver";
import PersonalInfoFields from "./PersonalInfoFields";
import ContactInfoFields from "./ContactInfoFields";
import { useErrorsAfterSubmit } from "../../../lib/hooks/forms";
import GenericForm from "../../shared/form";

const UserForm = ({
  user,
  isCancelable,
  isInvitable,
  isInvited,
  resolver,
  closeForm,
  submitionHandler,
  responseErrors,
  required = true,
  customClasses,
  action,
  withoutModal,
}) => {
  const { control, errors, handleSubmit, register, setError } = useForm({
    resolver: setFormResolver(resolver),
  });

  useErrorsAfterSubmit(responseErrors, setError);

  const setValue = (field) =>
    user && user[`${field}`] ? user[`${field}`] : null;

  return (
    <GenericForm
      id="userForm"
      customClasses={customClasses}
      handleSubmit={handleSubmit}
      onSubmit={submitionHandler}
      isCancelable={isCancelable}
      action={action}
      onClose={closeForm}
      withoutModal={withoutModal}
    >
      {!isInvitable && (
        <Form.Field>
          <label htmlFor="avatar">Avatar:</label>
          <input type="file" name="avatar" accept="image/*" ref={register} />
        </Form.Field>
      )}

      <PersonalInfoFields
        register={register}
        setValue={setValue}
        errors={errors}
        required={required}
      />

      <ContactInfoFields
        control={control}
        errors={errors}
        required={required}
        register={register}
        setValue={setValue}
        isInvitable={isInvitable}
        isInvited={isInvited}
      />
    </GenericForm>
  );
};

export default UserForm;
