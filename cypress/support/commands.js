Cypress.Commands.add("loadProperties", (loadHeaders = false) => {
  cy.server();
  cy.route({
    method: "GET",
    url: /properties/,
    response: "fixture:properties/properties.json",
    headers: loadHeaders ? getHeaders() : null,
  });
});

Cypress.Commands.add("login", () => {});

const getHeaders = () => ({
  total: 25,
  "per-page": 9,
});
