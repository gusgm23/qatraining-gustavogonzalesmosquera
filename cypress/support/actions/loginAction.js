import { email, loginButton, loginText, password, signupLoginButton, userName } from "../pages/loginPage"


export const checkLoginPage = () => {
    cy.get(signupLoginButton).click()
    cy.contains('h2', loginText).should('be.visible')
}

export const fillOutLoginForm = (emailUser, passwordUser) => {
    cy.get(email).type(emailUser)
    cy.get(password).type(passwordUser)
    cy.get(loginButton).click()
}

export const verifyUserLoggedIn = () => {
    cy.contains('b', userName).should('be.visible')
}
