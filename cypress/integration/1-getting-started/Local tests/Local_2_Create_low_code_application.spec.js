/// <reference types="cypress" />
const baseURL = Cypress.env('baseURL')

it('should be able to visit the page', () => {
    cy.visit(baseURL + '/')
})

it('should be able to enter login credentials', () => {
    cy.get('[data-test-id="input-email"]').type("bojan.svirkov@planetcrust.com") // Here in .type("Email") write your email address for your account
    cy.get('[data-test-id="input-password"]').type("Corteza123") // In .type("PASS") write the password for your account
})

it('should be able to login in', () => {
    cy.get('[data-test-id="button-login-and-remember"]').click()
    cy.visit(baseURL + '/compose/namespaces')
})


it('should be able to create a new namespace', () => {
    cy.get('[data-test-id="button-create"]').click()
    cy.get('[data-test-id="input-name"]').type("Cypress test namespace")    // in .type("Name") write the name of your namespace
    cy.get('[data-test-id="input-slug"]').type("Cypress_test_NS")  // in .type("handle") write the short name/handle of your namespace
    cy.get('[data-test-id="button-save-and-close"]').click()
})