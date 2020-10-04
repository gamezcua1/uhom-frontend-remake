Cypress.Commands.add("visitLogin", () => {
  cy.get("button.btn-login").contains("Iniciar sesión").click();
});

Cypress.Commands.add("loginAsUser", (validLogin = true) => {
  cy.visitLogin();
  cy.fixture("users/user.json").then((user) => {
    validLogin ? cy.mockLogin() : cy.mockInvalidLogin();
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);
    cy.get(".fluid > button").click();
  });
});

Cypress.Commands.add("invalidLogin", () => cy.loginAsUser(false));
