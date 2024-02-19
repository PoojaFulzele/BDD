import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import Homepage from "../PracticeAutomation/home"

let selector = new Homepage



Given('open the site',()=>{
    selector.VisitUrl(selector.selector.EcommUrl)

})

When('searching the product which starts from {string}',(value) =>{
    selector.SearchProduct(value)

})

And('add to  the cart {string}',(product) =>{
    selector.SelectProduct(product)

})

When('place  the order and select country',() =>{
    selector.PlaceOrder()

})

Then('validates the thank you message',() =>{
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

})