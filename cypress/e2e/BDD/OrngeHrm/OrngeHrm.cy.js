import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("Visit the site",() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(4000)

})

When("Enter valid username and password",() => {
    cy.wait(4000)
    cy.get('[name="username"]').type("Admin")
    cy.get('[type="password"]').type("admin123")

})

And("Click on the submit button",() => {
    cy.get('[type="submit"]').click()

})

Then("Validate the {string}",(title) => {
    cy.get(".oxd-text.oxd-text--h6").should('have.text',title)

})

When("Enter invalid username and password",() => {
    cy.wait(4000)
    cy.get('[name="username"]').type("Admin12")
    cy.get('[type="password"]').type("admin")
})

Then("Validate the Error message",() => {
    cy.get(".oxd-alert-content-text").should("have.text",'Invalid credentials')
})