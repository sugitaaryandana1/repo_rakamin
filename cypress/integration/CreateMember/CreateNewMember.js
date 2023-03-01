import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I open page midtrans', () => {
  cy.visit('https://demo.midtrans.com/').wait(7000)
})

When('I submit signup button', () => {
  cy.get('.midtrans-signup > .btn').invoke('removeAttr', 'target').click()
})

Then('I Input all field in form registration', () => {
  cy.get('#user_merchant_name').type('testingmidtrans')
  cy.get('#user_full_name').type('testingmidtrans')
  cy.get('#user_email').type('sugitaaryandana@gmail.com')
  cy.get('#user_phone').type('087567906667')
  cy.get('#user_password').type('A!1qwertyuiop')
  cy.get('#user_password_confirmation').type('A!1qwertyuiop')
})

And('I submit register', () => {
  cy.contains('Register').click()
})