import React, { useState } from "react";
import UserInfo from "./UserInfo";
import session from "../../../fakeSession";
import Loading from "../../../../shared/loading";
import UserForm from "../../../../forms/UserForm";
import { Container, Header } from "semantic-ui-react";
import { useUserInfo } from "../../../../../lib/hooks/users";
import UsersController from "../../../../../controllers/UsersController";
import { cleanEmpties } from "../../../../../lib/hooks/dataFormater";

const InfoPane = ({ userId, bearerToken }) => {
  const [responseErrors, setErrors] = useState({});
  const [isEditable, setEdition] = useState(false);
  const { user, error } = useUserInfo(userId, bearerToken);

  const handleEdition = () => setEdition(!isEditable);

  const updateUserInfo = (data) => {
    const cleanData = cleanEmpties(data);
    UsersController.update(session.id, cleanData, session.authorization)
      .then(() => {
        // setLocalStorage(res, session.authorization)
        window.location.reload();
      })
      .catch((err) => setErrors(err.response.data.details));
  };

  if (error) return <h1>Error</h1>;
  if (!user) return <Loading />;
  return (
    <Container>
      <Header as="h1" textAlign="center">
        Información general
      </Header>
      {isEditable ? (
        <UserForm
          user={user}
          closeForm={handleEdition}
          isCancelable={true}
          submitMessage="Actualizar"
          iconName="edit"
          required={false}
          responseErrors={responseErrors}
          submitionHandler={updateUserInfo}
        />
      ) : (
        <UserInfo user={user} handleEdition={handleEdition} />
      )}
    </Container>
  );
};

export default InfoPane;
