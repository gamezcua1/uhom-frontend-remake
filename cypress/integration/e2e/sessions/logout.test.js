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
});
