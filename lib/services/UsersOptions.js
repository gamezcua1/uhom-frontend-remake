export const roles = [
  ["Todos", ""],
  ["Usuario", "user"],
  ["Agente", "real_estate_agent"],
  ["Administrador", "admin"],
].map(([text, value]) => ({
  key: `role_${value}`,
  value: value,
  text: text,
}));

export const invitationRoles = [
  ["Agente inmobiliario", "real_state_agent"],
  ["Asistente de soporte", "support_assistant"],
  ["Administrador", "admin"],
].map(([text, value]) => ({
  key: `role_${value}`,
  value: value,
  text: text,
}));
