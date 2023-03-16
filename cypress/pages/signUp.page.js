class SignUpPage {
  navigateToSignUpPage() {
    cy.visit("https://www.perlego.com/sign-up");
  }

  enterEmail(email, confirmEmail) {
    cy.get('[data-testid="email"]').type(email, { delay: 0 });
    cy.get('[data-testid="confirmationEmail"]').type(confirmEmail, {
      delay: 0,
    });
  }
  enterFullName(firstname, lastname) {
    cy.get("[id=input-firstName]", { delay: 0 }).type(firstname);
    cy.get("[id=input-lastName]", { delay: 0 }).type(lastname);
  }

  enterPassword(pswd) {
    cy.get('[data-testid="password"]')
      // .clear()
      .type(pswd);
    return this;
  }

  waitUntil() {
    // Wait for 15 seconds for the user to solve the Captcha
    cy.get('iframe[title="reCAPTCHA"]').then(($el) => {
      if ($el[0]["title"] == "reCAPTCHA") {
        cy.wait(15000);
      } else {
        cy.wait(500);
      }
    });
  }

  continue() {
    cy.get("button").contains("Continue").click();
  }

  checkBox() {
    cy.get(
      ":nth-child(6) > .sc-cWNmmJ > .sc-cARXMi > .sc-jaZyJE > .sc-dYBPgv"
    ).click();
  }

  submit() {
    cy.get("button").contains("Create your account").click();
  }
}

export default SignUpPage;
