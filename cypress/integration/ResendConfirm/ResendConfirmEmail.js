import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open page midtrans', () => {
  cy.visit('https://dashboard.midtrans.com/login')
})

When('I Resend Confirm Intrustruction', () => {
    cy.get(':nth-child(10) > a').click()
})

Then('I input email address', () => {
    cy.get('#user_email').type('sugitaaryandana@gmail.com')
})

And('I submit Send Link', () => {
    cy.get('#new_user > .l-btn').click()
})