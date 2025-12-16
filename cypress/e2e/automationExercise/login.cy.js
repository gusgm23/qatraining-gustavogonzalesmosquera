describe('Login functionality - Automation Exercise Page', {testIsolation: true}, () => {
    before('Loading Page', () => {
        cy.visit('/')
    })

    it('Verify that home page is visible successfully', () => {
        cy.get('[href="/login"]').click()
        cy.contains('h2', 'Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type('testAutomation3@yopmail.com')
        cy.get('[name="password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('b', 'testAutomation3').should('be.visible')
    })

    after('Logout User', () => {
        cy.get('[href="/logout"]').click()
    })
})