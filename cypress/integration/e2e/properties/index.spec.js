describe("End-2-end tests for properties index", () => {
  context("Properties index access", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Should access through navbar", () => {
      cy.visitProperties();

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

    it("Should be able to navigate through paginator", () => {
      cy.visit("/properties");

      cy.get(".card").should("have.length", 9);
      const paginator = cy.get("#paginator");
      paginator.should("be.visible");
      paginator.contains("2");

      cy.get(".active.item").contains("1");
      cy.get("#paginator > .item:nth-child(4)").click();
      cy.get(".active.item").contains("2");
    });
  });
});
