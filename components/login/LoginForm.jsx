import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { Button, Form } from "semantic-ui-react";

import { loginValidations } from "../../lib/validations/ValidationsSchemas";
import { LoginService } from "../../lib/services/session/AuthService";
import { UserContext } from "../../lib/context/UserContext";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const { login } = useContext(UserContext);
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(loginValidations),
  });

  const submit = async (data) => {
    const response = await LoginService(data, login);
    if (response && response.status === 200) router.push("/properties");
    if (response && response.status === 401)
      await setError("invalidKeys", {
        type: "serverResponse",
        message: "La combinación de email y contraseña es incorrecta",
      });
  };

  return (
    <Form className="large dark" onSubmit={handleSubmit(submit)}>
      {errors.invalidKeys && (
        <p className="dark-error fluid-error">{errors.invalidKeys.message}</p>
      )}
      <Form.Field required>
        <label htmlFor="email">Email:</label>
        <div className="ui input">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            ref={register}
          />
        </div>
        {errors.email && <p className="dark-error">{errors.email.message}</p>}
      </Form.Field>

      <Form.Field required>
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

      <div className="fluid">
        <Button className="btn-login" type="submit">
          Iniciar Sesión
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
