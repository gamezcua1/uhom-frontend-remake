Cypress.Commands.add("visitProperties", () => {
  cy.get("a.item").contains("Propiedades").click();
  cy.loadProperties();
});

Cypress.Commands.add("visitSingleProperty", () => {
  cy.visitProperties();
  cy.get(".extra.center.aligned.content > a").first().click();
  cy.loadSingleProperty().as("loadSingleProperty");
  cy.wait("@loadSingleProperty");
});
