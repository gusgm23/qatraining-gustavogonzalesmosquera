import { loginData } from "../../fixtures/purchaseData/loginData"
import { kidsproducts } from "../../support/actions/homePageAction"
import { checkLoginPage, fillOutLoginForm, verifyUserLoggedIn } from "../../support/actions/loginAction"
import { addProductToCart, popUpViewCart, proceedToCheckout, verifyCartPage, verifyCheckoutPage } from "../../support/actions/productsAction"
import { proceedToPayment, verifyPaymentPage, verifyPersonalInfo, verifyPurchaseSummary } from "../../support/actions/checkoutAction"
import { filloutPaymentForm, verifyPaymentSuccess } from "../../support/actions/paymentAction"
import { paymentData } from "../../fixtures/purchaseData/paymentData"
import { logoutPage } from "../../support/actions/logoutAction"

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
        kidsproducts()
    })
    
    it('Test that the user can add a product', () => {
        addProductToCart()
        popUpViewCart()
        verifyCartPage()
    })

    it('Verify that the user can proceed with checkout', () => {
        proceedToCheckout()
        verifyCheckoutPage()
    })

    it('Check the address and the purchase summary', () => {
        verifyPersonalInfo()
        verifyPurchaseSummary()
        proceedToPayment()
        verifyPaymentPage()
    })

    it('Verify that the order was placed successfully', () => {
        filloutPaymentForm(paymentData.cardName, paymentData.cardNumber, paymentData.cardCVC, paymentData.cardExpiryMonth, paymentData.cardExpiryYear)
        verifyPaymentSuccess()
    })

    after('Logout User', () => {
        logoutPage()
    })
})