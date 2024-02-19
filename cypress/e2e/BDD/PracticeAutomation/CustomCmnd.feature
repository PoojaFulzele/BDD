Feature: E-Commerce site - login Examples


 Scenario: Login with valid credentials
    Given Visiting the OrangeHRM site & login with valid credentials

 Scenario Outline: Login with multiple users with valid credentials
     Given Visit Practice Automation Site login with "<Username>" and "<Password>" & Dashboard should be visible   

    Examples:
        | Username        | Password    |
        | poojafulzele@gmail.com | Pooja$1234 |
        | gauri@test.com  | 12Minskole@ |
        | Arjun@test.com  | Arjun@12    |
