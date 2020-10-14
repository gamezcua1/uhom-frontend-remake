/// <reference types="cypress"/>
describe("Logout method", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should logout successfully", () => {
    cy.fixture("users.json").then(({ client }) => {
      cy.login(client);
      cy.get("span#loggedUserAvatar").first().should("exist");
      cy.logoutAsUser();
      cy.get("body").contains("Iniciar sesión");
    });
  });

  it("Should delete cookies successfully after logout", () => {
    cy.fixture("users.json").then(({ client }) => {
      cy.login(client);
      cy.wait(500);
      cy.getCookie("uid").should("exist");
      cy.logoutAsUser();
      cy.wait(500);
      cy.getCookie("uid").should("not.exist");
    });
  });
});
