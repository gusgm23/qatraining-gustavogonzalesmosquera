import { addMessageText, addProductButton, hoverProduct, viewCartButton, viewCartUrl } from "../pages/productsPage"

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
