describe("End-2-end tests for properties index", () => {
  context("Properties index access", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Should access through navbar", () => {
      cy.get("a.item").contains("Propiedades").click();
      cy.loadProperties();

      cy.location().should((location) =>
        expect(location.pathname).to.eql("/properties")
      );
    });

    it("Should access through the banner's button", () => {
      cy.get("a.btn-primary").contains("Nuestras casas").click();
      cy.loadProperties();

      cy.location().should((location) =>
        expect(location.pathname).to.eql("/properties")
      );
    });
  });
});
