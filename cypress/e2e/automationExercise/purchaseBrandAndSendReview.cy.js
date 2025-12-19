import { loginData } from "../../fixtures/purchaseData/loginData"
import { checkLoginPage, fillOutLoginForm, verifyUserLoggedIn } from "../../support/actions/loginAction"
import { brandProducts } from "../../support/actions/homePageAction"
import { logoutPage } from "../../support/actions/logoutAction"
import { addToCartProduct, proceedToCheckout, sendReview, verifyCartPage, verifyCheckoutPage, viewProductDetails } from "../../support/actions/productsAction"
import { sendReviewData } from "../../fixtures/purchaseData/sendReviewData"
import { verifyPersonalInfo, proceedToPayment, verifyPaymentPage, verifyPurchaseSummary29 } from "../../support/actions/checkoutAction"
import { paymentData } from "../../fixtures/purchaseData/paymentData"
import { filloutPaymentForm, verifyPaymentSuccess } from "../../support/actions/paymentAction"

describe('Group 2 - Purchase a product from Brand and send a review of it', {testIsolation: false}, () => {
    before('Loading Page', () => {
        cy.visit('/')
    })

    it('Verify that home page is displayed when the user sets valid values', () => {
        checkLoginPage()
        fillOutLoginForm(loginData.email, loginData.password)
        verifyUserLoggedIn()
    })

    it('Check that the products are displayed in the brand options', () => {
        brandProducts()
    })
    
    it('Test that the user can add a product and send a review', () => {
        viewProductDetails()
        sendReview(sendReviewData.reviewName, sendReviewData.reviewEmail, sendReviewData.reviewText)
        addToCartProduct()
        verifyCartPage()
    })

    it('Verify that the user can proceed with checkout', () => {
        proceedToCheckout()
        verifyCheckoutPage()
    })

    it('Check the address and the purchase summary', () => {
        verifyPersonalInfo()
        verifyPurchaseSummary29()
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