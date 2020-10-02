describe("Login", () => {
  context("Show form", () => {
    it("Should display the form if the user is not logged in", () => {
      cy.visit("/");
      cy.get("button.btn-login").contains("Iniciar sesión").click();
      cy.get("form#login").should("be.visible");
    });
  });

  context("Login as User", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.visitLogin();
    });

    it("Should mark as required when submit with both fields are empty", () => {
      cy.get('button[type="submit"]').click();

      const errors = cy.get("p.dark-error");
      errors.should("have.length", 2);
      errors.should("have.html", "⚠ Este campo es obligatorio");
    });

    it("Should mark error when credentials are incorrect", () => {
      cy.invalidLogin();
      cy.get("p.dark-error").should(
        "have.html",
        "La combinación de email y contraseña es incorrecta"
      );
    });

    it("Should be a successful login", () => {
      cy.loginAsUser();
      cy.get("span#avatar").should("be.visible");

      cy.getCookies()
        .should("have.length", 1)
        .then((cookie) => expect(cookie[0]).to.have.property("name", "uid"));
    });
  });
});
