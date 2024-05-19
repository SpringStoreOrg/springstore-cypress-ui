describe("Login Test", () => {
  let user;
  before(() => {
    cy.fixture("user").then((fData) => {
      user = fData;
    });
  });

  it("should allow a user to log in with valid credentials", function () {
    cy.visit("/");
    cy.get('button[aria-label="person-outline-button"]').click();  
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get("form").submit();
    cy.get('button[data-cy="avatar-logged"]').should('have.text', user.expectedInitials);
  });
});
