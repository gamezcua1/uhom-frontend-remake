Cypress.Commands.add("mockLikeRequest", () => {
  cy.server();
  cy.route({
    method: "POST",
    url: "/properties/**/like",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTYwMTY2MDM3NCwiZXhwIjoxNjA0MjkwMTIwLCJqdGkiOiIwZDhkZjMxNC1kNjg2LTQ2Y2MtYmNkNy1mODI5MmM0ZTljNTQifQ.3TRo8l8YKOBh9_Z7FmgruRI5iDSVvVzNOGjcgIZ5dXw",
    },
    status: 204,
  });
});
