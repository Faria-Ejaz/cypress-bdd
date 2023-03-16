class LoginPage {
    visit() {
      cy.visit('https://www.perlego.com')
      cy.get('.sc-HLtgk > .sc-bHnazb > a').click();
    }
  
    fillLoginForm(email, password) {
      cy.get('#input-email').clear()
        .type(email);
        cy.get('[data-testid="LoginFormEmail-ContinueButton"]').click()
        cy.get('.sc-dRIUVP > input').type(password);
    }
  
    submitLoginForm() {
      cy.get('[data-testid="LoginFormPassword-ContinueButton"]').click()
    }
  }

  export default LoginPage;

  