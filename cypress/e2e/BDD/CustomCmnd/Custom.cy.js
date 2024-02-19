import {Given} from "cypress-cucumber-preprocessor/steps"

Given('Visiting the OrangeHRM site & login with valid credentials',() =>{
    cy.loginHRM('Admin', 'admin123')
})

Given('Visit Practice Automation Site login with {string} and {string} & Dashboard should be visible',(username,password) =>{
    cy.loginPracAutSite(username,password)
})