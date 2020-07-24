describe("Test Form", () => {
  it("navigate to site", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });
});
it("Can type text", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get("[data-cy=input-name]");
});
it("Can select multiple toppings", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get("input[name=onion]").check().should("be.checked");
  cy.get("input[name=mushrooms]").check().should("be.checked");
});
it("can Submit", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get(".submit").should("be.disabled");
});

it("can Submit", () => {
  cy.visit("http://localhost:3000/pizza").wait(1000);
  cy.get(".submit").should("be.not.disabled");
});
