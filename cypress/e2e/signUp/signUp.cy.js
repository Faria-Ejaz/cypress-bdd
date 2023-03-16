import SignUpPage from "../../pages/signUp.page";
import LoginPage from "../../pages/LoginPage";
import WorkspacePage from "../../pages/WorkspacePage";

describe("Sign up, store credentials, create a workspace, log in ", () => {
  const register = new SignUpPage();
  const login = new LoginPage();
  const workspacePage = new WorkspacePage();

  const firstname = "test";
  const lastName = " user";
  const email = "testuser@example.com";
  const password = "Password!23";

  beforeEach(() => {
    // Store user credentials in local storage
    window.localStorage.setItem("firstname", firstname);
    window.localStorage.setItem("lastName", lastName);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
  });

  it("Should Sign Up New User", () => {
    // Retrieve user credentials from local storage
    const storedfirstname = window.localStorage.getItem("firstname");
    const storedlastName = window.localStorage.getItem("lastName");
    const storedEmail = window.localStorage.getItem("email");
    const storedPassword = window.localStorage.getItem("password");

    register.navigateToSignUpPage();
    register.enterEmail(storedEmail, storedEmail);
    register.waitUntil("#input-confirmationEmail"); // Wait for 15 seconds for the user to solve the Captcha
    register.continue();
    register.enterFullName(storedfirstname, storedlastName);
    cy.wait(500);
    cy.get("#cv-6-0-step2-btn").click();
    register.enterPassword(storedPassword);
    register.checkBox();
    register.submit();
  });

  it("Logs in with valid credentials", () => {
    // Retrieve user credentials from local storage
    const storedEmail = window.localStorage.getItem("email");
    const storedPassword = window.localStorage.getItem("password");

    login.visit();
    login.fillLoginForm(storedEmail, storedPassword);
    login.submitLoginForm();
    workspacePage.logout();

  });

  after(() => {
    // Clear user credentials from local storage
    window.localStorage.removeItem("firstname");
    window.localStorage.removeItem("lastName");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("password");
  });
});
