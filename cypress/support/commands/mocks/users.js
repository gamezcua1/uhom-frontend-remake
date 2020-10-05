Cypress.Commands.add("loadProfile", () => {
  cy.server();
  cy.route({
    url: "/users/*",
    response: "fixture:users/user.json",
  });
});

Cypress.Commands.add("loadUpdatedProfile", () => {
  cy.server();
  cy.route({
    url: "/users/*",
    response: "fixture:users/updatedLoggedUser.json",
  });
});

Cypress.Commands.add("mockProfileUpdate", () => {
  cy.server();
  cy.route({
    method: "PATCH",
    url: "/users/*",
    response: "fixture:users/updatedLoggedUser.json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwMTY2MDM3NCwiZXhwIjoxNjA0MjkwMTIwLCJqdGkiOiIwZDhkZjMxNC1kNjg2LTQ2Y2MtYmNkNy1mODI5MmM0ZTljNTQifQ.3TRo8l8YKOBh9_Z7FmgruRI5iDSVvVzNOGjcgIZ5dXw",
    },
  });
});
