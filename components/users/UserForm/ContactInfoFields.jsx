import React from "react";
import Cleave from "cleave.js/react";
import { Dropdown, Form } from "semantic-ui-react";
import { Controller } from "react-hook-form";
import { invitationRoles } from "../../../lib/services/UsersOptions";

const ContactInfoFields = ({
  control,
  errors,
  required,
  register,
  setValue,
  isInvitable,
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

      {isInvitable && (
        <Form.Field required={required}>
          <label htmlFor="role"> Rol: </label>
          <Controller
            control={control}
            name="role"
            render={({ onChange }) => (
              <Dropdown
                placeholder="Selecciona el rol"
                clearable
                search
                selection
                ref={register}
                options={invitationRoles}
                onChange={(_e, { value }) => onChange(value)}
              />
            )}
          />

          {errors.role && <p className="dark-error">{errors.role.message}</p>}
        </Form.Field>
      )}
    </Form.Group>

    {!isInvitable && (
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
    )}
  </>
);

export default ContactInfoFields;
