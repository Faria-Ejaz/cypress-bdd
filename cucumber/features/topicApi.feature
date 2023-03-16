Feature: Perlego Catalogue Topics API
    As a developer
    I want to verify the Perlego Catalogue Topics API
    So that I can ensure that it returns the expected data

    Scenario: Retrieve Catalogue Topics
        Given I send a GET request to "/catalogue-service/v1/topics"
        When the response status code is 200
        And the response should be in JSON format
        And the response should have a non-empty "data" property
        And the "data" object should have a non-empty "results" property
        And each "results" object should have a "name" property
        And each "results" object should have a "id" property
        Then the Topics API is working fine


    Scenario: Retrieving Forbidden Catalogue Topics
        Given I send a GET request to "/catalogue-service/v1/topics/9999"
        When the response status code is 403
        And the response should be in JSON format
        And the response should have a non-empty "message" property
        And the "message"  should have a value "Missing Authentication Token"
        Then the Topics API Authorization is working fine
