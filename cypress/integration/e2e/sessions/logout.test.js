describe("Logout method", () => {
  it("Should logout successfully", () => {
    cy.visit("/");
    cy.loginAsUser();
    cy.logoutAsUser();
  });
});
