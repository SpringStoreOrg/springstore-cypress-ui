describe("fractalwoodstories.com - Homepage", () => {
  it("should load the homepage and display the correct elements", () => {
    cy.visit("/");
    cy.title().should("include", "Home | FractalWoodStories");
    cy.contains("h1", "Wood stories.").should("be.visible");
    cy.get('[data-cy="navbar-home"]').should("have.text", "Acasă");
    cy.get("nav").should("be.visible");

    cy.get('[data-cy="logo-img"]')
      .should("have.prop", "tagName", "IMG")
      .and("have.attr", "src")
      .and("include", "/assets/images/logo9.png");

    cy.get("footer").should("be.visible");
  });
});
