describe("ESS Login Functionality", () => {
  it("Successfully logs in with valid credentials", () => {
    // 1. Go to the website.
    // Cypress automatically uses the https://ess.lstvqatest.online/ from your .env file, so we can just use the root path here.
    cy.visit("/");

    // 2. Find the company id field and type your company id
    cy.get("#gl_comcde").clear().type("LSTVQATEST");

    // 3. Find the user id field and type the user id
    cy.get("#txtusrcde").type("SC-036");

    // 4. Find the password field and type the password
    cy.get("#txtusrpwd").type("123");

    // 4. Find the login button and click it
    cy.get("#btn_ess").click();

    // 5. Assert that the login was successful by checking for a specific element or text on the page after login
    cy.get(".ajs-content").should("contain", "Successfully logged in");
  });
});
