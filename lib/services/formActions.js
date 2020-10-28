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
