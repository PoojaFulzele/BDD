Feature: Google Page



   Scenario: opening search engine page
      Given I opened google page
      When I see "Google" in the title
      Then I see "google" in the url
