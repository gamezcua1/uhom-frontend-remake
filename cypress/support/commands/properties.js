Cypress.Commands.add("visitProperties", () => {
  cy.get("a.item").contains("Propiedades").click();
  cy.loadProperties();
});
