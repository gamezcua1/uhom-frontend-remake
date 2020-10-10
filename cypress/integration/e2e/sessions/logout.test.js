describe("Logout method", () => {
  it("Should logout successfully", async () => {
    const { client } = await cy.fixture("users.json");

    cy.visit("/");
    cy.login(client);
    cy.get("body").contains("Iniciar sesión").should("not.exist");
    cy.logoutAsUser();
    cy.get("body").contains("Iniciar sesión");
  });
});
