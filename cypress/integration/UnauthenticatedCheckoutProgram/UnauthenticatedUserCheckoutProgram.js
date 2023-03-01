import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

//SCENARIO 2
Given('User navigates to the VIX detail page', () => {
    cy.visit('https://web-staging.rakamin.com/').wait(3000)
    cy.get('.sc-kfNCuK').click({force:true})
    cy.get('.sc-bsgCTs > [data-cy="vix-dropdown-menu"]').click({force:true})
    cy.get('.kfRvwY > [data-cy="explore-vix-navigation"]').click({force:true})
    cy.get('[data-cy="vix-card-2"] > .vacancy-card-link > .sc-GKYbw > .fGaJoL > .qtUrv').click({force:true})
})

When('User click “Daftar Sekarang”', () => {
    cy.get('[data-cy="register-vix-button"]').click({force:true})
    cy.get('[data-cy="login-first-button"]').click({force:true})
})

Then('User redirected to login page', () => {
    cy.get('[data-cy="login-email-text-field"]').type('sugitaaryandana@gmail.com')
    cy.get('[data-cy="login-password-text-field"]').type('A!1qwertyuiop')
})

When('User fill login credential and submit', () => {
    cy.get('[data-cy="login-submit-button"]').click({force:true})
})

Then('The system redirects user to VIX detail page', () => {
    cy.contains(`Selamat Datang di a , Gede !`)
})

And('User continue to checkout following Scenario#1', () => {
    cy.contains('Selesaikan berbagai tugas berikut, dapatkan sertifikat, dan buat dirimu diakui industri')
})

Given('User navigates to the VIX detail page', () => {
    cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/a').wait(5000)
})

And('User fill form application', () => {
    cy.get('[data-cy="register-vix-button"]').click({force:true})
    cy.get('[data-cy="phone-number-text-field"]').click({force:true})
    cy.get('[data-cy="phone-number-text-field"]').type('12345678910')
    cy.get('[data-cy="linkedin-url-text-field"]').click({force:true})
    cy.get('[data-cy="linkedin-url-text-field"]').type('https://linkedin.com/').wait(1000)
    cy.get('.sc-eJDSGI > path').click({force:true}).wait(2000)
    const p = 'patrick.png'
    cy.get('.sc-eoOUpm').attachFile(p)
    cy.get('[data-cy="vix-info-source-option-7"]').click({force:true})
    cy.get('.sc-dZTDFv').click({force:true})
    cy.get('.sc-dZTDFv').type('techinasian')
    cy.get('[data-cy="agreement-checkbox"]').click({force:true})
    cy.get('[data-cy="vix-form-submit-button"]').click({force:true}).wait(1000)
})

Then('The system showing modal confirmation', () => {
    cy.contains('Lanjutkan untuk mendaftar Program')
})

When('User confirmed to continue', () => {
    cy.get('[data-cy="button-confirm"]').click({force:true})
})

Then('The system redirect the user to checkout page', () => {
    cy.contains('Checkout')
})

And('User choose  VIP Access', () => {
    cy.contains('Get VIP Access')
    cy.get('[data-cy="thank-you-page-action-button"]').click({force:true})
})

Then('The system redirect to payment page', () => {
    cy.contains('Mohon selesaikan pembayaran Anda untuk bergabung dalam')
})
