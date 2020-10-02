describe("End-2-end tests for properties show", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("a.item").contains("Propiedades").click();
  });

  it("Can navigate to a property detail", () => {
    cy.get(".extra.center.aligned.content > a").first().click();
    cy.get(".content").contains("¡Haz una cita, visita la casa!");
  });

  it("Cannot ask for a tour if user is not logged in", () => {
    cy.get(".extra.center.aligned.content > a").first().click();
    cy.get(".fluid > button").click();
    cy.get("body").contains("¡Ups! Parece que aún no te has registrado");
  });

  it("Can ask for a tour if user is logged in", () => {
    cy.loginAsUser();

    cy.get(".extra.center.aligned.content > a").first().click();
    cy.get(".fluid > button").click();
    cy.get("body")
      .contains("¡Ups! Parece que aún no te has registrado")
      .should("not.exist");
  });
});