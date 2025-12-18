import { checkFullName, checkCompany, checkAddress, checkCity, checkCountry, checkPhone, placeOrderButton, paymentUrl, checkProductName24, checkProductName29 } from "../pages/checkoutPage"

export const verifyPersonalInfo = () => {
    cy.contains('li', checkFullName).should('be.visible')
    cy.contains('li', checkCompany).should('be.visible')
    cy.contains('li', checkAddress).should('be.visible')
    cy.contains('li', checkCity).should('be.visible')
    cy.contains('li', checkCountry).should('be.visible')
    cy.contains('li', checkPhone).should('be.visible')
}

export const verifyPurchaseSummary = () => {
    cy.get(checkProductName24).should('be.visible')
}

export const proceedToPayment = () => {
    cy.get(placeOrderButton).click()
}

export const verifyPaymentPage = () => {
    cy.url().should('include', paymentUrl)
}

export const verifyPurchaseSummary29 = () => {
    cy.get(checkProductName29).should('be.visible')
}