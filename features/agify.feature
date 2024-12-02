# features/agify.feature
Feature: Agify API

  Scenario Outline: Get age for a name
    Given the API endpoint is "https://api.agify.io"
    When I send a GET request with name "<name>"
    Then the response status should be 200
    And the response should contain the age

    Examples:
      | name       |
      | billybob   |
      | alice      |
      | charlie    |
      | billy@bob! |
