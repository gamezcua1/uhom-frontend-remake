Cypress.Commands.add("visitLogin", () => {
  cy.get("button.btn-login").contains("Iniciar sesión").click();
});

Cypress.Commands.add("login", (user) => {
  cy.visitLogin();
  cy.get("#email").type(user.email || "");
  cy.get("#password").type(user.password || "");
  cy.get(".fluid > button").click();
});

Cypress.Commands.add("logoutAsUser", () => {
  cy.get("#avatar").click();
  cy.get(".logout").first().click();
});

Cypress.Commands.add("invalidLogin", () => cy.login({}));
