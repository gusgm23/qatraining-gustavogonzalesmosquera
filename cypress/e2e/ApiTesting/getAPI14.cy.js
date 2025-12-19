describe('API 14: GET user account detail by email', () => {
    it('GET user account detail by email', () => {
        cy.fixture('apiData/getEmail.json').then((data) => {
            return cy.request({
                method: 'GET',
                url: 'https://automationexercise.com/api/getUserDetailByEmail',
                qs: { email: data.email },
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
                expect(response.status).to.eq(200)
                expect(body.user.email).to.exist
                expect(body.user.email).to.eq(data.email)
                cy.log('Status code: ' + response.status)
                cy.log('GET user account details: ' + JSON.stringify(body))
                cy.log('GET email: ' + body.user.email)
            })
        })
    })
})