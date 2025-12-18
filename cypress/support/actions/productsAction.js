import { addMessageText, addProductButton, addToCartButtonProduct29, checkoutButton, checkoutUrl, hoverProduct, nameProductBrand29, priceProductBrand29, productBrand29, reviewEmailInput, reviewNameInput, reviewSubmitButton, reviewSuccessMessage, reviewTextInput, shoppingCart, tittleItem, viewCartButton, viewCartLinkProduct29, viewCartUrl } from "../pages/productsPage"

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

export const verifyProductKidsDetails = () => {
    cy.get(tittleItem).should('be.visible')
}
export const proceedToCheckout = () => {
    cy.get(shoppingCart).should('be.visible')
    cy.get(checkoutButton).click()
}

export const verifyCheckoutPage = () => {
    cy.url().should('include', checkoutUrl)
}

// Group 2 - Purchase from brand and send review
export const viewProductDetails = () => {
    cy.get(productBrand29).click()
    cy.contains('h2', nameProductBrand29).should('be.visible')
    cy.contains('span', priceProductBrand29).should('be.visible')
}

export const sendReview = (reviewName, reviewEmail, reviewText) => {
    cy.get(reviewNameInput).type(reviewName)
    cy.get(reviewEmailInput).type(reviewEmail)
    cy.get(reviewTextInput).type(reviewText)
    cy.get(reviewSubmitButton).click()
    cy.contains('span', reviewSuccessMessage).should('be.visible')
}

export const addToCartProduct = () => {
    cy.get(addToCartButtonProduct29).click()
    cy.get(viewCartLinkProduct29).eq(1).click()
}