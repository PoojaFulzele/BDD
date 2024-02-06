Feature: E-Commerce site - OrangeHRM
  

   Scenario: Login with valid credentials
    Given Visit the site
    When Enter valid username and password
    And Click on the submit button
    Then Validate the "Dashboard"

     Scenario: Login with invalid credentials
    Given Visit the site
    When Enter invalid username and password
    And Click on the submit button
    Then Validate the Error message