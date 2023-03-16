class SearchPage {
  visit() {
    cy.visit("https://www.perlego.com/search");
  }

  selectFilter(filter) {
    return cy.get(`[data-testid="${filter}"] > .sc-jdrCGX`).click();
  }

  searchField() {
    return cy.get("#searchInput");
  }

  clickPagination() {
    return cy
      .get('[data-component-locator="pagination-wrapper"]')
      .children()
      .last()
      .click();
  }

  verifyPaginationResults() {
    return cy
      .get('[data-component-locator="pagination-wrapper"]')
      .find("div.kkWiCq")
      .should("have.length.of.at.least", 5);
  }
}

export default SearchPage;
