Cypress.Commands.add("loadProperties", () => {
  cy.server();
  cy.route({
    url: /properties/,
    response: "fixture:properties/properties.json",
  });
});

Cypress.Commands.add("loadSingleProperty", () => {
  cy.server();
  cy.route({
    url: "/properties/*",
    response: "fixture:properties/property.json",
  });
});
