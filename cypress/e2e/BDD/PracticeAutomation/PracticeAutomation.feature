Feature: E-Commerce site - Practice Automation Testing
  

   # Scenario: Login with valid credentials
   #  Given Visiting the site
   #  When User log-in with Username and Password
   #     | Username        | Password    |
   #     | poojafulzele@gmail.com | Pooja$1234 |
   #  And Click on the login button
   #  Then Dashboard should be visible



   # Scenario Outline: Login with multiple users with valid credentials
   #  Given Visiting the site
   #  When User log-in with '<Username>' and '<Password>'
   #  And Click on the login button
   #  Then Dashboard should be visible

   #  Examples:
   #      | Username        | Password    |
   #      | poojafulzele@gmail.com | Pooja$1234 |
   #      | gauri@test.com  | 12Minskole@ |
   #      | Arjun@test.com  | Arjun@12    |




   Scenario Outline: Login with multiple users with valid credentials
    Given Visiting the site
    When User log-in with '<Username>' and '<Password>'
    And Click on the login button
    Then should be visible for '<Credentials>' credentials

    Examples:
        | Username        | Password    |  Credentials |
        | poojafulzele@gmail.com | Pooja$1234 |  Valid |
        | gauri@test.com  | 12Minskole@ | Valid |
        | Arjun@test.com  | Arjun12    |  Invalid |



   