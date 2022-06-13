import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I open page midtrans', () => {
  cy.visit('https://dashboard.midtrans.com/login')
})

When('I input Username and Password', () => {
    cy.get('#user_email').type('sugitaaryandana@gmail.com')
    cy.get('#user_password').type('A!1qwertyuiop')
})

Then('I submit login', () => {
    cy.get('#new_user > .l-btn').click()
})