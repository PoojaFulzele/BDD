import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"


Given("visiting the site",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

})

When("searching the product which starts with ca",()=>{
    cy.get('.search-keyword').type('ca')
    cy.get('.search-button').click()

})

And("add to cart Cashews",()=>{
    cy.get('h4[class="product-name"]').each((el,index,arr) => {
         // cy.log(el.text())
        // el.text().replace(' - 1 Kg', ' ').trim()  // Cashews 
        if(el.text().replace(' - 1 Kg', ' ').trim() == 'Cashews' ){
             // cy.get(':nth-child(4) > .product-action > button').click()
             cy.get('[class="product-action"] button').eq(index).click({force:true})

        }
    })

})

When("place order and select country",()=>{
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()

})

Then("validate the thank you message",()=>{
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

})