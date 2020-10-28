import React from "react";
import Cleave from "cleave.js/react";
import { Form } from "semantic-ui-react";
import { Controller } from "react-hook-form";

const ContactInfoFields = ({
  control,
  errors,
  required,
  register,
  setValue,
}) => (
  <>
    <Form.Group widths="equal">
      <Form.Field required={required}>
        <label htmlFor="email"> Email: </label>
        <div className="ui input">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            ref={register}
            defaultValue={setValue("email")}
          />
        </div>
        {errors.email && <p className="dark-error">{errors.email.message}</p>}
      </Form.Field>

      <Form.Field required={required}>
        <label htmlFor="phone_number"> Celular: </label>
        <div className="ui input">
          <Controller
            as={
              <Cleave
                options={{
                  numericOnly: true,
                  blocks: [3, 3, 4],
                  delimiter: "-",
                }}
                placeholder="Celular"
              />
            }
            defaultValue={setValue("phone_number")}
            name="phone_number"
            control={control}
            id="phone_number"
          />
        </div>
        {errors.phone_number && (
          <p className="dark-error">{errors.phone_number.message}</p>
        )}
      </Form.Field>
    </Form.Group>

    <Form.Group widths="equal">
      <Form.Field required={required}>
        <label htmlFor="password"> Contraseña: </label>
        <div className="ui input">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            ref={register}
          />
        </div>
        {errors.password && (
          <p className="dark-error">{errors.password.message}</p>
        )}
      </Form.Field>

      <Form.Field required={required}>
        <label htmlFor="password_confirmation">Confirmar contraseña:</label>
        <div className="ui input">
          <input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            placeholder="Confirmar contraseña"
            ref={register}
          />
        </div>
        {errors.password_confirmation && (
          <p className="dark-error">{errors.password_confirmation.message}</p>
        )}
      </Form.Field>
    </Form.Group>
  </>
);

export default ContactInfoFields;
