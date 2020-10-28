import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "semantic-ui-react";
import {
  notRequiredValidations,
  signupValidations,
} from "../../../lib/validations/ValidationsSchemas";
import { setFormResolver } from "../../../lib/validations/resolver";
import PersonalInfoFields from "./PersonalInfoFields";
import ContactInfoFields from "./ContactInfoFields";
import { useErrorsAfterSubmit } from "../../../lib/hooks/forms";
import GenericForm from "../../shared/form";

const UserForm = ({
  user,
  isCancelable,
  closeForm,
  submitionHandler,
  responseErrors,
  required = true,
  customClasses,
  action,
}) => {
  const { control, errors, handleSubmit, register, setError } = useForm({
    resolver: setFormResolver(
      required,
      signupValidations,
      notRequiredValidations
    ),
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
    >
      <Form.Field>
        <label htmlFor="avatar">Avatar:</label>
        <input type="file" name="avatar" accept="image/*" ref={register} />
      </Form.Field>

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
      />
    </GenericForm>
  );
};

export default UserForm;
