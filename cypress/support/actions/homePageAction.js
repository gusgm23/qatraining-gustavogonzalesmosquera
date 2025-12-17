import { kidsCategoryHeader, kidsCategoryOption, topsShirtOption } from "../pages/homePage"

export const Kidsproducts = () => {
    cy.get(kidsCategoryOption).click()
    cy.get(topsShirtOption).click()
    cy.contains('h2', kidsCategoryHeader).should('be.visible')
}
