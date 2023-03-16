Feature: Search Page Filters
  As a user,
  I want to validate that basic filter combinations on the search page return at least 5 pages of results,
  So that I can find the books I am looking for more easily.

  Scenario: Verify basic filter combinations return at least 5 pages of results
    Given I am on the search page of "https://www.perlego.com/search"
    When I select a random category from the dropdown menu
    And I enter a random search term in the search input
    And I apply a random combination of filters
    Then I should see at least 5 pages of search results
