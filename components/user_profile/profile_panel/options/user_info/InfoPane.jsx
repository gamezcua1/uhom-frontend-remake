import React, { useState, useContext } from "react";
import UserInfo from "./UserInfo";
import Loading from "../../../../shared/loading";
import UserForm from "../../../../users/UserForm";
import { Container, Header } from "semantic-ui-react";
import { useUserInfo } from "../../../../../lib/hooks/users";
import UsersController from "../../../../../controllers/UsersController";
import { cleanEmpties } from "../../../../../lib/hooks/dataFormater";
import { UserContext } from "../../../../../lib/context/UserContext";
import { notRequiredValidations } from "../../../../../lib/validations/ValidationsSchemas";

const InfoPane = ({ userId, bearerToken }) => {
  const { currentUser } = useContext(UserContext);
  const [responseErrors, setErrors] = useState({});
  const [isEditable, setEdition] = useState(false);
  const { user, error } = useUserInfo(userId, bearerToken);

  const handleEdition = () => setEdition(!isEditable);
  const isSameUser = () => currentUser.uuid === userId;

  const updateUserInfo = (data) => {
    const cleanData = cleanEmpties(data);
    UsersController.update(currentUser.uuid, cleanData)
      .then(() => {
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
      {isEditable && isSameUser() ? (
        <UserForm
          resolver={notRequiredValidations}
          user={user}
          closeForm={handleEdition}
          required={false}
          responseErrors={responseErrors}
          submitionHandler={updateUserInfo}
          action="UPDATE_USER"
        />
      ) : (
        <UserInfo
          user={user}
          handleEdition={handleEdition}
          canEdit={isSameUser()}
        />
      )}
    </Container>
  );
};

export default InfoPane;
