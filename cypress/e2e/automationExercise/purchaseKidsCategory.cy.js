import { loginData } from "../../fixtures/purchaseData/loginData"
import { checkLoginPage, fillOutLoginForm, verifyUserLoggedIn } from "../../support/actions/loginAction"

describe('Login functionality - Automation Exercise Page', {testIsolation: false}, () => {
    before('Loading Page', () => {
        cy.visit('/')
    })

    it('Verify that home page is displayed when the user sets valid values', () => {
        checkLoginPage()
        fillOutLoginForm(loginData.email, loginData.password)
        verifyUserLoggedIn()
    })

    it('Check that the products are displayed in the kids category', () => {
        cy.get('[href="#Kids"]').click()
        cy.get('[href="/category_products/5"]').click()
        cy.contains('h2', 'Kids - Tops & Shirts Products').should('be.visible')
    })
    
    it('Test that the user can add a product', () => {
        cy.get('.product-image-wrapper').last().realHover()
        cy.get('[data-product-id="24"]').eq(1).click()
        cy.contains('p', 'Your product has been added to cart.').should('be.visible')
        cy.get('[href="/view_cart"]').eq(1).click()
        cy.url().should('include', '/view_cart')
    })

    it('Verify that the user can proceed with checkout', () => {
        cy.get('.active').should('be.visible')
        cy.get('[href="/product_details/24"]').should('be.visible')
        cy.get('[class="btn btn-default check_out"]').click()
        cy.url().should('include', '/checkout')
    })

    it('Check the address and the purchase summary', () => {
        cy.contains('li', 'Mr. fNAutomation3 lNAutomation3').should('be.visible')
        cy.contains('li', 'Believe').should('be.visible')
        cy.contains('li', 'Av.Blanco Galindo km 3/2').should('be.visible')
        cy.contains('li', 'Texas Houston 0000').should('be.visible')
        cy.contains('li', 'United States').should('be.visible')
        cy.contains('li', '59172708582').should('be.visible')
        cy.get('[href="/product_details/24"]').should('be.visible')
        cy.get('[href="/payment"]').click()
        cy.url().should('include', '/payment')
    })

    it('Verify that the order was placed successfully', () => {
        cy.get('[name="name_on_card"]').type('prueba cypress')
        cy.get('[name="card_number"]').type('4242424242424242')
        cy.get('[name="cvc"]').type('125')
        cy.get('[name="expiry_month"]').type('01')
        cy.get('[name="expiry_year"]').type('2029')
        cy.get('#submit').click()
        cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible')
        cy.get('.btn-primary').click()
    })

    after('Logout User', () => {
        cy.get('[href="/logout"]').click()
    })
})