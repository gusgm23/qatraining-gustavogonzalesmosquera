import { addMessageText, addProductButton, checkoutButton, checkoutUrl, hoverProduct, shoppingCart, tittleItem, viewCartButton, viewCartUrl } from "../pages/productsPage"

export const addProductToCart = () => {
    cy.get(hoverProduct).last().realHover()
    cy.get(addProductButton).eq(1).click()
}

export const popUpViewCart = () => {
    cy.contains('p', addMessageText).should('be.visible')
    cy.get(viewCartButton).eq(1).click()
}

export const verifyCartPage = () => {
    cy.url().should('include', viewCartUrl)
}

export const proceedToCheckout = () => {
    cy.get(shoppingCart).should('be.visible')
    cy.get(tittleItem).should('be.visible')
    cy.get(checkoutButton).click()
}

export const verifyCheckoutPage = () => {
    cy.url().should('include', checkoutUrl)
}