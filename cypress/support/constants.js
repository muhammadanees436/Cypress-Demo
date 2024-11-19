// cypress/support/constants.js
export const URLs = {
    BASE_URL: "http://10.0.1.4/#/",
    LOGIN_PAGE: "/login",
  };
  
  export const MESSAGES = {
    loginPageErrorMessageEmailRequired : "Email is required.",
    loginPageErrorMessagePassRequired : "Password is required.",
    loginPageAlertErrorInvalidUserNameOrPass : "Invalid Password",
    otpPageAlertMessage : "No roles attached to this user",
    getUserIDFromSession : "() :> sessionStorage.getItem('userId')",
    loginPageTitle : "Login",
    EmailFieldPlaceHolderText : "Enter User Name",
    passFieldPlaceHolderText : "Enter Password",
    rememberMeLabelText : "Remember Me",
    forgetPassLabelText : "Forgot Password",
    clickToResendText : "Click to resend",
    verifyOtpText : "Verify OTP",
    pleaseCheckEmailText : "Please Check Your Email",
    didNotGetOtpText : "Didn't get the code?",
    thisFieldIsRequiredText : "This Field is required",
    thisfieldIsRequiredText : "This field is required",
    thisFieldIsRequiredText2 : "This Field is required.",
    transactionListErrorMsg : "This Dropdown should not be empty",
    empty : "",
    descriptionText : "Description*",
    nameText : "Name*",
    transactionText : "List of transactions*",
    addNewText : "ADD NEW",
    viewDetailsText : "View Detail",
    somethingHasWentWrongText : "Something went wrong !!",
    editDetailText : "Edit Detail",
    transactionName : "Zong",
    kycHeaderText : "Add KYC Attribute",
  }