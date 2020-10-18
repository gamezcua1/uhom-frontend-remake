const cities = [
  "Armería",
  "Colima",
  "Comala",
  "Coquimatlán",
  "Cuauhtémoc",
  "Ixtlahuacán",
  "Manzanillo",
  "Minatitlan",
  "Tecomán",
  "Villa de Álvarez",
];

export const propertyRegistrationLocations = cities.map((e, i) => ({
  key: `location_${i}`,
  value: i,
  text: e,
}));

export const locations = ["Todos"]
  .concat(cities)
  .map((e, i) => ({ key: `location_${i}`, value: i, text: e }));

export const construction_area = [0, 100, 200, 300].map((e) => ({
  key: `square_${e}`,
  value: e,
  text: e === 0 ? "Todos" : e,
}));

export const price = [
  "0",
  "500,000",
  "1,000,000",
  "1,500,000",
  "2,000,000",
].map((e) => ({
  key: `price_${e}`,
  value: parseInt(e.split(",").join("")),
  text: e == "0" ? "Todos" : e,
}));

export const rooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({
  key: `room_${i}`,
  value: i,
  text: i === 0 ? "Todos" : i,
}));

export const bathrooms = [0, 1, 2, 3, 4, 5, 6].map((_p, i) => ({
  key: `bath_${i}`,
  value: i,
  text: i === 0 ? "Todos" : i,
}));
