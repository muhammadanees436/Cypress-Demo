//import MESSAGES from '../../constants/MESSAGES'; // Assuming you have a similar MESSAGES file
//import { ExtentTestManager } from '../../utils/extentreports/ExtentTestManager'; // Update import paths accordingly
//import { returnLoginHistory } from '../../utils/dbQueries'; // Update with your database query utility
import { URLs, MESSAGES } from '../../support/constants';
let userdata;

describe('Login Tests', () => {
    before(() => {
        //cy.visit(URLs.BASE_URL);
        cy.fixture('users').then((data) => {
            userdata = data;
        });
        //cy.visit(URLs.BASE_URL); 

      });

      beforeEach(() => {
        
          // Visit the page and log in to set up the session
          cy.visit(URLs.BASE_URL); 
        });
   

    
    //let softAssert;
    it('Verify error messages are showing with empty fields', () => {
        
        cy.clearFields();
        cy.get('button[type="submit"]').click();
        cy.contains(MESSAGES.loginPageErrorMessageEmailRequired).should('be.visible');
        cy.contains(MESSAGES.loginPageErrorMessagePassRequired).should('be.visible');
    });

    it('Verify error messages are showing with password field empty', () => {
        cy.clearFields();
        cy.get('button[type="submit"]').click();
        cy.contains(MESSAGES.loginPageErrorMessagePassRequired).should('be.visible');
    });

    it('Verify error messages are showing with email field empty', () => {
        cy.clearFields();
        cy.get('input[name="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.contains(MESSAGES.loginPageErrorMessageEmailRequired).should('be.visible');
    });

    it('Verify user is unable to login with invalid credentials', () => {
        cy.get('input[name="email"]').type('KASHIF');
        cy.get('input[name="password"]').type('1111');
        cy.get('button[type="submit"]').click();
        cy.get('[role="alert"]').should('be.visible')
            .and('contain.text', MESSAGES.loginPageAlertErrorInvalidUserNameOrPass);
    });

    it('Verify error message is showing when no email is provided for Forget Password', () => {
        cy.get('.forgot_label').click();
        cy.get('button[type="submit"]').click();
        // Cypress doesn't have a direct SoftAssert like TestNG
        cy.contains(MESSAGES.loginPageErrorMessageEmailRequired).should('be.visible');
        // Example of assertion continuation
        cy.get('button[aria-label="Cancel"]').click();
    });

    it('Verify user can login using valid credentials and OTP', () => {
        cy.contains(MESSAGES.loginPageTitle).should('be.visible');
        cy.get('input[name="email"]').should('have.attr', 'placeholder', MESSAGES.EmailFieldPlaceHolderText);
        cy.get('input[name="password"]').should('have.attr', 'placeholder', MESSAGES.passFieldPlaceHolderText);
        cy.contains(MESSAGES.rememberMeLabelText).should('be.visible');
        cy.contains(MESSAGES.forgetPassLabelText).should('be.visible');
        
        cy.login(userdata.username, userPass); // Custom command to login
        cy.contains(MESSAGES.clickToResendText).should('be.visible');
        cy.contains(MESSAGES.verifyOtpText).should('be.visible');
        cy.contains(MESSAGES.pleaseCheckEmailText).should('be.visible');
        cy.contains(MESSAGES.didNotGetOtpText).should('be.visible');
        
        cy.get('input[name="otp"]').type(staticOtp); // Assuming OTP input field is available
        cy.contains('Dashboard').should('be.visible');
        
        cy.window().then((win) => {
            const userID = win.sessionStorage.getItem('userID'); // Assuming session storage holds userID
            returnLoginHistory(userID).then((flag) => {
                cy.log('Flag from DB: ' + flag);
                expect(flag).to.eq(1); // Check if the login record exists in the database
            });
        });

        cy.get('button[aria-label="Log out"]').click(); // Log out the user
    });
});


