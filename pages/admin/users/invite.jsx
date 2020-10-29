import React from "react";
import { Header } from "semantic-ui-react";
import GenericContainer from "../../../components/shared/Container";
import UserForm from "../../../components/users/UserForm";
import useAdminPermissions from "../../../lib/hooks/admins";
import { invitationValidations } from "../../../lib/validations/ValidationsSchemas";

const InviteUser = () => {
  useAdminPermissions();
  const handleInvitation = (user) => {
    console.log(user);
  };

  return (
    <GenericContainer>
      <Header as="h1" content="Agregar colaborador" textAlign="center" />
      <UserForm
        isCancelable
        isInvitable
        action="INVITE_USER"
        submitionHandler={handleInvitation}
        resolver={invitationValidations}
      />
    </GenericContainer>
  );
};

export default InviteUser;
