import { checkFullName, checkCompany, checkAddress, checkCity, checkCountry, checkPhone, checkProductName, placeOrderButton, paymentUrl } from "../pages/checkoutPage"

export const verifyPersonalInfo = () => {
    cy.contains('li', checkFullName).should('be.visible')
    cy.contains('li', checkCompany).should('be.visible')
    cy.contains('li', checkAddress).should('be.visible')
    cy.contains('li', checkCity).should('be.visible')
    cy.contains('li', checkCountry).should('be.visible')
    cy.contains('li', checkPhone).should('be.visible')
}

export const verifyPurchaseSummary = () => {
    cy.get(checkProductName).should('be.visible')
}

export const proceedToPayment = () => {
    cy.get(placeOrderButton).click()
}

export const verifyPaymentPage = () => {
    cy.url().should('include', paymentUrl)
}