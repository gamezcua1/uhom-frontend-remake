describe("End-2-end tests for users show", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can see its profile", () => {
    cy.loginAsUser();

    cy.get("#loggedUserAvatar").click();
    const menu = cy.get("#userProfile");
    menu.contains("Mi Perfil");
    cy.get("#userProfile").click();

    cy.get(".body-container").should("not.contain", "Error");
  });

  it("User can see its profile", () => {
    cy.loginAsUser();
    cy.get("#loggedUserAvatar").click();
    cy.get("#userProfile").click();

    cy.get(".btn-signin").click();
    cy.get(".body-container").contains("Actualizar");

    cy.get("#names").clear().type("Juanito");
    cy.get("#surnames").clear().type("Perez");
    cy.get(".btn-login").click();

    cy.wait(1000);
    cy.get(".body-container").contains("Juanito");
    cy.get(".body-container").contains("Perez");
  });
});