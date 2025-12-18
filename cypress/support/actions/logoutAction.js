import { logoutButton } from "../pages/logoutPage"

export const logoutPage = () => {
    cy.get(logoutButton).click()
}