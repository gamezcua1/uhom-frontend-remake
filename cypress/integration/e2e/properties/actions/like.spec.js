describe("End-2-end test cases for Like button", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not be able to like property until user is log in", () => {
    cy.visitSingleProperty().then(() => {
      cy.get("button.likeButton").click();

      cy.get("#signinFirst")
        .contains("¡Ups! Parece que aún no te has registrado ")
        .should("be.visible");
    });
  });

  it("Should be able to like property when user is logged in", () => {
    cy.loginAsUser();
    cy.visitSingleProperty().then(() => {
      cy.mockLikeRequest();
      cy.get("button.likeButton").click();
    });
  });
});
