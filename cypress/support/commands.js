Cypress.Commands.add("loadProperties", (loadHeaders = false) => {
  cy.server();
  cy.route({
    method: "GET",
    url: /properties/,
    response: "fixture:properties/properties.json",
    headers: loadHeaders ? getHeaders() : null,
  });
});

Cypress.Commands.add("loginAsUser", () => {
  cy.visit("/login");

  cy.get("#email").type("johndoe@gmail.com");
  cy.get("#password").type("Thisisavalidpassw0rd");
  cy.get(".fluid > button").click();
});

const getHeaders = () => ({
  total: 25,
  "per-page": 9,
});
