describe("End-2-end test cases for Like button", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not be able to like property until user is log in", () => {
    cy.visitSingleProperty();
    cy.get("button.likeButton").click();

    cy.get("#signinFirst")
      .contains("¡Ups! Parece que aún no te has registrado ")
      .should("be.visible");
  });

  it("Should be able to like property when user is logged in", async () => {
    const { client } = await cy.fixture("users.json");
    cy.login(client);

    cy.visitSingleProperty();
    cy.get("button.likeButton").click();
  });
});
