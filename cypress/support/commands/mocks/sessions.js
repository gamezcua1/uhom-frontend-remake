Cypress.Commands.add("mockLogin", () => {
  cy.server();
  cy.route({
    method: "POST",
    url: "/login",
    response: "fixture:users/loggedUser.json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwMTY2MDM3NCwiZXhwIjoxNjA0MjkwMTIwLCJqdGkiOiIwZDhkZjMxNC1kNjg2LTQ2Y2MtYmNkNy1mODI5MmM0ZTljNTQifQ.3TRo8l8YKOBh9_Z7FmgruRI5iDSVvVzNOGjcgIZ5dXw",
    },
  });
});

Cypress.Commands.add("mockLogout", () => {
  cy.server();
  cy.route({
    method: "DELETE",
    url: "/logout",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwMTY2MDM3NCwiZXhwIjoxNjA0MjkwMTIwLCJqdGkiOiIwZDhkZjMxNC1kNjg2LTQ2Y2MtYmNkNy1mODI5MmM0ZTljNTQifQ.3TRo8l8YKOBh9_Z7FmgruRI5iDSVvVzNOGjcgIZ5dXw",
    },
  });
});

Cypress.Commands.add("mockInvalidLogin", () => {
  cy.server();
  cy.route({
    method: "POST",
    url: "/login",
    response: "Invalid Email or password.",
    status: 401,
  });
});

Cypress.Commands.add("mockMe", () => {
  cy.server();
  cy.route({
    method: "GET",
    url: "/me",
    response: "fixture:users/loggedUser.json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwMTY2MDM3NCwiZXhwIjoxNjA0MjkwMTIwLCJqdGkiOiIwZDhkZjMxNC1kNjg2LTQ2Y2MtYmNkNy1mODI5MmM0ZTljNTQifQ.3TRo8l8YKOBh9_Z7FmgruRI5iDSVvVzNOGjcgIZ5dXw",
    },
  });
});
