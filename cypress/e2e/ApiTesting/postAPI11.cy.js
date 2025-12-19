describe('API 11: POST To Create/Register User Account', () => {
    it('POST to create/register user account', () => {
        cy.fixture('apiData/postUser.json').then((data) => {
            cy.request({
                method: 'POST',
                url: 'https://automationexercise.com/api/createAccount',
                form: true,
                body: data
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
                expect(response.status).to.eq(200)
                expect(body.responseCode).to.eq(201)
                expect(body.message).to.eq('User created!')
                cy.log('Status code: ' + response.status)
                cy.log('Response message: ' + body.message)
            })
        })
    }) 

    //This is a test DELETE request added to try out with the POST assigned for the project 
    it('DELETE user account', () => {
        cy.fixture('apiData/postUser.json').then((data) => {
            cy.request({
                method: 'DELETE',
                url: 'https://automationexercise.com/api/deleteAccount',
                form: true,
                body: data
            }).then((response) => {
                expect(response.status).to.eq(200)
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
                cy.log('Status code: ' + response.status)
                cy.log('Response message: ' + body.message)
            })
        })
    }) 
})