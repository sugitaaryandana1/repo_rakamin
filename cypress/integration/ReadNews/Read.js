import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I open page midtrans', () => {
  cy.visit('https://dashboard.midtrans.com/login')
})

When('I Read News', () => {
    cy.get(':nth-child(1) > .l-news-content > .l-news-text > a').click()
})

Then('System wiil show News', () => {
    cy.get('#onetrust-accept-btn-handler').click()
})