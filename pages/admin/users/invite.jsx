import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import GenericContainer from "../../../components/shared/Container";
import GenericSuccessMessage from "../../../components/shared/GenericSuccessMessage";
import UserForm from "../../../components/users/UserForm";
import InvitationsController from "../../../controllers/InvitationsController";
import useAdminPermissions from "../../../lib/hooks/admins";
import { invitationValidations } from "../../../lib/validations/ValidationsSchemas";

const InviteUser = () => {
  useAdminPermissions();

  const [isSuccess, setSuccess] = useState(false);
  const handleInvitation = (user) => {
    InvitationsController.inviteCollaborator(user)
      .then(() => setSuccess(true))
      .catch((err) => console.log(err));
  };

  return (
    <GenericContainer>
      <GenericSuccessMessage
        header="Invitación enviada"
        content="La invitación ha sido enviada sin problemas"
        isVisible={isSuccess}
        setVisible={setSuccess}
      />
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
