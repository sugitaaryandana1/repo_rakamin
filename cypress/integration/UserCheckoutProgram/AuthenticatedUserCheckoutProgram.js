import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('User navigates to the VIX detail page', () => {
  cy.visit('https://web-staging.rakamin.com/').wait(2000)
  cy.get('.sc-kfNCuK').click({force:true})
  cy.get('.sc-bsgCTs > [data-cy="vix-dropdown-menu"]').click({force:true})
  cy.get('.kfRvwY > [data-cy="explore-vix-navigation"]').click({force:true})
})

And('User fill form application', () => {
  cy.get('.midtrans-signup > .btn').invoke('removeAttr', 'target').click()
})

Then('The system showing modal confirmation', () => {
  cy.get('#user_merchant_name').type('testingmidtrans')
  cy.get('#user_full_name').type('testingmidtrans')
  cy.get('#user_email').type('sugitaaryandana@gmail.com')
  cy.get('#user_phone').type('087567906667')
  cy.get('#user_password').type('A!1qwertyuiop')
  cy.get('#user_password_confirmation').type('A!1qwertyuiop')
})

When('User confirmed to continue', () => {
  cy.contains('Register').click()
})

Then('The system redirect the user to checkout page', () => {
  cy.contains('Register').click()
})

And('User choose  VIP Access', () => {
  cy.contains('Register').click()
})

And('The system redirect to payment page', () => {
  cy.contains('Register').click()
})