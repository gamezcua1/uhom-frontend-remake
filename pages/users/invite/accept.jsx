import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Container, Divider } from "semantic-ui-react";
import InvalidToken from "../../../components/invitation/InvalidToken";
import FormLogoHeader from "../../../components/shared/FormLogoHeader";
import Loading from "../../../components/shared/loading";
import UserForm from "../../../components/users/UserForm";
import InvitationsController from "../../../controllers/InvitationsController";
import { UserContext } from "../../../lib/context/UserContext";
import useInvitedUser from "../../../lib/hooks/invitations";
import { LoginService } from "../../../lib/services/session/AuthService";
import { rawInvitationRoles } from "../../../lib/services/UsersOptions";
import { invitedValidations } from "../../../lib/validations/ValidationsSchemas";

const Accept = () => {
  const router = useRouter();
  const { token } = router.query;

  const response = useInvitedUser(token);
  const { login } = useContext(UserContext);

  const { data, status } = response;
  const { names, surnames, role, email } = data || {};
  const [errors, setErrors] = useState({});

  const getRole = () => {
    const filteredArray = rawInvitationRoles.filter(
      ([_value, key]) => key === role // eslint-disable-line no-unused-vars
    );
    return filteredArray[0][0];
  };

  const handleSuscribtion = (user) => {
    user.invitation_token = token;
    InvitationsController.update(user)
      .then(async () => {
        await LoginService(
          {
            email: email,
            password: user.password,
          },
          login
        );
      })
      .catch((err) => setErrors(err.response.data.details));
  };

  if (!status) return <Loading dark />;
  if (status !== 200) return <InvalidToken />;
  return (
    <div className="dark-bg-solid">
      <FormLogoHeader
        message={`¡Bienvenido a nuestro equipo, ${names} ${surnames}!`}
      />
      <Container className="dark text" textAlign="justified">
        <p>
          Has sido invitado a formar parte de nuestro equipo de trabajo en el
          rol de &quot;{getRole()}&quot;. Sólo es necesario que completes la
          información necesaria.
        </p>
      </Container>
      <Divider hidden />

      <UserForm
        customClasses="dark"
        user={data}
        action="ADD_USER"
        withoutModal
        isCancelable={false}
        resolver={invitedValidations}
        isInvited
        submitionHandler={handleSuscribtion}
        responseErrors={errors}
      />
    </div>
  );
};

export default Accept;
