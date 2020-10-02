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
  cy.get("button.btn-login").contains("Iniciar sesión").click();

  cy.fixture("users/user.json").then((user) => {
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get(".fluid > button").click();
  });
});

const getHeaders = () => ({
  total: 25,
  "per-page": 9,
});
