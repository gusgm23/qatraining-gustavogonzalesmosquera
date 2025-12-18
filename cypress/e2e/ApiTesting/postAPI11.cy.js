describe('HTTP POST Request to create a new user', () => {
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

    it('POST to create/register user account', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            form: true,
            body: {
                name: 'prueba',
                email: 'pruebagustavo@yopmail.com',
                password: '123456',
                tilte: 'Mr',
                birth_date: '19',
                birth_month: 'January',
                birth_year: '1995', 
                firstname: 'gus', 
                lastname: 'gon', 
                company: 'empresa', 
                address1: 'calle prueba123', 
                address2: 'calle prueba456', 
                country: 'Canada', 
                zipcode: '0000', 
                state: 'estado prueba', 
                city: 'ciudad prueba', 
                mobile_number: '12345678'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            cy.log('Status code: ' + response.status)
            cy.log('Response message: ' + body.message)
        })
    }) 
})