// cypress/pages/loginPage.js
class LoginPage {
    emailFieldSelector = '#email';
    passwordFieldSelector = "input[name='password']";
    loginButtonSelector = 'button[type="submit"]';
    loginHeadingSelector = 'p.Signin__Heading';
    otpLocatorBox1 = 'div.verifyOTP div div input:nth-child(1)';
    otpLocatorBox2 = 'div.verifyOTP div div input:nth-child(2)';
    otpLocatorBox3 = 'div.verifyOTP div div input:nth-child(3)';
    otpLocatorBox4 = 'div.verifyOTP div div input:nth-child(4)';
    otpSubmitButtonLocator = 'button[type="submit"][aria-label="Submit"]';
    logOutButton = 'div.details_section i.pi.pi-power-off';
    forgetPassLabelLocator = 'div.ForgotPassword__Alignment label.forgot_label';
    rememberMeLabelLocator = 'label[for="binary"].Remember_label';
    otpScreenTileLocator = 'p:contains("Verify OTP")';
    pleaseCheckEmailTitleLocator = 'p:contains("Please Check Your Email")';
    didNotGetOtpLabelLocator = 'p.text-white.mb-0';
    clickToResendLinkLocator = 'u:contains("Click to resend")';
    forgetPassEmailFieldLocator = 'input[name="email"]';
    forgetPasswordPageSubmitButtonLocator = 'button[aria-label="Submit"][type="submit"]';
    forgetPasswordPageCancelButtonLocator = 'button[aria-label="Cancel"]';
    
    navigateToLoginPage(url) {
        cy.visit(url);
    }

    enterEmail(email) {
        cy.get(this.forgetPassEmailFieldLocator).should('be.visible').type(email);
    }

    getEmailFieldPlaceHolderOnForgetPassPage() {
        return cy.get(this.forgetPassEmailFieldLocator).invoke('attr', 'placeholder');
    }

    clickOnForgetPasswordPageSubmitButton() {
        cy.get(this.forgetPasswordPageSubmitButtonLocator).should('be.visible').click();
    }

    clickOnForgetPasswordPageCancelButton() {
        cy.get(this.forgetPasswordPageCancelButtonLocator).should('be.visible').click();
    }

    getEmailFieldPlaceHolder() {
        return cy.get(this.emailFieldSelector).invoke('attr', 'placeholder');
    }

    getPassFieldPlaceHolder() {
        return cy.get(this.passwordFieldSelector).invoke('attr', 'placeholder');
    }

    getRememberMeLabelText() {
        return cy.get(this.rememberMeLabelLocator).invoke('text');
    }

    getForgetPassLabelText() {
        return cy.get(this.forgetPassLabelLocator).invoke('text');
    }

    clickOnForgetPassword() {
        cy.get(this.forgetPassLabelLocator).click();
    }

    getOtpScreenTitle() {
        cy.get(this.otpScreenTileLocator).should('be.visible').invoke('text');
    }

    getPleaseCheckEmailTitle() {
        cy.get(this.pleaseCheckEmailTitleLocator).should('be.visible').invoke('text');
    }

    getDidNotGetOtpLabelText() {
        cy.get(this.didNotGetOtpLabelLocator).should('be.visible').invoke('text');
    }

    getClickToResendLinkText() {
        cy.get(this.clickToResendLinkLocator).should('be.visible').invoke('text');
    }

    enterUsername(username) {
        cy.get(this.emailFieldSelector).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordFieldSelector).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButtonSelector).should('be.visible').click();
    }

    clickOtpSubmitBtn() {
        cy.get(this.otpSubmitButtonLocator).click();
    }

    enterOtp(otp) {
        const otpArray = otp.split('');
        cy.get(this.otpLocatorBox1).type(otpArray[0]);
        cy.get(this.otpLocatorBox2).type(otpArray[1]);
        cy.get(this.otpLocatorBox3).type(otpArray[2]);
        cy.get(this.otpLocatorBox4).type(otpArray[3]);
        this.clickOtpSubmitBtn();
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    clearEmailField() {
        cy.get(this.emailFieldSelector).clear();
    }

    clearPassField() {
        cy.get(this.passwordFieldSelector).clear();
    }

    clearInputFields() {
        this.clearEmailField();
        this.clearPassField();
    }

    logOut() {
        cy.get(this.logOutButton).click();
    }

}

export default LoginPage;
