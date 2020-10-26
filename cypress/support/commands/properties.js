Cypress.Commands.add("visitProperties", () => {
  cy.get("a.item").contains("Propiedades").click();
});

Cypress.Commands.add("visitSingleProperty", () => {
  cy.visitProperties();
  cy.get(".extra.center.aligned.content > a").first().click();
  cy.wait(2000);
});
