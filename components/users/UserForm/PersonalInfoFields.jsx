import React from "react";
import { Form } from "semantic-ui-react";

const PersonalInfoFields = ({ register, setValue, errors, required }) => (
  <>
    <Form.Field required={required}>
      <label htmlFor="names"> Nombre(s): </label>
      <div className="ui input">
        <input
          id="names"
          name="names"
          placeholder="Nombre(s)"
          ref={register}
          defaultValue={setValue("names")}
        />
      </div>
      {errors.names && <p className="dark-error">{errors.names.message}</p>}
    </Form.Field>

    <Form.Field required={required}>
      <label htmlFor="surnames"> Apellido(s): </label>
      <div className="ui input">
        <input
          id="surnames"
          name="surnames"
          placeholder="Apellido(s)"
          ref={register}
          defaultValue={setValue("surnames")}
        />
      </div>
      {errors.surnames && (
        <p className="dark-error">{errors.surnames.message}</p>
      )}
    </Form.Field>
  </>
);

export default PersonalInfoFields;
