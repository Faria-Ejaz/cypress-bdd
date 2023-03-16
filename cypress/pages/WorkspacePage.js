class WorkspacePage {
  logout() {
    cy.get("#userIcon").click();
    cy.get(".sc-jDfIjF").click();
  }
}

export default WorkspacePage;
