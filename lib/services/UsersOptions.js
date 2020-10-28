export const roles = [
  ["Todos", ""],
  ["Usuario", "user"],
  ["Agente", "real_estate_agent"],
  ["Administrador", "admin"],
].map(([text, value]) => ({
  key: `location_${value}`,
  value: value,
  text: text,
}));
