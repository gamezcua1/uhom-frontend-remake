import React from "react";
import { useEffect } from "react";
import Cleave from "cleave.js/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button, Divider, Form, Icon } from "semantic-ui-react";
import {
  notRequiredValidations,
  signupValidations,
  validationsAfterSubmit,
} from "../../lib/services/validations/ValidationsSchemas";

const UserForm = ({
  user,
  isCancelable,
  closeForm,
  submitionHandler,
  responseErrors,
  iconName,
  submitMessage,
  required = true,
  customClasses,
}) => {
  const setResolver = () =>
    required ? signupValidations : notRequiredValidations;
  const { control, errors, handleSubmit, register, setError } = useForm({
    resolver: yupResolver(setResolver()),
  });

  useEffect(() => {
    if (responseErrors) {
      validationsAfterSubmit(
        responseErrors
      ).forEach(({ name, type, message }) => setError(name, { type, message }));
    }
  }, [responseErrors]);

  const setValue = (field) =>
    user && user[`${field}`] ? user[`${field}`] : null;

  return (
    <>
      <Form
        className={`large ${customClasses || ""}`}
        onSubmit={handleSubmit(submitionHandler)}
      >
        <Form.Field required={required}>
          <div className="ui input">
            <label htmlFor="names"> Nombre(s): </label>
            <input
              name="names"
              placeholder="Nombre(s)"
              ref={register}
              defaultValue={setValue("names")}
            />
          </div>
          {errors.names && <p className="dark-error">{errors.names.message}</p>}
        </Form.Field>

        <Form.Field required={required}>
          <div className="ui input">
            <label htmlFor="surnames"> Apellido(s): </label>
            <input
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

        <Form.Group widths="equal">
          <Form.Field required={required}>
            <div className="ui input">
              <label htmlFor="email"> Email: </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                ref={register}
                defaultValue={setValue("email")}
              />
            </div>
            {errors.email && (
              <p className="dark-error">{errors.email.message}</p>
            )}
          </Form.Field>

          <Form.Field required={required}>
            <div className="ui input">
              <label htmlFor="phone_number"> Celular: </label>
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
              />
            </div>
            {errors.phone_number && (
              <p className="dark-error">{errors.phone_number.message}</p>
            )}
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field required={required}>
            <div className="ui input">
              <label htmlFor="password"> Contraseña: </label>
              <input
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
            <div className="ui input">
              <label htmlFor="password_confirmation">
                {" "}
                Confirmar contraseña:{" "}
              </label>
              <input
                name="password_confirmation"
                type="password"
                placeholder="Confirmar contraseña"
                ref={register}
              />
            </div>
            {errors.password_confirmation && (
              <p className="dark-error">
                {errors.password_confirmation.message}
              </p>
            )}
          </Form.Field>

          <div></div>
        </Form.Group>
        <div className="fluid">
          <Button className="btn-login" type="submit" icon>
            <Icon name={iconName} /> {submitMessage}
          </Button>
          {isCancelable ? (
            <>
              <Divider hidden />
              <Button onClick={closeForm} className="btn-signin" icon>
                <Icon name="undo" /> Regresar
              </Button>
            </>
          ) : (
            ""
          )}
        </div>
      </Form>
    </>
  );
};

export default UserForm;
