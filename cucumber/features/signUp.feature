Feature: Sign up, log in, and create a workspace

    Scenario: Create a new account
        Given I am on the Perlego sign up page
        When I enter a random email and password
        And A user enter the email "johndoe@example.com"
        And A user clicks on Continue button
        And A user enter the first and last name "John Doe"
        And A user clicks on Continue button
        And A user enter the password "Password!23"
        And A user clicks on Create account button
        Then I should be on the Perlego home page

    Scenario: Login
        Given A user open site page
        When A user clicks on login button
        And A user enter the email "johndoe@example.com"
        And A user clicks on Continue button
        And A user enter the password "Password!23"
        And A user clicks on Log in button
        Then I should be on the Perlego home page
