Cypress.Commands.add("visitLogin", () => {
  cy.get("button.btn-login").contains("Iniciar sesión").click();
});

Cypress.Commands.add("loginAsUser", (invalidUser = {}) => {
  cy.fixture("users/user.json").then((user) => {
    const { email, password } = invalidUser;

    cy.get("#email").type(email || user.email);
    cy.get("#password").type(password || user.password);
    cy.get(".fluid > button").click();
  });
});

Cypress.Commands.add("invalidLogin", (invalidUser) =>
  cy.loginAsUser(invalidUser)
);
