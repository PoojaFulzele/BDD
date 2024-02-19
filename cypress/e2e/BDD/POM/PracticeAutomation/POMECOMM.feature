Feature: Ecommerce site - GREENKART
   

   Scenario: E-commerce product delivery
      Given open the site
      When searching the product which starts from 'ca'
      And add to  the cart "Cashews"
      When place  the order and select country
      Then validates the thank you message


    Scenario Outline: E-commerce product delivery
      Given open the site
      When searching the product which starts from '<startP>'
      And add to  the cart "<Product>"
      When place  the order and select country
      Then validates the thank you message


     Examples:
     |startP|Product|
     |ca|Cashews|
     |br|Brinjal|   