import { Given, When, And, Then, Before } from "cypress-cucumber-preprocessor/steps"
import Homepage from "../PracticeAutomation/home"

let selector = new Homepage

let email = `${(Math.random()*20)}Pooja.@test.com`

let userdata = undefined
Before(function(){
    cy.fixture('info').then(function(user){
        userdata = user
    })
})

Given('Visiting the Practice Automation page',() =>{
    selector.VisitUrl(selector.selector.prcauto)
    selector.ClickOnBtn(selector.selector.signUp)
    selector.ValidateText(selector.selector.signUpText,'New User Signup!')
    selector.SignUpUser(userdata.pooja.firstName,email)

})

When('Fill the information for creating new user',() =>{
    selector.CreateUser(userdata.pooja)

})

Then('Validating the new user created message',() =>{
    selector.ClickOnBtn(selector.selector.signUp)
    selector.ClickOnBtn(selector.selector.signUp)
    selector.login(email, userdata.pooja)

})