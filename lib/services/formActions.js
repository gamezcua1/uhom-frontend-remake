export const setFormActions = (actionType) => {
  switch (actionType) {
    case "ADD_PROPERTY":
      return setSubmitProperties(
        "add",
        "Agregar propiedad",
        "submitProperty",
        "Antes de continuar, verifica que la información ingresada sea la correcta.",
        "Agregar nueva propiedad"
      );
    case "ADD_USER":
      return setSubmitProperties("home", "Registrarse", "signupUser");
    case "INVITE_USER":
      return setSubmitProperties(
        "envelope",
        "Invitar Colaborador",
        "inviteUser",
        "Antes de continuar, verifica que la información ingresada sea la correcta. Una vez enviada la invitación, es necesario la confirmación del usuario.",
        "Invitar colaborador",
        "envelope"
      );
    case "UPDATE_PROPERTY":
      return setSubmitProperties(
        "edit",
        "Actualizar cambios",
        "updateProperty",
        "Antes de continuar, verifica que la información ingresada sea la correcta.",
        "Actualizar información de la propiedad"
      );
    case "UPDATE_USER":
      return setSubmitProperties(
        "edit",
        "Actualizar",
        "updateInfo",
        "Antes de continuar, verifica que la información ingresada sea la correcta.",
        "Actualizar tu información personal"
      );
    default:
      return {};
  }
};

const setSubmitProperties = (
  iconName,
  submitMessage,
  id,
  modalMessage = "",
  modalTitle = "",
  modalIcon = "upload"
) => ({ iconName, submitMessage, id, modalMessage, modalTitle, modalIcon });
