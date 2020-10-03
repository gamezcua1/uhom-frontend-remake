describe("End-2-end test cases for Like button", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visitProperties();
  });

  it("Should not be able to like property until user is log in", () => {
    cy.get("button.ui.red.basic.icon.button").first().click();

    cy.get("#signinFirst")
      .contains("¡Ups! Parece que aún no te has registrado ")
      .should("be.visible");
  });
});
