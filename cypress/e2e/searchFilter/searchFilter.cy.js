import SearchPage from "../../pages/searchPage";

describe("Search page filters", () => {
  const search = new SearchPage();

  beforeEach(() => {
    cy.viewport(1280, 720);
    // Load the search page
    search.visit();
  });

  it("returns at least 5 pages of results with random filter combination", () => {
    // Apply the random filter combination
    search.selectFilter("FilterPublicationDate").selectRandomOption();
    cy.wait(500);
    search.selectFilter("FilterFacetTopic").selectRandomOption();
    cy.wait(500);
    search.selectFilter("FilterFormat").selectRandomOption();

    // Verify that at least 5 pages of results are returned
    cy.scrollTo("bottom");
    search.clickPagination();
    cy.reload();
    search.verifyPaginationResults();
  });

  it("should return at least 5 pages of results for random search input and basic filter combinations'", () => {
    // Apply the random filter combination
    search.selectFilter("FilterPublicationDate").selectRandomOption();
    cy.wait(500);
    search.selectFilter("FilterFacetTopic").selectRandomOption();

    cy.wait(500);
    //Search Field
    search.searchField().enterRandomSearchTerm(); // Entering the random search keyword
    cy.wait(500);

    // Verify that at least 5 pages of results are returned
    cy.scrollTo("bottom");
    search.clickPagination();
    cy.reload();
    search.verifyPaginationResults();
  });
});
