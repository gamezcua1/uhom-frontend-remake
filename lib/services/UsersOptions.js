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

export const rawInvitationRoles = [
  ["Agente inmobiliario", "real_estate_agent"],
  ["Asistente de soporte", "support_assistant"],
  ["Administrador", "admin"],
];

export const invitationRoles = rawInvitationRoles.map(([text, value]) => ({
  key: `role_${value}`,
  value: value,
  text: text,
}));
