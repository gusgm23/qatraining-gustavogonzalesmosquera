import { cardCVCInput, cardExpiryMonthInput, cardExpiryYearInput, cardNameInput, cardNumberInput, continueButton, orderSuccessMessage, payAndConfirmOrderButton } from "../pages/paymentPage"

export const filloutPaymentForm = (cardName, cardNumber, cardCVC, cardExpiryMonth, cardExpiryYear) => {
    cy.get(cardNameInput).type(cardName)
    cy.get(cardNumberInput).type(cardNumber)
    cy.get(cardCVCInput).type(cardCVC)
    cy.get(cardExpiryMonthInput).type(cardExpiryMonth)
    cy.get(cardExpiryYearInput).type(cardExpiryYear)
    cy.get(payAndConfirmOrderButton).click()
}

export const verifyPaymentSuccess = () => {
    cy.contains('p', orderSuccessMessage).should('be.visible')
    cy.get(continueButton).click()
}