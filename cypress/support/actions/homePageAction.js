import { kidsCategoryHeader, kidsCategoryOption, topsShirtOption } from "../pages/homePage"
import { brandOption, brandHeader } from "../pages/homePage"

export const kidsproducts = () => {
    cy.get(kidsCategoryOption).click()
    cy.get(topsShirtOption).click()
    cy.contains('h2', kidsCategoryHeader).should('be.visible')
}

export const brandProducts = () => {
    cy.get(brandOption).click()
    cy.contains('h2', brandHeader).should('be.visible')
}